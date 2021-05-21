const fetch = require("node-fetch");

/**
 * Edit a person's name data object for better use.
 * @private
 * @param { Object } obj - A name object of the person.
 * @returns { Object } An edited object of the person.
 */
function nameEditor(obj) {
	if (obj.alternative.length < 1 || obj.alternative[0] === "") {
		obj.alternative = null;
	}

	if (obj.full && obj.english === null) {
		obj.english = obj.full;
		delete obj.full;
	}

	return obj;
}

/**
 * Moves data up levels in the object for better use.
 * @private
 * @param { Object } obj - Required. The object to edit.
 * @returns { Object } Returns the edited object.
 */
function edgeRemove(obj) {
	let list = [];
	for (let x = 0; x < obj.length; x++) {
		if (obj[x].name) {
			obj[x].name = obj[x].name.english || obj[x].name.full;
		}

		if (obj[x].node) {
			list.push(obj[x].node);
		} else if (obj[x].id && obj[x].length === 1) {
			list.push(obj[x].id);
		} else if (obj[x].url) {
			list.push(obj[x].url);
		} else {
			list.push(obj[x]);
		}
	}

	if (list.length < 1) {
		list = null;
	}
	return list;
}

/**
 * Converts a fuzzyDate into a Javascript Date
 * @private
 * @param { fuzzyDate } fuzzyDate - Date provided by AniList's API.
 * @returns { Date } Returns a date object of the data provided.
 */
function convertFuzzyDate(fuzzyDate) {
	if (Object.values(fuzzyDate).some((d) => d === null)) return null;
	return new Date(fuzzyDate.year, fuzzyDate.month - 1, fuzzyDate.day);
}

/**
 * Formats the media data to read better.
 * @private
 * @param { Object } media
 */
async function formatMedia(media) {
	media.reviews = media.reviews.nodes.length === 0 ? null : media.reviews.nodes;

	media.externalLinks = await edgeRemove(media.externalLinks);
	media.characters = await edgeRemove(media.characters.nodes);
	media.staff = await edgeRemove(media.staff.nodes);

	if (media.airingSchedule) {
		media.airingSchedule = media.airingSchedule.nodes;
	}
	if (media.studios) {
		media.studios = media.studios.nodes;
	}
	media.recommendations = media.recommendations.nodes;
	media.relations = media.relations.nodes;
	media.trends = media.trends.nodes;

	if (media.synonyms.length < 1) {
		media.synonyms = null;
	}

	if (media.trailer) {
		switch (media.trailer.site) {
			case "youtube":
				media.trailer = `https://www.youtube.com/watch?v=${media.trailer.id}`;
				break;
			case "dailymotion":
				media.trailer = `https://www.dailymotion.com/video/${media.trailer.id}`;
				break;
			case undefined:
				media.trailer = null;
				break;
			default:
				break;
		}
	}
	return media;
}

module.exports = {
	/**
	 * Send a call to the AniList API with a query and variables.
	 * @param { String } query
	 * @param { Object } variables
	 * @returns { Object } Returns a customized object containing all of the data fetched.
	 */
	send: async function (query, variables) {
		if (!query || !variables) {
			throw new Error("Query or variables are not given!");
		}
		const options = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json"
			},
			body: JSON.stringify({ query: query, variables: variables })
		};
		if (this.key) {
			options.headers.Authorization = `Bearer ${this.key}`;
		}
		const response = await fetch("https://graphql.anilist.co", options);
		let json = await response.json();

		if (json.errors) {
			return json.errors;
		}

		if (json.data.Media) {
			return await formatMedia(json.data.Media);
		}

		if (json.data.Character) {
			json.data.Character.name = await nameEditor(json.data.Character.name);
			json.data.Character.media = json.data.Character.media.nodes;
			return json.data.Character;
		}

		if (json.data.Staff) {
			json.data.Staff.name = await nameEditor(json.data.Staff.name);
			json.data.Staff.staffMedia = await edgeRemove(json.data.Staff.staffMedia.nodes);
			json.data.Staff.characters = await edgeRemove(json.data.Staff.characters.nodes);
			if (json.data.Staff.description.length < 1) {
				json.data.Staff.description = null;
			}
			return json.data.Staff;
		}

		if (json.data.Page) {
			if (json.data.Page.activities) {
				// For list of recent activities with getRecentActivity.
				return json.data.Page.activities;
			}
			if (json.data.Recommendation) {
				// For recommendation lists.
				json.data.Recommendation.recommendations = json.data.Page.recommendations;
				return json.data.Recommendation;
			}
			return json.data.Page; // For general searching
		}

		if (json.data.Studio) {
			json.data.Studio.media = await edgeRemove(json.data.Studio.media.nodes);
			return json.data.Studio;
		}

		if (json.data.User || json.data.Viewer) {
			let userObj = json.data.User || json.data.Viewer;
			if (userObj.statistics) {
				//Move all names up a level.
				userObj.statistics.anime.staff.forEach((e) => {
					e.staff.name = e.staff.name.english;
				});
				userObj.statistics.anime.voiceActors.forEach((e) => {
					e.voiceActor.name = e.voiceActor.name.english;
				});
				userObj.statistics.manga.staff.forEach((e) => {
					e.staff.name = e.staff.name.english;
				});
			}

			if (userObj.statistics && !userObj.avatar) {
				return userObj.statistics;
			}

			//Move all node objects up one level.
			userObj.favourites.anime = userObj.favourites.anime.nodes;
			userObj.favourites.manga = userObj.favourites.manga.nodes;
			userObj.favourites.characters = await edgeRemove(userObj.favourites.characters.nodes);
			userObj.favourites.staff = await edgeRemove(userObj.favourites.staff.nodes);
			userObj.favourites.studios = userObj.favourites.studios.nodes;

			return userObj;
		}

		if (json.data.MediaListCollection) {
			json.data.MediaListCollection.lists.forEach((list) => {
				list.entries.map((entry) => {
					//Media does not need to be formatted in a list query.
					entry.dates = {
						startedAt: convertFuzzyDate(entry.startedAt),
						completedAt: convertFuzzyDate(entry.completedAt),
						updatedAt: new Date(entry.updatedAt * 1000),
						createdAt: entry.createdAt === 0 ? null : new Date(entry.createdAt * 1000)
					};
					["startedAt", "completedAt", "updatedAt", "createdAt"].forEach((e) => delete entry[e]);
				});
			});
			return json.data.MediaListCollection.lists;
		}

		return json.data; //If nothing matches, return collected data
	}
};
