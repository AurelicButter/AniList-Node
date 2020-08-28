const { send } = require("./fetcher");

/**
 * Generate the appropriate query header for the query.
 * @param { Number|String } id - Required. The ID tied to the AniList entry.
 * @returns { Object } Returns an array. Index 0 is the search generateHeaders and Index 1
 *      is the query header string.
 */
function generateHeaders(user, type) {
    if (!user) { throw new Error("AniList username or id is missing!"); }
    
    if (typeof user === "string") { 
        return [{ name: user, type: type }, `query ($name: String, $type: MediaType) { MediaListCollection(userName: $name, type: $type) { `]; 
    }
    else if (typeof user === "number") { 
        return [{ id: user, type: type }, `query ($id: Int, $type: MediaType) { MediaListCollection(userId: $id,, type: $type) { `]; 
    }

    else { throw new Error("Term provided is not a string or a number!"); }
}

/**
 * @class Lists
 * @description Access a user's AniList list data.
 */
module.exports = class Lists {
    /**
     * Fetch a user's AniList anime lists.
     * @param { Number | String } user - Required. Can either be the username or the AniList ID.
     * @returns { Object } Returns a customized data object.
     */
    static anime(user) {
        var queryVars = generateHeaders(user, "ANIME");

        return send(queryVars[1] + `lists { name isCustomList isSplitCompletedList status entries {
            media { id idMal title { romaji english native userPreferred } 
            episodes description format startDate { year month day } endDate { year month day }
            duration genres synonyms tags { name isMediaSpoiler } isFavourite isAdult siteUrl }
            status score progress repeat priority private notes hiddenFromStatusLists
            advancedScores startedAt { year month day } completedAt { year month day } updatedAt createdAt } } } }`, queryVars[0]);
    }
    /**
     * Fetch a user's AniList manga lists.
     * @param { Number | String } user - Required. Can either be the username or the AniList ID.
     * @returns { Object } Returns a customized data object.
     */
    static manga(user) {
        var queryVars = generateHeaders(user, "MANGA");

        return send(queryVars[1] + `lists { name isCustomList isSplitCompletedList status entries {
            media { id idMal title { romaji english native userPreferred } 
            volumes chapters description format startDate { year month day } endDate { year month day }
            genres synonyms tags { name isMediaSpoiler } isFavourite isAdult siteUrl }
            status score progress progressVolumes repeat priority private notes hiddenFromStatusLists
            advancedScores startedAt { year month day } completedAt { year month day } updatedAt createdAt } } } }`, queryVars[0]);
    }
};
