const { send } = require("./fetcher");

module.exports = {
    /**
     * Fetch a character entry by its AniList ID.
     * @param { Number|String } id - Required. The ID tied to the AniList entry.
     * @returns { Object } Returns a customized data object.
     */
    character: function(id) {
        if (!id) { throw new Error("Character term is not provided!"); }

        if (typeof id === "string") { queryVars = [{ search: id }, "query ($search: String) { Character (search: $search) { "]; }
        else if (typeof id === "number") { queryVars = [{ id: id }, "query ($id: Int) { Character (id: $id) { "]; }
        else { throw new Error("Term does not match the required types!"); }

        return send(queryVars[1] + `id name { full native alternative } image { large medium } description isFavourite favourites 
        siteUrl media { nodes { id title { romaji english native userPreferred } format } } } }`, queryVars[0]);
    },
    /**
     * Fetch a staff entry by its AniList ID or their name.
     * @param { Number|String } id - Required. The ID can either be the AniList ID or the staff's name.
     * @returns { Object } Returns a customized data object.
     */
    staff: function(id) {
        if (!id) { throw new Error("Person term is not provided"); }

        if (typeof id === 'string') { queryVars = [{ search: id }, `query ($search: String) { Staff (search: $search) { `]; }
        else if (typeof id === 'number') { queryVars = [{ id: id }, `query ($id: Int) { Staff (id: $id,) { `]; }
        else { throw new Error("Term does not match the required types!"); }

        return send(queryVars[1] + `id name { full native alternative } language image { large medium }
            description isFavourite siteUrl favourites
            staffMedia { nodes { id title { romaji english native userPreferred } } }
            characters { nodes { id name { full } } } } }`, queryVars[0]);
    }
};