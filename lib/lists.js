const headerBuilder = require("./utils/headerBuilder");

/**
 * Access a user's AniList list data.
 * @since 1.1.0
 * @memberof AniList
 */
class Lists {
	/**
	 * @description This constructor is meant for internal use and is apart of initializing. You cannot access this
	 * through the AniList class and are not expect to.
	 * @param { Utilities } utilities - The AniList Utilities class.
	 * @hideconstructor
	 */
	constructor(utilities) {
		this.util = utilities;
	}

	/**
	 * Fetch a user's AniList anime lists.
	 * @param { Number | String } user - Required. Can either be the username or the AniList ID.
	 * @returns { UserList }
	 * @since 1.1.0
	 */
	anime(user) {
		let queryVars = this.util.generateQueryHeaders("MediaListCollection", user, "ANIME");

		return this.util.send(
			queryVars[1] +
				`lists { name isCustomList isSplitCompletedList status entries { id
            media { id idMal title { romaji english native userPreferred } 
            episodes description format startDate { year month day } endDate { year month day }
            duration genres synonyms tags { name isMediaSpoiler } isFavourite isAdult siteUrl }
            status score progress repeat priority private notes hiddenFromStatusLists
            advancedScores startedAt { year month day } completedAt { year month day } updatedAt createdAt } } } }`,
			queryVars[0]
		);
	}

	/**
	 * [Requires Login] Add an entry to a user's list.
	 * @param {Number} id - The AniList ID of the entry to add
	 * @param {UpdateEntryOptions} options - Values to save with.
	 * @returns {UpdatedEntry}
	 * @since 1.13.0
	 */
	async addEntry(id, options) {
		if (typeof id !== "number") {
			throw new Error("Provided ID is not a number!");
		}
		if (typeof options !== "object") {
			throw new Error("Provide options is not an object!");
		}

		options.mediaId = id;

		let query = headerBuilder("mutation", "SaveMediaListEntry", options);

		query += `id mediaId status score progress progressVolumes repeat priority private 
		hiddenFromStatusLists customLists startedAt { year month day } completedAt { year month day } notes advancedScores }}`;

		return this.util.send(query).then((data) => {
			return data.SaveMediaListEntry;
		});
	}

	/**
	 * Fetch a user's AniList manga lists.
	 * @param { Number | String } user - Required. Can either be the username or the AniList ID.
	 * @returns { UserList }
	 * @since 1.1.0
	 */
	manga(user) {
		let queryVars = this.util.generateQueryHeaders("MediaListCollection", user, "MANGA");

		return this.util.send(
			queryVars[1] +
				`lists { name isCustomList isSplitCompletedList status entries { id
            media { id idMal title { romaji english native userPreferred } 
            volumes chapters description format startDate { year month day } endDate { year month day }
            genres synonyms tags { name isMediaSpoiler } isFavourite isAdult siteUrl }
            status score progress progressVolumes repeat priority private notes hiddenFromStatusLists
            advancedScores startedAt { year month day } completedAt { year month day } updatedAt createdAt } } } }`,
			queryVars[0]
		);
	}

	/**
	 * [Requires Login] Update a list entry to a user's list.
	 * @param {Number} id - The AniList list ID of the entry to edit.
	 * @param {UpdateEntryOptions} options - Values to save with.
	 * @returns {UpdatedEntry}
	 * @since 1.13.0
	 */
	async updateEntry(id, options) {
		if (typeof id !== "number") {
			throw new Error("Provided ID is not a number!");
		}
		if (typeof options !== "object") {
			throw new Error("Provide options is not an object!");
		}

		options.id = id;

		let query = headerBuilder("mutation", "SaveMediaListEntry", options);

		query += `id mediaId status score progress progressVolumes repeat priority private 
		hiddenFromStatusLists customLists startedAt { year month day } completedAt { year month day } notes advancedScores }}`;

		return this.util.send(query).then((data) => {
			return data.SaveMediaListEntry;
		});
	}

	/**
	 * [Requires Login] Remove an entry from a user's lists.
	 * @param {Number} id - The AniList list ID of the entry to remove.
	 * @returns {Boolean} Returns true if removed, false otherwise.
	 * @since 1.13.0
	 */
	async removeEntry(id) {
		if (typeof id !== "number") {
			throw new Error("Provided ID is not a number!");
		}

		const query = `mutation { DeleteMediaListEntry(id:${id}) { deleted } }`;

		return this.util.send(query).then((data) => {
			return data.DeleteMediaListEntry.deleted;
		});
	}
}

module.exports = Lists;
