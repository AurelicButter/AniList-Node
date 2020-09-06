/**
 * @class People
 * @description Access AniList's characters and staff data.
 */
class people {
    /**
     * @constructor
     * @param { Utilites } utilities - The AniList Utilities class.
     */
    constructor(utilities) {
        this.util = utilities;
    }

    /**
     * Fetch a character entry by its AniList ID.
     * @param { Number|String } id - Required. The ID tied to the AniList entry.
     * @returns { Object } Returns a customized data object.
     */
    character(id) {
        var queryVars = this.util.generateQueryHeaders("Character", id);

        return this.util.send(queryVars[1] + `id name { english: full native alternative } image { large medium } 
        description isFavourite favourites siteUrl 
        media { nodes { id title { romaji english native userPreferred } format } } } }`, queryVars[0]);
    };

    /**
     * Fetch a staff entry by its AniList ID or their name.
     * @param { Number|String } id - Required. The ID can either be the AniList ID or the staff's name.
     * @returns { Object } Returns a customized data object.
     */
    staff(id) {
        var queryVars = this.util.generateQueryHeaders("Staff", id);

        return this.util.send(queryVars[1] + `id name { english: full native alternative } language image { large medium }
            description isFavourite siteUrl favourites
            staffMedia { nodes { id title { romaji english native userPreferred } } }
            characters { nodes { id name { english: full } } } } }`, queryVars[0]);
    };
};

module.exports = people;