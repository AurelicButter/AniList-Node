const Fetch = require('./fetcher');

module.exports = {
    anime: function(id) {
        if (!id) { throw new Error("Anime id is not provided!"); }
        return Fetch.send(`query ($id: Int) { Media (id: $id, type: ANIME) { id idMal title { romaji english native userPreferred } 
            type episodes description format status startDate { year month day } endDate { year month day }
            season duration countryOfOrigin isLicensed source hashtag trailer { id site }
            updatedAt coverImage { large medium } bannerImage genres synonyms averageScore meanScore
            popularity trending tags { name isMediaSpoiler } relations { edges { id } } characters { edges { id } }
            staff { edges { id } } studios { edges { id } } isFavourite isAdult nextAiringEpisode { id } airingSchedule { edges { id } }
            trends { edges { node { averageScore popularity inProgress episode } } } externalLinks { url }
            streamingEpisodes { title thumbnail url site } rankings { id } mediaListEntry { id }
            reviews { edges { node { id summary } } } siteUrl autoCreateForumThread modNotes } }`, { id: id });
    },
    manga: function(id) {
        if (!id) { throw new Error("Manga id is not provided!"); }
        return Fetch.send(`query ($id: Int) { Media (id: $id, type: MANGA) { id idMal title { romaji english native userPreferred }
            type description format status startDate { year month day } endDate { year month day } volumes countryOfOrigin isLicensed updatedAt
            coverImage { large medium } bannerImage genres synonyms averageScore meanScore siteUrl autoCreateForumThread modNotes
            popularity trending tags { name isMediaSpoiler } relations { edges { id } } characters { edges { id } } staff { edges { id } }
            isFavourite isAdult trends { edges { node { averageScore popularity inProgress episode } } }
            externalLinks { url } rankings { id } mediaListEntry { id } reviews { edges { node { id } } } } }`, { id: id });
    }
};