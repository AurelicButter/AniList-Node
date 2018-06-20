const User = require('./user');
const media = require('./media');
const people = require('./people');
const fetcher = require('./fetcher');
const Fetch = new fetcher();

module.exports = class AniList {
    constructor () { 
        this.user = new User();        
        this.media = new media();
        this.people = new people();
    };

    studio(id) {
        if (!id) { throw new Error("Studio id is not provided."); }
        return Fetch.send(`query($id: Int) { Studio(id: $id) {
            id name media { edges { id } }
            siteUrl isFavourite } }`, { id: id });
    };

    search(term, page, amount){
        if (!term || !page || !amount) { throw new Error("Search term, page count, or amount per page was not provided!"); }
        return Fetch.send(`query ($id: Int, $page: Int, $perPage: Int, $search: String) {
            Page (page: $page, perPage: $perPage) {
                pageInfo { total currentPage lastPage hasNextPage perPage }
                media (id: $id, search: $search) { id title { romaji english native userPreferred } }
            }
        }`, { search: term, page: page, perPage: amount});
    };
};