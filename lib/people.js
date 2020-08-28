const { send } = require("./fetcher");

/**
 * Generate the appropriate query header for the query.
 * @param { Number|String } id - Required. The ID tied to the AniList entry.
 * @returns { Object } Returns an array. Index 0 is the search generateHeaders and Index 1
 *      is the query header string.
 */
function generateHeaders(id, type) {
    if (!id) { throw new Error("A term is not provided!"); }

    if (typeof id === "string") { 
        return [{ search: id }, `query ($search: String) { ${type} (search: $search) { `]; 
    }
    else if (typeof id === "number") { 
        return [{ id: id }, `query ($id: Int) { ${type} (id: $id) { `]; 
    }
    else { throw new Error("Term does not match the required types!"); }
}

/**
 * @class People
 * @description Access AniList's characters and staff data.
 */
module.exports = class people {
    /**
     * Fetch a character entry by its AniList ID.
     * @param { Number|String } id - Required. The ID tied to the AniList entry.
     * @returns { Object } Returns a customized data object.
     */
    static character(id) {
        var queryVars = generateHeaders(id, "Character");

        return send(queryVars[1] + `id name { full native alternative } image { large medium } 
        description isFavourite favourites siteUrl 
        media { nodes { id title { romaji english native userPreferred } format } } } }`, queryVars[0]);
    }
    /**
     * Fetch a staff entry by its AniList ID or their name.
     * @param { Number|String } id - Required. The ID can either be the AniList ID or the staff's name.
     * @returns { Object } Returns a customized data object.
     */
    static staff(id) {
        var queryVars = generateHeaders(id, "Staff");

        return send(queryVars[1] + `id name { english: full native alternative } language image { large medium }
            description isFavourite siteUrl favourites
            staffMedia { nodes { id title { romaji english native userPreferred } } }
            characters { nodes { id name { english: full } } } } }`, queryVars[0]);
    }
};