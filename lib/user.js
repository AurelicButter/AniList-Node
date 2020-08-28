const { send } = require("./fetcher");

/**
 * Generate the appropriate query header for the query.
 * @param { Number|String } id - Required. The ID tied to the AniList entry.
 * @returns { Object } Returns an array. Index 0 is the search generateHeaders and Index 1
 *      is the query header string.
 */
function generateHeaders(user) {
    if (!user) { throw new Error("AniList username or id is missing!"); }
    
    if (typeof user === "string") { return [{ name: user }, "query ($name: String) { User (name: $name) { "]; }
    else if (typeof user === "number") { return [{ id: user }, "query ($id: Int) { User (id: $id) { "]; } 

    else { throw new Error("Term provided is not a string or a number!"); }
}

//Queries for each specific function. Stored here to remove redunant queries.
var profileQuery = `id name about avatar { large medium } bannerImage isFollowing isFollower isBlocked
bans options { titleLanguage displayAdultContent airingNotifications profileColor }
mediaListOptions { scoreFormat rowOrder useLegacyLists 
    animeList { sectionOrder splitCompletedSectionByFormat customLists advancedScoring advancedScoringEnabled }
    mangaList { sectionOrder splitCompletedSectionByFormat customLists advancedScoring advancedScoringEnabled } } 
favourites {
    anime { nodes { id title { romaji english native userPreferred } } }
    manga { nodes { id title { romaji english native userPreferred } } }
    characters { nodes { id name { english: full } } }
    staff { nodes { id name { english: full } } }
    studios { nodes { id name } } }
unreadNotificationCount siteUrl donatorTier moderatorStatus updatedAt`;

var statsQuery = `statistics { anime {
    meanScore standardDeviation count minutesWatched episodesWatched
    statuses { count meanScore minutesWatched status }
    formats { count meanScore minutesWatched format }
    lengths { count meanScore minutesWatched length }
    releaseYears { count meanScore minutesWatched releaseYear }
    startYears { count meanScore minutesWatched startYear }
    genres { count meanScore minutesWatched genre }
    tags { count meanScore minutesWatched tag { id name } }
    countries { count meanScore minutesWatched country }
    voiceActors { count meanScore minutesWatched voiceActor { id name { english: full } } }
    staff { count meanScore minutesWatched staff { id name { english: full } } }
    studios { count meanScore minutesWatched studio { id name } } }
manga {
    meanScore standardDeviation count chaptersRead volumesRead
    statuses { count meanScore chaptersRead status }
    formats { count meanScore chaptersRead format }
    lengths { count meanScore chaptersRead length }
    releaseYears { count meanScore chaptersRead releaseYear }
    startYears { count meanScore chaptersRead startYear }
    genres { count meanScore chaptersRead genre }
    tags { count meanScore chaptersRead tag { id name } }
    countries { count meanScore chaptersRead country }
    staff { count meanScore chaptersRead staff { id name { english: full } } } } }`;

/**
 * @class User
 * @description Access AniList's user data.
 */
module.exports = class User {
    /**
     * Fetch a user's AniList basic profile.
     * @param { Number | String } user - Required. Can either be the username or the AniList ID.
     * @returns { Object } Returns a customized data object.
     */
    static profile(user) {
        var queryVars = generateHeaders(user);
        return send(`${queryVars[1]}${profileQuery}}}`, queryVars[0]);
    }
    /**
     * Fetch a user's AniList stats.
     * @param { Number | String } user - Required. Can either be the username or the AniList ID.
     * @returns { Object } Returns a customized data object.
     */
    static stats(user) {
        var queryVars = generateHeaders(user);
        return send(`${queryVars[1]}${statsQuery}}}`, queryVars[0]);
    }
    /**
     * Fetch a user's AniList profile, basic and stats.
     * @param { Number | String } user - Required. Can either be the username or the AniList ID.
     * @returns { Object } Returns a customized data object.
     */
    static all(user) {
        var queryVars = generateHeaders(user);
        return send(`${queryVars[1]}${profileQuery} ${statsQuery}}}`, queryVars[0]);
    }
};