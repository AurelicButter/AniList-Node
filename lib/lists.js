const { send } = require('./fetcher');

function variables(user, type) {
    if (typeof user === 'string') { return [{ name: user, type: type }, `query ($name: String, $type: MediaType) { MediaListCollection(userName: $name, type: $type) { `]; }
    else if (typeof user === 'number') { return [{ id: user, type: type }, `query ($id: Int, $type: MediaType) { MediaListCollection(userId: $id,, type: $type) { `]; }
}

module.exports = {
    /**
     * Fetch a user's AniList anime lists.
     * @param { Number | String } user - Required. Can either be the username or the AniList ID.
     * @returns { Object } Returns a customized data object.
     */
    anime: function(user) {
        if (!user) { throw new Error("AniList username or id is missing!"); }
        if (typeof user !== "string" && typeof user !== "number") { throw new Error("Term provided is not a string or a number!"); }

        var start = variables(user, 'ANIME');
        var query = start[1] + `lists { name isCustomList isSplitCompletedList status entries {
            media { id idMal title { romaji english native userPreferred } type episodes description format status startDate { year month day } 
            endDate { year month day } season duration countryOfOrigin isLicensed source hashtag trailer { id site } updatedAt coverImage { large medium } 
            bannerImage genres synonyms averageScore meanScore popularity trending tags { name isMediaSpoiler } 
            relations { nodes { id idMal title { english native romaji userPreferred } type format } } 
            characters { nodes { id name { first last } } } staff { nodes { id name { first last native } } } studios { nodes { id name } } 
            isFavourite isAdult nextAiringEpisode { timeUntilAiring airingAt } airingSchedule { nodes { airingAt timeUntilAiring } }
            trends { nodes { date trending popularity inProgress } } externalLinks { url }
            streamingEpisodes { title thumbnail url site } rankings { id } mediaListEntry { id }
            reviews { nodes { id score summary body } } siteUrl autoCreateForumThread modNotes }
            userId status score progress repeat priority private notes hiddenFromStatusLists
            advancedScores startedAt { year month day } completedAt { year month day } updatedAt createdAt } } } }`;
        return send(query, start[0]);
    },
    /**
     * Fetch a user's AniList manga lists.
     * @param { Number | String } user - Required. Can either be the username or the AniList ID.
     * @returns { Object } Returns a customized data object.
     */
    manga: function(user) {
        if (!user) { throw new Error("AniList username or id is missing!"); }
        if (typeof user !== "string" && typeof user !== "number") { throw new Error("Term provided is not a string or a number!"); }

        var start = variables(user, 'MANGA');
        var query = start[1] + `lists { name isCustomList isSplitCompletedList status entries {
            media { id idMal title { romaji english native userPreferred }
            type description format status startDate { year month day } endDate { year month day } volumes countryOfOrigin isLicensed updatedAt
            coverImage { large medium } bannerImage genres synonyms averageScore meanScore siteUrl autoCreateForumThread modNotes
            popularity trending tags { name isMediaSpoiler } relations { nodes { id idMal title { english native romaji userPreferred } type format } }
            characters { nodes { id name { first last } } } staff { nodes { id name { first last native } } } isFavourite isAdult 
            trends { nodes { date trending popularity inProgress } } externalLinks { url } rankings { id } 
            mediaListEntry { id } reviews { nodes { id score summary body } } }
            userId status score progress progressVolumes repeat priority private notes hiddenFromStatusLists
            advancedScores startedAt { year month day } completedAt { year month day } updatedAt createdAt } } } }`;
        return send(query, start[0]);
    }
};
