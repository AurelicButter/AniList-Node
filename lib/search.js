/**
 * Validates search parameters.
 * @private
 * @since 1.7.0
 */
function validateSearchParameters(type, term, page, amount) {
    if (!type) { throw new Error("Type of search not defined!"); }
    if (!term) { throw new Error("Search term was not provided!"); }

    //Validate all type conditions.
    if (typeof type !== "string") { throw new Error("Type is not a string."); }
    if (typeof term !== "string") { throw new Error("Term is not a string"); }
    if (typeof page !== "number") { throw new Error("Page number is not a number"); }
    if (typeof amount !== "number") { throw new Error("Amount is not a number"); }
}

/**
 * Search for items on AniList
 * @since 1.7.0
 * @memberof AniList
 */
class Search {
    /**
     * @description This constructor is meant for internal use and is apart of initializing. You cannot access this
     * through the AniList class and are not expect to.
     * @param { Utilites } utilities - The AniList Utilities class.
     * @hideconstructor
     */
    constructor(utilities) {
        this.util = utilities;
    }

    /**
     * Search for a specific character
     * @param {String} term - Required. The term to lookup. (ie: "Myne" or "Chise Hatori")
     * @param {Number} page - Which page of the results to look at. Will default to 1 if not provided.
     * @param {Number} amount - The amount of results per page. AniList will cap this at 25 and function will default to 5 if not provided.
     * @return { SearchEntry }
     * @since 1.7.0
     */
    character(term, page=1, amount=5) {
        validateSearchParameters(term, page, amount);

        return this.__util.send(`query ($page: Int, $perPage: Int, $search: String) {
            Page (page: $page, perPage: $perPage) { pageInfo { total currentPage lastPage hasNextPage perPage } 
            characters (search: $search) { id name { english: full } } } }`, { search: term, page: page, perPage: amount });
    }

    /**
     * Search for a specific studio
     * @param {String} term - Required. The term to lookup. (ie: "White Fox")
     * @param {Number} page - Which page of the results to look at. Will default to 1 if not provided.
     * @param {Number} amount - The amount of results per page. AniList will cap this at 25 and function will default to 5 if not provided.
     * @return { SearchEntry }
     * @since 1.7.0
     */
    studio(term, page=1, amount=5) {
        validateSearchParameters(term, page, amount);

        return this.__util.send(`query ($page: Int, $perPage: Int, $search: String) {
            Page (page: $page, perPage: $perPage) { pageInfo { total currentPage lastPage hasNextPage perPage } 
            studios (search: $search) { id name } } }`, { search: term, page: page, perPage: amount });
    }

    /**
     * Search for a specific staff member
     * @param {String} term - Required. The term to lookup. (ie: "Yuka Iguchi")
     * @param {Number} page - Which page of the results to look at. Will default to 1 if not provided.
     * @param {Number} amount - The amount of results per page. AniList will cap this at 25 and function will default to 5 if not provided.
     * @return { SearchEntry }
     * @since 1.7.0
     */
    staff(term, page=1, amount=5) {
        validateSearchParameters(term, page, amount);

        return this.__util.send(`query ($page: Int, $perPage: Int, $search: String) {
            Page (page: $page, perPage: $perPage) { pageInfo { total currentPage lastPage hasNextPage perPage } 
            staff (search: $search) { id name { english: full } } } }`, { search: term, page: page, perPage: amount });
    }

    /**
     * Search for a specific user
     * @param {String} term - Required. The term to lookup. (ie: "Butterstroke")
     * @param {Number} page - Which page of the results to look at. Will default to 1 if not provided.
     * @param {Number} amount - The amount of results per page. AniList will cap this at 25 and function will default to 5 if not provided.
     * @return { SearchEntry }
     * @since 1.7.0
     */
    user(term, page=1, amount=5) {
        validateSearchParameters(term, page, amount);

        return this.__util.send(`query ($page: Int, $perPage: Int, $search: String) {
            Page (page: $page, perPage: $perPage) { pageInfo { total currentPage lastPage hasNextPage perPage } 
            users (search: $search) { id name } } }`, { search: term, page: page, perPage: amount });
    }

    /**
     * Search for a specific anime
     * @param {String} term - Required. The term to lookup. (ie: "Log Horizon")
     * @param {Number} page - Which page of the results to look at. Will default to 1 if not provided.
     * @param {Number} amount - The amount of results per page. AniList will cap this at 25 and function will default to 5 if not provided.
     * @return { SearchEntry }
     * @since 1.7.0
     */
    anime(term, page=1, amount=5) {
        validateSearchParameters(term, page, amount);

        return this.__util.send(`query ($page: Int, $perPage: Int, $search: String) {
            Page (page: $page, perPage: $perPage) { pageInfo { total currentPage lastPage hasNextPage perPage } 
            media (type: ANIME, search: $search) { id title { romaji english native userPreferred } } } }`, { search: term, page: page, perPage: amount });
    }

    /**
     * Search for a specific manga
     * @param {String} term - Required. The term to lookup. (ie: "Mahoutsukai no Yome")
     * @param {Number} page - Which page of the results to look at. Will default to 1 if not provided.
     * @param {Number} amount - The amount of results per page. AniList will cap this at 25 and function will default to 5 if not provided.
     * @return { SearchEntry }
     * @since 1.7.0
     */
    manga(term, page=1, amount=5) {
        validateSearchParameters(term, page, amount);

        return this.__util.send(`query ($page: Int, $perPage: Int, $search: String) {
            Page (page: $page, perPage: $perPage) { pageInfo { total currentPage lastPage hasNextPage perPage } 
            media (type: MANGA, search: $search) { id title { romaji english native userPreferred } } } }`, { search: term, page: page, perPage: amount });
    }
};

export default Search;