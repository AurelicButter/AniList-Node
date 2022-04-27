const activity = require("./activity"),
	lists = require("./lists"),
	media = require("./media"),
	people = require("./people"),
	recommendation = require("./recommendation"),
	searchEntry = require("./search"),
	Thread = require("./thread"),
	User = require("./user"),
	util = require("./utilities");

/**
 * The main class for AniList-Node
 * @since 1.0.0
 */
class AniList {
	/**
	 * @constructor
	 * @param {String} [accessKey] - The AniList API token. If no key is provided,
	 *      the user will not be able to access private information such as
	 *      the authorized user's profile (if set to private).
	 * @param {InitOptions} [options] - Optional options to use when getting info from AniList
	 */
	constructor(accessKey, options = {}) {
		if (!accessKey) {
			accessKey = null;
		}

		if (options.timeout) {
			if (typeof options.timeout !== "number") throw new TypeError("ERROR: 'options.timeout' should be a number");
		} else {
			options.timeout = 15000;
		}

		// Import utilities for the classes.
		this.__util = new util(accessKey, options);

		/**
		 * @augments User
		 * @see {@Link AniList.User}
		 * @since 1.0.0
		 */
		this.user = new User(this.__util);

		/**
		 * @augments lists
		 * @see {@Link AniList.Lists}
		 * @since 1.1.0
		 */
		this.lists = new lists(this.__util);

		/**
		 * @augments media
		 * @see {@Link AniList.Media}
		 * @since 1.0.0
		 */
		this.media = new media(this.__util);

		/**
		 * @augments people
		 * @see {@Link AniList.People}
		 * @since 1.0.0
		 */
		this.people = new people(this.__util);

		/**
		 * @augments Activity
		 * @see {@Link AniList.Activity}
		 * @since 1.7.0
		 */
		this.activity = new activity(this.__util);

		/**
		 * @augments Search
		 * @see {@Link AniList.Search}
		 * @since 1.7.0
		 */
		this.searchEntry = new searchEntry(this.__util);

		/**
		 * @augments Recommendation
		 * @see {@Link AniList.Recommendation}
		 * @since 1.8.0
		 */
		this.recommendation = new recommendation(this.__util);

		/**
		 * @augments Thread
		 * @see {@Link AniList.Thread}
		 * @since 1.11.0
		 */
		this.thread = new Thread(this.__util);
	}

	/**
	 * Grabs data on a studio
	 * @param {String | Number} studio - The studio ID or name on AniList.
	 * @return { StudioEntry }
	 * @since 1.0.0
	 */
	studio(studio) {
		const queryVars = this.__util.generateQueryHeaders("Studio", studio);

		return this.__util.send(
			queryVars[1] +
				`id name isAnimationStudio siteUrl isFavourite favourites 
            media { nodes { id title { romaji english native userPreferred } } } } }`,
			queryVars[0]
		);
	}

	/**
	 * [Requires Login] Favourite/Unfavourite a studio
	 * @param {Number} id - Required. The ID tied to the AniList entry.
	 * @returns {Boolean} Returns true if added, false otherwise.
	 * @since 1.12.0
	 */
	async favouriteStudio(id) {
		if (!id || typeof id !== "number") {
			throw new Error("AniList ID is not provided!");
		}

		const data = await this.util.send(
			`mutation ($studioID: Int) {
				ToggleFavourite(studioId: $studioID) {
					studios (page: 1, perPage: 25) {
					nodes { id }
			} } }`,
			{ studioID: id }
		);

		return data.ToggleFavourite.studios.nodes.some((e) => {
			if (e.id === id) {
				return true;
			}
		});
	}

	/**
	 * Searches AniList based on a specific term.
	 * @param {String} type - Required. Either anime, manga, character, staff, studio, or user.
	 * @param {String} term - Required. The term to lookup. (ie: "Honzuki no Gekokujou" or "Butterstroke")
	 * @param {Number} page - Which page of the results to look at. Will default to 1 if not provided.
	 * @param {Number} amount - The amount of results per page. AniList will cap this at 25 and function will default to 5 if not provided.
	 * @return { SearchEntry }
	 * @since 1.0.0
	 * @deprecated Please use {@link AniList.Search} class via `AniList.searchEntry` for updated searching. {@link AniList.Search} will replace
	 * this function in the next major update (v2.0.0).
	 */
	search(type, term, page = 1, amount = 5) {
		if (!type) {
			throw new Error("Type of search not defined!");
		} else if (!term) {
			throw new Error("Search term was not provided!");
		}

		//Validate all type conditions.
		if (typeof type !== "string") {
			throw new Error("Type is not a string.");
		}
		if (typeof term !== "string") {
			throw new Error("Term is not a string");
		}
		if (typeof page !== "number") {
			throw new Error("Page number is not a number");
		}
		if (typeof amount !== "number") {
			throw new Error("Amount is not a number");
		}

		const search = {
			anime: "media (type: ANIME, search: $search) { id title { romaji english native userPreferred } }",
			manga: "media (type: MANGA, search: $search) { id title { romaji english native userPreferred } }",
			char: "characters (search: $search) { id name { english: full } }",
			staff: "staff (search: $search) { id name { english: full } }",
			studio: "studios (search: $search) { id name }",
			user: "users (search: $search) { id name }"
		};

		let query = search[type.toLowerCase()];
		if (!query) {
			throw new Error("Type not supported.");
		}

		return this.__util.send(
			`query ($page: Int, $perPage: Int, $search: String) {
        Page (page: $page, perPage: $perPage) { pageInfo { total currentPage lastPage hasNextPage perPage } ${query} } }`,
			{ search: term, page: page, perPage: amount }
		);
	}

	/**
	 * Grabs all possible genres
	 * @return { String[] }
	 * @since 1.12.0
	 */
	genres() {
		return this.__util.send("query { GenreCollection }", null).then((data) => {
			return data.GenreCollection;
		});
	}

	/**
	 * Grabs all possible media tags
	 * @return { MediaTag[] }
	 * @since 1.12.0
	 */
	mediaTags() {
		return this.__util
			.send(
				`query { MediaTagCollection {
				id name description category isAdult
			} }`,
				null
			)
			.then((data) => {
				return data.MediaTagCollection;
			});
	}
}

module.exports = AniList;
