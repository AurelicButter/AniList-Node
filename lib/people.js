/**
 * Access AniList's characters and staff data.
 * @since 1.0.0
 * @memberof AniList
 */
class People {
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
     * Fetch a character entry by its AniList ID.
     * @param { Number|String } id - Required. The ID tied to the AniList entry.
     * @returns { CharacterEntry }
     * @since 1.0.0
     */
    character(id) {
        var queryVars = this.util.generateQueryHeaders("Character", id);

        return this.util.send(queryVars[1] + `id name { english: full native alternative } image { large medium } 
        description isFavourite favourites siteUrl 
        media { nodes { id title { romaji english native userPreferred } type } } } }`, queryVars[0]);
    };

    /**
     * Fetch a staff entry by its AniList ID or their name.
     * @param { Number|String } id - Required. The ID can either be the AniList ID or the staff's name.
     * @returns { StaffEntry }
     * @since 1.0.0
     */
    staff(id) {
        var queryVars = this.util.generateQueryHeaders("Staff", id);

        return this.util.send(queryVars[1] + `id name { english: full native alternative } language image { large medium }
            description isFavourite siteUrl favourites
            staffMedia { nodes { id title { romaji english native userPreferred } type } }
            characters { nodes { id name { english: full } } } } }`, queryVars[0]);
    };
};

module.exports = People;