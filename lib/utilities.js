const fetcher = require("./fetcher").send;

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
		if (!item) {
			throw new Error("A term is not provided!");
		}
		if (addItm && typeof addItm !== "string") {
			throw new Error("The additional item in the query must be a string!");
		}

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
}

/**
 * Send a call to the AniList API with a query and variables.
 * @param { String } query - The query to send to the AniList API
 * @param { Object } variables - Any variables required such as a username or ID
 * @returns { Object } Returns a customized object containing all of the data fetched.
 * @since 1.0.0
 */
Utilities.prototype.send = fetcher;

module.exports = Utilities;
