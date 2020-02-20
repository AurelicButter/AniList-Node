const { send } = require("./fetcher");

/**
 * Fetch a character entry by its AniList ID.
 * @param { Number|String } id - Required. The ID tied to the AniList entry.
 * @returns { Object } Returns a customized data object.
 */
function variables(user) {
    if (typeof user === "string") { return [{ name: user }, "query ($name: String) { User (name: $name) { "]; }
    else if (typeof user === "number") { return [{ id: user }, "query ($id: Int) { User (id: $id) { "]; } 
}

//Queries for each specific function. Stored in variables here to remove redunant queries.
var profileQuery = `id name about avatar { large medium } bannerImage isFollowing isFollower isBlocked
bans options { titleLanguage displayAdultContent airingNotifications profileColor }
mediaListOptions { scoreFormat rowOrder useLegacyLists 
    animeList { sectionOrder splitCompletedSectionByFormat customLists advancedScoring advancedScoringEnabled }
    mangaList { sectionOrder splitCompletedSectionByFormat customLists advancedScoring advancedScoringEnabled } } 
favourites {
    anime { nodes { id title { romaji english native userPreferred } } }
    manga { nodes { id title { romaji english native userPreferred } } }
    characters { nodes { id name { full } } }
    staff { nodes { id name { full } } }
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
    voiceActors { count meanScore minutesWatched voiceActor { id name { full } } }
    staff { count meanScore minutesWatched staff { id name { full } } }
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
    staff { count meanScore chaptersRead staff { id name { full } } } } }`;

module.exports = {
    /**
     * Fetch a user's AniList basic profile.
     * @param { Number | String } user - Required. Can either be the username or the AniList ID.
     * @returns { Object } Returns a customized data object.
     */
    profile: function(user) {
        if (!user) { throw new Error("AniList username or id is missing!"); }
        if (typeof user !== "string" && typeof user !== "number") { throw new Error("Term provided is not a string or a number!"); }

        var start = variables(user);
        return send(`${start[1]}${profileQuery}}}`, start[0]);
    },
    /**
     * Fetch a user's AniList stats.
     * @param { Number | String } user - Required. Can either be the username or the AniList ID.
     * @returns { Object } Returns a customized data object.
     */
    stats: function(user) {
        if (!user) { throw new Error("AniList username or id is missing!"); }
        if (typeof user !== "string" && typeof user !== "number") { throw new Error("Term provided is not a string or a number!"); }

        var start = variables(user);
        return send(`${start[1]}${statsQuery}}}`, start[0]);
    },
    /**
     * Fetch a user's AniList profile, basic and stats.
     * @param { Number | String } user - Required. Can either be the username or the AniList ID.
     * @returns { Object } Returns a customized data object.
     */
    all: function(user) {
        if (!user) { throw new Error("AniList username or id is missing!"); }
        if (typeof user !== "string" && typeof user !== "number") { throw new Error("Term provided is not a string or a number!"); }

        var start = variables(user);
        return send(`${start[1]}${profileQuery} ${statsQuery}}}`, start[0]);
    }
};