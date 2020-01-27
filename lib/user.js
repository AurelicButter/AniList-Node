const { send } = require('./fetcher');

/**
 * Fetch a character entry by its AniList ID.
 * @param { Number|String } id - Required. The ID tied to the AniList entry.
 * @returns { Object } Returns a customized data object.
 */
function variables(user) {
    if (typeof user === 'string') { return [{ name: user }, `query ($name: String) { User (name: $name) { `]; }
    else if (typeof user === 'number') { return [{ id: user }, `query ($id: Int) { User (id: $id) { `]; } 
}

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
        var query = start[1] + `id name about avatar { large medium } bannerImage isFollowing isFollower isBlocked
        options { titleLanguage displayAdultContent airingNotifications profileColor }
        mediaListOptions { scoreFormat rowOrder useLegacyLists sharedTheme sharedThemeEnabled }
        unreadNotificationCount siteUrl donatorTier moderatorStatus updatedAt } }`;
        return send(query, start[0]);
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
        var query = start[1] + `stats { watchedTime chaptersRead activityHistory { date amount level } animeStatusDistribution { status amount } 
            mangaStatusDistribution { status amount } animeScoreDistribution { score amount } mangaScoreDistribution { score amount }
            animeListScores { meanScore standardDeviation } mangaListScores { meanScore standardDeviation }
            favouredGenresOverview { genre amount meanScore timeWatched } favouredGenres { genre amount meanScore timeWatched }
            favouredTags { tag { name } amount meanScore timeWatched } favouredActors { staff { id } amount meanScore timeWatched }
            favouredStaff { staff { id } amount meanScore timeWatched } favouredStudios { studio { name } amount meanScore timeWatched }
            favouredYears { year amount meanScore } favouredFormats { format amount } } } }`;
        return send(query, start[0]);
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
        var query = start[1] + `id name about avatar { large medium } bannerImage isFollowing isFollower isBlocked
        stats { watchedTime chaptersRead activityHistory { date amount level } animeStatusDistribution { status amount }
            mangaStatusDistribution { status amount } animeScoreDistribution { score amount } mangaScoreDistribution { score amount }
            animeListScores { meanScore standardDeviation } mangaListScores { meanScore standardDeviation } favouredGenresOverview { genre amount meanScore timeWatched }
            favouredGenres { genre amount meanScore timeWatched } favouredTags { tag { name } amount meanScore timeWatched }
            favouredActors { staff { id } amount meanScore timeWatched } favouredStaff { staff { id } amount meanScore timeWatched }
            favouredStudios { studio { name } amount meanScore timeWatched } favouredYears { year amount meanScore } favouredFormats { format amount } } 
        options { titleLanguage displayAdultContent airingNotifications profileColor }
        mediaListOptions { scoreFormat rowOrder useLegacyLists sharedTheme sharedThemeEnabled } unreadNotificationCount
        siteUrl donatorTier moderatorStatus updatedAt } }`;
        return send(query, start[0]);
    }
};