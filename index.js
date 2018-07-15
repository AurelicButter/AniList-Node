const User = require('./user');
const media = require('./media');
const people = require('./people');
const search = require('./search.json');
const fetcher = require('./fetcher');
const Fetch = new fetcher();

module.exports = class AniList {
    constructor (accessKey) { 
        if (!accessKey) { var accessKey = null; }
        this.user = new User(accessKey);        
        this.media = new media(accessKey);
        this.people = new people(accessKey);
        this.accessKey = accessKey;
    };

    studio(id) {
        if (!id) { throw new Error("Studio id is not provided."); }
        return Fetch.send(`query($id: Int) { Studio(id: $id) { id name media { edges { id } } siteUrl isFavourite } }`, { id: id }, this.accessKey);
    };

    search(type, term, page, amount) {
        if (!type) { throw new Error("Type of search not defined!"); }
        else if (!term || !page || !amount) { throw new Error("Search term, page count, or amount per page was not provided!"); }
        switch (type) {
            case "anime": var query = search["anime"]; break;
            case "manga": var query = search["manga"]; break;
            case "char": var query = search["char"]; break;
            case "staff": var query = search["staff"]; break;
            case "studio": var query = search["studio"]; break;
            default: throw new Error("Type not supported.");
        }
        return Fetch.send(`query ($id: Int, $page: Int, $perPage: Int, $search: String) {
        Page (page: $page, perPage: $perPage) { pageInfo { total currentPage lastPage hasNextPage perPage } ${query} } }`, { search: term, page: page, perPage: amount});
    };
};