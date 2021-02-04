/**
 * Access a user's AniList list data.
 * @since 1.1.0
 * @memberof Anilist
 */
class Lists {
    /**
     * @description This constructor is meant for internal use and is apart of initializing. You cannot access this
     * through the AniList class and are not expect to.
     * @param { Utilites } utilities - The AniList Utilities class.
     * @hideconstructor
     */
    constructor(utilities) {
        this.util = utilities;
    };

    /**
     * Fetch a user's AniList anime lists.
     * @param { Number | String } user - Required. Can either be the username or the AniList ID.
     * @returns { UserList }
     * @since 1.1.0
     */
    anime(user) {
        var queryVars = this.util.generateQueryHeaders("MediaListCollection", user, "ANIME");

        return this.util.send(queryVars[1] + `lists { name isCustomList isSplitCompletedList status entries {
            media { id idMal title { romaji english native userPreferred } 
            episodes description format startDate { year month day } endDate { year month day }
            duration genres synonyms tags { name isMediaSpoiler } isFavourite isAdult siteUrl }
            status score progress repeat priority private notes hiddenFromStatusLists
            advancedScores startedAt { year month day } completedAt { year month day } updatedAt createdAt } } } }`, queryVars[0]);
    };
    
    /**
     * Fetch a user's AniList manga lists.
     * @param { Number | String } user - Required. Can either be the username or the AniList ID.
     * @returns { UserList }
     * @since 1.1.0
     */
    manga(user) {
        var queryVars = this.util.generateQueryHeaders("MediaListCollection", user, "MANGA");

        return this.util.send(queryVars[1] + `lists { name isCustomList isSplitCompletedList status entries {
            media { id idMal title { romaji english native userPreferred } 
            volumes chapters description format startDate { year month day } endDate { year month day }
            genres synonyms tags { name isMediaSpoiler } isFavourite isAdult siteUrl }
            status score progress progressVolumes repeat priority private notes hiddenFromStatusLists
            advancedScores startedAt { year month day } completedAt { year month day } updatedAt createdAt } } } }`, queryVars[0]);
    };
};

module.exports = Lists;
