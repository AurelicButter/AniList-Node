const Fetch = require('./fetcher');

function variables(user, type) {
    if (typeof user === 'string') { return [{ name: user, type: type }, `query ($name: String, $type: MediaType) { MediaListCollection(userName: $name, type: $type) { `]; }
    else if (typeof user === 'number') { return [{ id: user, type: type }, `query ($id: Int, $type: MediaType) { MediaListCollection(userId: $id,, type: $type) { `]; }
}

module.exports = {
    anime: function(user) {
        if (!user) { throw new Error("AniList username or id is missing!"); }
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
        return Fetch.send(query, start[0]);
    },
    manga: function(user) {
        if (!user) { throw new Error("AniList username or id is missing!"); }
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
        return Fetch.send(query, start[0]);
    }
};
