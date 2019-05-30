const Fetch = require('./fetcher');

module.exports = {
    variables: function(user, type) {
        if (type === 'ANIME' || type === 'MANGA') {
            if (typeof user === 'string') { return [{ name: user, type: type }, `query ($name: String, $type: MediaType) { MediaListCollection(userName: $name, type: $type) { `]; }
            else if (typeof user === 'number') { return [{ id: user, type: type }, `query ($id: Int, $type: MediaType) { MediaListCollection(userId: $id,, type: $type) { `]; }
        }
    },
    anime: function(user) {
        if (!user) { throw new Error("AniList username or id is missing!"); }
        var start = this.variables(user, 'ANIME');
        var query = start[1] + `lists { name isCustomList isSplitCompletedList status entries { media {
            id idMal title { romaji english native userPreferred }
            type episodes description format status startDate { year month day } endDate { year month day }
            season duration countryOfOrigin isLicensed source hashtag trailer { id site }
            updatedAt coverImage { large medium } bannerImage genres synonyms averageScore meanScore
            popularity trending tags { name isMediaSpoiler } relations { edges { id } } characters { edges { id } }
            staff { edges { id } } studios { edges { id } } isFavourite isAdult nextAiringEpisode { id } airingSchedule { edges { id } }
            trends { edges { node { averageScore popularity inProgress episode } } } externalLinks { url }
            streamingEpisodes { title thumbnail url site } rankings { id } mediaListEntry { id }
            reviews { edges { node { id summary } } } siteUrl autoCreateForumThread modNotes } } } } }`;
        return Fetch.send(query, start[0]);
    },
    manga: function(user) {
        if (!user) { throw new Error("AniList username or id is missing!"); }
        var start = this.variables(user, 'MANGA');
        var query = start[1] + `lists { name isCustomList isSplitCompletedList status entries { media {
            id idMal title { romaji english native userPreferred }
            type description format status startDate { year month day } endDate { year month day } volumes countryOfOrigin isLicensed updatedAt
            coverImage { large medium } bannerImage genres synonyms averageScore meanScore siteUrl autoCreateForumThread modNotes
            popularity trending tags { name isMediaSpoiler } relations { edges { id } } characters { edges { id } } staff { edges { id } }
            isFavourite isAdult trends { edges { node { averageScore popularity inProgress episode } } }
            externalLinks { url } rankings { id } mediaListEntry { id } reviews { edges { node { id } } } } } } } }`;
        return Fetch.send(query, start[0]);
    }
};
