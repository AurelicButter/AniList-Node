const Fetch = require('./fetcher');

module.exports = {
    anime: function(id) {
        if (!id) { throw new Error("Anime id is not provided!"); }
        return Fetch.send(`query ($id: Int) { Media (id: $id, type: ANIME) { id idMal title { romaji english native userPreferred } 
            type episodes description format status startDate { year month day } endDate { year month day }
            season duration countryOfOrigin isLicensed source hashtag trailer { id site }
            updatedAt coverImage { large medium } bannerImage genres synonyms averageScore meanScore
            popularity trending tags { name isMediaSpoiler } relations { nodes { id idMal title { english native romaji userPreferred } type format } } 
            characters { nodes { id name { first last } } } staff { nodes { id name { first last native } } } studios { nodes { id name } } 
            isFavourite isAdult nextAiringEpisode { timeUntilAiring airingAt } airingSchedule { nodes { airingAt timeUntilAiring } }
            trends { nodes { date trending popularity inProgress } } externalLinks { url }
            streamingEpisodes { title thumbnail url site } rankings { id } mediaListEntry { id }
            reviews { nodes { id score summary body } } siteUrl autoCreateForumThread modNotes } }`, { id: id });
    },
    manga: function(id) {
        if (!id) { throw new Error("Manga id is not provided!"); }
        return Fetch.send(`query ($id: Int) { Media (id: $id, type: MANGA) { id idMal title { romaji english native userPreferred }
            type description format status startDate { year month day } endDate { year month day } volumes countryOfOrigin isLicensed updatedAt
            coverImage { large medium } bannerImage genres synonyms averageScore meanScore siteUrl autoCreateForumThread modNotes
            popularity trending tags { name isMediaSpoiler } relations { nodes { id idMal title { english native romaji userPreferred } type format } }
            characters { nodes { id name { first last } } } staff { nodes { id name { first last native } } } isFavourite isAdult 
            trends { nodes { date trending popularity inProgress } } externalLinks { url } rankings { id } 
            mediaListEntry { id } reviews { nodes { id score summary body } } } }`, { id: id });
    }
};