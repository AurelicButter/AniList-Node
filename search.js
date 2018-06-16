module.exports = class Search {
    constructor(term, page, amount) {
        if (!term || !page || !amount) { throw new Error("Search term, page count, or amount per page was not provided!"); }
    }

    search(term, page, amount){
        return [`query ($id: Int, $page: Int, $perPage: Int, $search: String) {
            Page (page: $page, perPage: $perPage) {
                pageInfo { total currentPage lastPage hasNextPage perPage }
                media (id: $id, search: $search) {
                    id
                    title { romaji english native userPreferred }
                }
            }
        }`, { search: term, page: page, perPage: amount}];
    };
};