const fetch = require("node-fetch"),
	{ AbortController } = require("abort-controller");

/**
 * Edit a person's name data object for better use.
 * @private
 * @param { Object } obj - A name object of the person.
 * @returns { Object } An edited object of the person.
 */
function nameEditor(obj) {
	if (obj.alternative.length < 1 || obj.alternative[0] === "") obj.alternative = null;

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

		if (obj[x].node) list.push(obj[x].node);
		else if (obj[x].id && obj[x].length === 1) list.push(obj[x].id);
		else if (obj[x].url) list.push(obj[x].url);
		else list.push(obj[x]);
	}

	return list.length < 1 ? null : list;
}

/**
 * Converts a fuzzyDate into a Javascript Date
 * @private
 * @param { fuzzyDate } fuzzyDate - Date provided by AniList's API.
 * @returns { Date } Returns a date object of the data provided.
 */
const convertFuzzyDate = (fuzzyDate) =>
	Object.values(fuzzyDate).some((d) => !d) ? null : new Date(fuzzyDate.year, fuzzyDate.month - 1, fuzzyDate.day);

/**
 * Formats the media data to read better.
 * @private
 * @param { Object } media
 */
function formatMedia(media) {
	media.airingSchedule = media.airingSchedule.nodes;
	media.characters = edgeRemove(media.characters.nodes);
	media.externalLinks = edgeRemove(media.externalLinks);
	media.recommendations = media.recommendations.nodes;
	media.relations = media.relations.nodes;
	media.reviews = media.reviews.nodes;
	media.staff = edgeRemove(media.staff.nodes);
	media.studios = media.studios.nodes;
	media.trends = media.trends.nodes;

	if (media.trailer) {
		switch (media.trailer.site) {
			case "youtube":
				media.trailer = `https://youtu.be/${media.trailer.id}`;
				break;
			case "dailymotion":
				media.trailer = `https://www.dailymotion.com/video/${media.trailer.id}`;
				break;
			default:
				media.trailer = null;
				break;
		}
	}
	return media;
}

/**
 * @description A private class to take care of common methods in the package
 * @private
 * @since 1.5.0
 */
class Utilities {
	/**
	 * @constructor
	 * @param {String} [accessKey] - The AniList API token.
	 * @param {Object} [options] - Optional options used while getting info from AniList
	 */
	constructor(accessKey, options) {
		this.key = accessKey;
		this.options = options;
	}

	/**
	 * Generate the appropriate query header for the query.
	 *
	 * @param { String } type - The query type of the header. (ie: User or Character)
	 * @param { Number|String } id - The search term for the query.
	 * @param { String } addItm - An additional item to add to the search variables.
	 * @returns { Object[] } Returns an array. Index 0 is the search variables and Index 1
	 *      is the query header string.
	 * @since 1.5.0
	 */
	generateQueryHeaders(type, item, addItm) {
		// A search term is needed. Throw an error.
		if (!item) throw new Error("A term is not provided!");

		if (addItm && typeof addItm !== "string") throw new Error("The additional item in the query must be a string!");

		switch (typeof item) {
			case "number":
				switch (type) {
					case "MediaListCollection":
						return [
							{ id: item, type: addItm },
							"query ($id: Int, $type: MediaType) { MediaListCollection(userId: $id, type: $type) {"
						];
					case "User":
					case "Staff":
					case "Character":
					case "Studio":
					case "Activity":
					case "Thread":
						return [{ id: item }, `query ($id: Int) { ${type} (id: $id) { `];
					default:
						throw new Error("This type doesn't have a query assigned to it!");
				}
			case "string":
				switch (type) {
					case "MediaListCollection":
						return [
							{ name: item, type: addItm },
							"query ($name: String, $type: MediaType) { MediaListCollection(userName: $name, type: $type) {"
						];
					case "User":
						return [{ name: item }, "query ($name: String) { User (name: $name) { "];
					// Both staff and character need the same query header.
					case "Staff":
					case "Character":
					case "Studio":
						return [{ search: item }, `query ($search: String) { ${type} (search: $search) { `];
					default:
						throw new Error("This type doesn't have a query assigned to it!");
				}
			default:
				throw new Error("Term does not match the required types!");
		}
	}

	/**
	 * Send a call to the AniList API with a query and variables.
	 * @param { String } query - The query to send to the AniList API
	 * @param { ?Object } variables - Any variables required such as a username or ID
	 * @returns { Object } Returns a customized object containing all of the data fetched.
	 * @since 1.0.0
	 */
	async send(query, variables = null) {
		if (!query) throw new Error("Query is not given!");

		if (query.startsWith("mutation") && this.key === null)
			throw new Error("Function requires authenciation but no authorization found.");

		const controller = new AbortController();
		const requestTimeout = setTimeout(() => controller.abort(), this.options.timeout);

		const options = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json"
			},
			signal: controller.signal,
			body: JSON.stringify({ query, variables })
		};
		if (this.key) options.headers.Authorization = `Bearer ${this.key}`;

		const response = await fetch("https://graphql.anilist.co", options)
			.catch((error) => {
				if (error.name === "AbortError")
					throw new Error(`ERROR: Request timed out after ${this.options.timeout}ms, is AniList up?`);
			})
			.finally(() => clearTimeout(requestTimeout));

		let json;

		try {
			json = await response.json();
		} catch (err) {
			throw new Error(err);
		}

		if (Object.keys(json).length < 0)
			throw new Error("ERROR: AniList API is down. Please refer to official channels for more information.");

		const { errors } = json;
		if (errors) return errors;

		const { Media, Character, Staff, Page, Recommendation, Studio, User, Viewer, MediaListCollection } = json.data;

		if (Media) return formatMedia(Media);

		if (Character) {
			Character.name = nameEditor(Character.name);
			Character.media = Character.media.nodes;
			return Character;
		}

		if (Staff) {
			Staff.name = nameEditor(Staff.name);
			Staff.staffMedia = edgeRemove(Staff.staffMedia.nodes);
			Staff.characters = edgeRemove(Staff.characters.nodes);
			return Staff;
		}

		if (Page) {
			// For list of recent activities with getRecentActivity.
			if (Page.activities) return Page.activities;

			if (Recommendation) {
				// For recommendation lists.
				Recommendation.recommendations = Page.recommendations;
				return Recommendation;
			}

			// For general searching
			return Page;
		}

		if (Studio) {
			Studio.media = edgeRemove(Studio.media.nodes);
			return Studio;
		}

		if (User || Viewer) {
			let userObj = User || Viewer;
			if (userObj.statistics) {
				// Move all names up a level.
				userObj.statistics.anime.staff.forEach((e) => e.staff.name = e.staff.name.english);
				userObj.statistics.anime.voiceActors.forEach((e) => e.voiceActor.name = e.voiceActor.name.english);
				userObj.statistics.manga.staff.forEach((e) => e.staff.name = e.staff.name.english);
			}

			if (userObj.statistics && !userObj.avatar) return userObj.statistics;

			// Move all node objects up one level.
			userObj.favourites.anime = userObj.favourites.anime.nodes;
			userObj.favourites.manga = userObj.favourites.manga.nodes;
			userObj.favourites.characters = edgeRemove(userObj.favourites.characters.nodes);
			userObj.favourites.staff = edgeRemove(userObj.favourites.staff.nodes);
			userObj.favourites.studios = userObj.favourites.studios.nodes;

			return userObj;
		}

		if (MediaListCollection) {
			MediaListCollection.lists.forEach((list) =>
				list.entries.map((entry) => {
					// Media does not need to be formatted in a list query.
					entry.dates = {
						startedAt: convertFuzzyDate(entry.startedAt),
						completedAt: convertFuzzyDate(entry.completedAt),
						updatedAt: new Date(entry.updatedAt * 1000),
						createdAt: entry.createdAt === 0 ? null : new Date(entry.createdAt * 1000)
					};
					["startedAt", "completedAt", "updatedAt", "createdAt"].forEach((e) => delete entry[e]);
				})
			);
			return MediaListCollection.lists;
		}

		// If nothing matches, return collected data
		return json.data;
	}
}

module.exports = Utilities;
