const Fetch = require('./fetcher');

module.exports = {
    anime: function(id) {
        if (!id) { throw new Error("Anime id is not provided!"); }
        return Fetch.send(`query ($id: Int) { Media (id: $id, type: ANIME) { id idMal title { romaji english native userPreferred } 
            type episodes description format status startDate { year month day } endDate { year month day }
            season duration countryOfOrigin isLicensed source hashtag trailer { id }
            updatedAt coverImage { large medium } bannerImage genres synonyms averageScore meanScore
            popularity trending tags { name isMediaSpoiler } relations { edges { id } } characters { edges { id } }
            staff { edges { id } } studios { edges { id } } isFavourite isAdult nextAiringEpisode { id } airingSchedule { edges { id } }
            trends { edges { node { averageScore popularity inProgress episode } } } externalLinks { url }
            streamingEpisodes { title thumbnail url site } rankings { id } mediaListEntry { id }
            reviews { edges { node { id summary } } } siteUrl autoCreateForumThread modNotes } }`, { id: id }, this.key);
    },
    manga: function(id) {
        if (!id) { throw new Error("Manga id is not provided!"); }
        return Fetch.send(`query ($id: Int) { Media (id: $id, type: MANGA) { id idMal title { romaji english native userPreferred }
            type description format status startDate { year month day } endDate { year month day } volumes countryOfOrigin isLicensed updatedAt
            coverImage { large medium } bannerImage genres synonyms averageScore meanScore siteUrl autoCreateForumThread modNotes
            popularity trending tags { name isMediaSpoiler } relations { edges { id } } characters { edges { id } } staff { edges { id } }
            isFavourite isAdult trends { edges { node { averageScore popularity inProgress episode } } }
            externalLinks { url } rankings { id } mediaListEntry { id } reviews { edges { node { id } } } } }`, { id: id }, this.key);
    },
    add: function(obj) {
        if (this.key === null) { throw new Error("No token is provided for list updates!"); }
        if (!obj.id) { throw new Error("Media list id not provided"); }
        if (!obj.status) { obj.status = "PLANNING"; }
        return Fetch.send(`mutation ($id: Int, $status: String) { SaveMediaListEntry (id: $id, status: $status) { id mediaId status score scoreRaw 
            progress repeat priority private notes progressVolumes hiddenFromStatusLists customLists advancedScores startedAt completedAt } }`, obj, this.key);
    },
    update: function(obj) {
        if (this.key === null) { throw new Error("No token is provided for list updates!"); }
        if (!obj.ids) { throw new Error("Media list id not provided"); }
        return Fetch.send(`mutation ($ids: Int, $status: String) { UpdateMediaListEntries (ids: $ids, status: $status) { status score scoreRaw 
            progress repeat priority private notes hiddenFromStatusLists advancedScores startedAt completedAt ids progressVolumes } }`, obj, this.key);
    },
    delete: function(id) {
        if (this.key === null) { throw new Error("No token is provided for list updates!"); }
        if (!id) { throw new Error("No id is provided for list updates!"); }
        return Fetch.send(`mutation ($id: Int) { DeleteMediaListEntry (id: $id) { deleted } }`, { id: id }, this.key);
    }
};