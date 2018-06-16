module.exports = class media {
    constructor(id) { if (!id) { throw new Error("Media id is not provided!"); } };

    anime(id) {
        return [`query ($id: Int) { Media (id: $id, type: ANIME) { 
            id idMal title { romaji english native userPreferred }
            type episodes description
            format status
            startDate { year month day } endDate { year month day }
            season duration
            countryOfOrigin isLicensed
            source hashtag trailer { id }
            updatedAt coverImage { large medium } bannerImage
            genres synonyms averageScore meanScore
            popularity trending tags { id }
            relations { edges { id } }
            characters { edges { id } }
            staff { edges { id } }
            studios { edges { id } }
            isFavourite isAdult
            nextAiringEpisode { id }
            airingSchedule { edges { id } }
            trends { edges { node { averageScore popularity inProgress episode } } }
            externalLinks { id }
            streamingEpisodes { title thumbnail url site }
            rankings { id }
            mediaListEntry { id }
            reviews { edges { node { id } } }
            siteUrl autoCreateForumThread modNotes } }`, { id: id } ];
    };

    manga(id) {
        return [`query ($id: Int) { Media (id: $id, type: MANGA) { id idMal
            title { romaji english native userPreferred }
            type description format status
            startDate { year month day } endDate { year month day }
            volumes countryOfOrigin isLicensed updatedAt
            coverImage { large medium } bannerImage
            genres synonyms averageScore meanScore
            popularity trending tags { id }
            relations { edges { id } }
            characters { edges { id } }
            staff { edges { id } }
            isFavourite isAdult
            trends { edges { node { averageScore popularity inProgress episode } } }
            externalLinks { id }
            rankings { id }
            mediaListEntry { id }
            reviews { edges { node { id } } }
            siteUrl autoCreateForumThread modNotes } }`, { id: id } ];
    };
};