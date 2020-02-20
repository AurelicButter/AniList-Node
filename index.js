const User = require('./lib/user'),
    lists = require('./lib/lists'),
    media = require('./lib/media'),
    people = require('./lib/people'),
    Fetch = require('./lib/fetcher');

module.exports = class AniList {
    constructor (accessKey) {
        Fetch.key = accessKey ? accessKey : null;

        this.user = User;
        this.lists = lists;
        this.media = media;
        this.people = people;
    };

    /**
     * Grabs data on a studio
     * @param {String | Number} id - The studio ID or name on AniList.
     * @returns { Object } Returns a customized data object.
     */
    studio(id) {
        if (!id) { throw new Error("Studio id is not provided."); }

        if (typeof id === "string") { var queryVars = [{ search: id }, "query ($search: String) { Studio (search: $search) { "]; }
        else if (typeof id === "number") { var queryVars = [{ id: id }, "query ($id: Int) { Studio (id: $id) { "]; } 
        else { throw new Error("Term does not match the required types!"); }

        return Fetch.send(queryVars[1] + `id name isAnimationStudio siteUrl isFavourite favourites 
            media { nodes { id title { romaji english native userPreferred } } } } }`, queryVars[0]);
    };

    /**
     * Searchs AniList based on a specific term.
     * @param {String} type - Required. Either anime, manga, character, staff or studio. 
     * @param {String} term - Required. The term to lookup.
     * @param {Number} page - Which page of the results to look at. Will default to 1 if not provided.
     * @param {Number} amount - The amount of results per page. AniList will cap this at 25 and function will default to 5 if not provided.
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
            "char": "characters (search: $search) { id name { full native } }" ,
            "staff": "staff (search: $search) { id name { full native } }",
            "studio": "studios (search: $search) { id name }"
        }

        switch (type.toLowerCase()) {
            case "anime": var query = search["anime"]; break;
            case "manga": var query = search["manga"]; break;
            case "character": var query = search["char"]; break;
            case "staff": var query = search["staff"]; break;
            case "studio": var query = search["studio"]; break;
            default: throw new Error("Type not supported.");
        }
		
        return Fetch.send(`query ($page: Int, $perPage: Int, $search: String) {
        Page (page: $page, perPage: $perPage) { pageInfo { total currentPage lastPage hasNextPage perPage } ${query} } }`, { search: term, page: page, perPage: amount});
    };
};
