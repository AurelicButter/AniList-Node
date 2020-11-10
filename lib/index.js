const User = require("./user"),
    lists = require("./lists"),
    media = require("./media"),
    people = require("./people"),
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
     */
    constructor (accessKey) {
        if (!accessKey) { accessKey == null; }

        // Import utilites for the classes.
        this.__util = new util(accessKey);

        /**
         * @Member { User }
         */
        this.user = new User(this.__util);

        /**
         * @Member { Lists }
         */
        this.lists = new lists(this.__util);

        /**
         * @Member { Media }
         */
        this.media = new media(this.__util);

        /**
         * @Member { People }
         */
        this.people = new people(this.__util);
    };

    /**
     * Grabs data on a studio
     * @param {String | Number} studio - The studio ID or name on AniList.
     * @returns { StudioEntry }
     * @since 1.0.0
     */
    studio(studio) {
        var queryVars = this.__util.generateQueryHeaders("Studio", studio);

        return this.__util.send(queryVars[1] + `id name isAnimationStudio siteUrl isFavourite favourites 
            media { nodes { id title { romaji english native userPreferred } } } } }`, queryVars[0]);
    };

    /**
     * Searchs AniList based on a specific term.
     * @param {String} type - Required. Either anime, manga, character, staff, studio, or user. 
     * @param {String} term - Required. The term to lookup. (ie: "Honzuki no Gekokujou" or "Butterstroke")
     * @param {Number} page - Which page of the results to look at. Will default to 1 if not provided.
     * @param {Number} amount - The amount of results per page. AniList will cap this at 25 and function will default to 5 if not provided.
     * @return { SearchEntry }
     * @since 1.0.0
     */
    search(type, term, page=1, amount=5) {
        if (!type) { throw new Error("Type of search not defined!"); }
        else if (!term) { throw new Error("Search term was not provided!"); }

        //Validate all type conditions.
        if (typeof type !== "string") { throw new Error("Type is not a string."); }
        if (typeof term !== "string") { throw new Error("Term is not a string"); }
        if (typeof page !== "number") { throw new Error("Page number is not a number"); }
        if (typeof amount !== "number") { throw new Error("Amount is not a number"); }
        
        var search = {
            "anime": "media (type: ANIME, search: $search) { id title { romaji english native userPreferred } }",
            "manga": "media (type: MANGA, search: $search) { id title { romaji english native userPreferred } }",
            "char": "characters (search: $search) { id name { english: full } }" ,
            "staff": "staff (search: $search) { id name { english: full } }",
            "studio": "studios (search: $search) { id name }",
            "user": "users (search: $search) { id name }"
        };

        var query = search[type.toLowerCase()];
        if (!query) { throw new Error("Type not supported."); }
		
        return this.__util.send(`query ($page: Int, $perPage: Int, $search: String) {
        Page (page: $page, perPage: $perPage) { pageInfo { total currentPage lastPage hasNextPage perPage } ${query} } }`, { search: term, page: page, perPage: amount });
    };
};

module.exports = AniList;