const { send } = require("./fetcher");

module.exports = {
    /**
     * Fetch an anime entry by its AniList ID.
     * @param { Number } id - Required. The ID tied to the AniList entry.
     * @returns { Object } Returns a customized data object.
     */
    anime: function(id) {
        if (!id) { throw new Error("Anime id is not provided!"); }
        if (typeof id !== "number") { throw new Error("Term provided is not a number!"); }

        return send(`query ($id: Int) { Media (id: $id, type: ANIME) { id idMal title { romaji english native userPreferred } 
            format status episodes description startDate { year month day } endDate { year month day }
            season seasonYear duration countryOfOrigin isLicensed source hashtag trailer { id site }
            updatedAt coverImage { large medium } bannerImage genres synonyms averageScore meanScore favourites
            popularity trending tags { name isMediaSpoiler } relations { nodes { id idMal title { english native romaji userPreferred } type format } } 
            characters { nodes { id name { full } } } staff { nodes { id name { full } } } studios { nodes { id name } } 
            isFavourite isAdult nextAiringEpisode { timeUntilAiring airingAt } airingSchedule { nodes { airingAt timeUntilAiring } }
            trends { nodes { date trending popularity inProgress } } externalLinks { url }
            streamingEpisodes { title thumbnail url site } rankings { rank type context year season } mediaListEntry { id status }
            reviews { nodes { id score summary body } } siteUrl autoCreateForumThread modNotes 
            stats { scoreDistribution { score amount } statusDistribution { status amount } }
            isRecommendationBlocked recommendations { nodes { mediaRecommendation { id title { romaji english native userPreferred } } } } } }`, { id: id });
    },
    /**
     * Fetch a manga entry by its AniList ID.
     * @param { Number } id - Required. The ID tied to the AniList entry.
     * @returns { Object } Returns a customized data object.
     */
    manga: function(id) {
        if (!id) { throw new Error("Manga id is not provided!"); }
        if (typeof id !== "number") { throw new Error("Term provided is not a number!"); }

        return send(`query ($id: Int) { Media (id: $id, type: MANGA) { id idMal title { romaji english native userPreferred }
            description format status startDate { year month day } endDate { year month day } chapters volumes countryOfOrigin isLicensed updatedAt
            coverImage { large medium } bannerImage genres synonyms averageScore meanScore siteUrl autoCreateForumThread modNotes
            popularity trending tags { name isMediaSpoiler } relations { nodes { id idMal title { english native romaji userPreferred } type format } }
            characters { nodes { id name { full } } } staff { nodes { id name { full } } } isFavourite isAdult 
            trends { nodes { date trending popularity inProgress } } externalLinks { url } rankings { rank type context year season } 
            mediaListEntry { id status } reviews { nodes { id score summary body } } 
            stats { scoreDistribution { score amount } statusDistribution { status amount } } favourites
            isRecommendationBlocked recommendations { nodes { mediaRecommendation { id title { romaji english native userPreferred } } } } } }`, { id: id });
    }
};