const fetcher = require('./fetcher');
const Fetch = new fetcher();

module.exports = class media {
    constructor(accessKey) { this.accessKey = accessKey; };

    anime(id) {
        if (!id) { throw new Error("Anime id is not provided!"); }
        return Fetch.send(`query ($id: Int) { Media (id: $id, type: ANIME) { 
            id idMal title { romaji english native userPreferred }
            type episodes description
            format status
            startDate { year month day } endDate { year month day }
            season duration countryOfOrigin isLicensed
            source hashtag trailer { id }
            updatedAt coverImage { large medium } bannerImage
            genres synonyms averageScore meanScore
            popularity trending tags { name isMediaSpoiler }
            relations { edges { id } } characters { edges { id } }
            staff { edges { id } } studios { edges { id } }
            isFavourite isAdult nextAiringEpisode { id } airingSchedule { edges { id } }
            trends { edges { node { averageScore popularity inProgress episode } } }
            externalLinks { url }
            streamingEpisodes { title thumbnail url site }
            rankings { id } mediaListEntry { id }
            reviews { edges { node { id summary } } }
            siteUrl autoCreateForumThread modNotes } }`, { id: id }, this.accessKey);
    };

    manga(id) {
        if (!id) { throw new Error("Manga id is not provided!"); }
        return Fetch.send(`query ($id: Int) { Media (id: $id, type: MANGA) { id idMal
            title { romaji english native userPreferred }
            type description format status startDate { year month day } endDate { year month day }
            volumes countryOfOrigin isLicensed updatedAt
            coverImage { large medium } bannerImage
            genres synonyms averageScore meanScore
            popularity trending tags { name isMediaSpoiler } relations { edges { id } }
            characters { edges { id } } staff { edges { id } }
            isFavourite isAdult
            trends { edges { node { averageScore popularity inProgress episode } } }
            externalLinks { url } rankings { id } mediaListEntry { id }
            reviews { edges { node { id } } } siteUrl autoCreateForumThread modNotes } }`, { id: id }, this.accessKey);
    };
};