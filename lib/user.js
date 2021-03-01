//Queries for each specific function. Stored here to remove redunant queries.
const profileQuery = `id name about avatar { large medium } bannerImage isFollowing isFollower isBlocked
bans options { titleLanguage displayAdultContent airingNotifications profileColor }
mediaListOptions { scoreFormat rowOrder 
    animeList { sectionOrder splitCompletedSectionByFormat customLists advancedScoring advancedScoringEnabled }
    mangaList { sectionOrder splitCompletedSectionByFormat customLists advancedScoring advancedScoringEnabled } } 
favourites {
    anime { nodes { id title { romaji english native userPreferred } type } }
    manga { nodes { id title { romaji english native userPreferred } type } }
    characters { nodes { id name { english: full } } }
    staff { nodes { id name { english: full } } }
    studios { nodes { id name } } }
unreadNotificationCount siteUrl donatorTier moderatorStatus updatedAt`;

const statsQuery = `statistics { anime {
    meanScore standardDeviation count minutesWatched episodesWatched
    statuses { count meanScore minutesWatched status }
    formats { count meanScore minutesWatched format }
    lengths { count meanScore minutesWatched length }
    releaseYears { count meanScore minutesWatched releaseYear }
    startYears { count meanScore minutesWatched startYear }
    genres { count meanScore minutesWatched genre }
    tags { count meanScore minutesWatched tag { id name } }
    countries { count meanScore minutesWatched country }
    voiceActors { count meanScore minutesWatched voiceActor { id name { english: full } } }
    staff { count meanScore minutesWatched staff { id name { english: full } } }
    studios { count meanScore minutesWatched studio { id name } } }
manga {
    meanScore standardDeviation count chaptersRead volumesRead
    statuses { count meanScore chaptersRead status }
    formats { count meanScore chaptersRead format }
    lengths { count meanScore chaptersRead length }
    releaseYears { count meanScore chaptersRead releaseYear }
    startYears { count meanScore chaptersRead startYear }
    genres { count meanScore chaptersRead genre }
    tags { count meanScore chaptersRead tag { id name } }
    countries { count meanScore chaptersRead country }
    staff { count meanScore chaptersRead staff { id name { english: full } } } } }`;

/**
 * Access AniList's user data.
 * @since 1.0.0
 * @memberof AniList
 */
class User {
    /**
     * @description This constructor is meant for internal use and is apart of initializing. You cannot access this
     * through the AniList class and are not expect to.
     * @param { Utilites } utilities - The AniList Utilities class.
     * @hideconstructor
     */
    constructor(utilities) {
        this.util = utilities;
    };

    /**
     * Fetch a user's AniList basic profile.
     * @param { Number | String } user - Required. Can either be the username or the AniList ID.
     * @returns { UserProfile }
     * @since 1.0.0
     */
    profile(user) {
        var queryVars = this.util.generateQueryHeaders("User", user);
        
        return this.util.send(`${queryVars[1]}${profileQuery}}}`, queryVars[0]);
    };

    /**
     * Fetch a user's AniList stats.
     * @param { Number | String } user - Required. Can either be the username or the AniList ID.
     * @returns { UserStats }
     * @since 1.3.0
     */
    stats(user) {
        var queryVars = this.util.generateQueryHeaders("User", user);
        return this.util.send(`${queryVars[1]}${statsQuery}}}`, queryVars[0]);
    };

    /**
     * Fetch a user's AniList profile, basic and stats.
     * @param { Number | String } user - Required. Can either be the username or the AniList ID.
     * @returns { Object } Returns all keys within {@link UserProfile} and {@link UserStats}. UserStats are found under the statistics key.
     * @since 1.0.0
     */
    all(user) {
        var queryVars = this.util.generateQueryHeaders("User", user);
        return this.util.send(`${queryVars[1]}${profileQuery} ${statsQuery}}}`, queryVars[0]);
    }

    /**
     * Fetch recent activity from a user.
     * @param {Number} user - Required. Needs to be the user's AniList ID.
     * @returns { Object[] } Returns the 25 most recent activities of the user. Contains any number of 
     * {@link ListActivity}, {@link TextActivity}, {@link MessageActivity}. All of which are identifyable by the type key.
     * 
     * @since 1.6.0
     */
    getRecentActivity(user) {
        if (typeof user !== "number") { throw new Error("Term does not match the required types!"); }

        return this.util.send(`query ($page: Int, $perPage: Int, $user: Int) {
            Page (page: $page, perPage: $perPage) { pageInfo { total currentPage lastPage hasNextPage perPage } 
            activities(userId: $user, sort:ID_DESC) {
                ... on ListActivity { id status type progress media { id title { romaji english native userPreferred } type  }
                    createdAt likeCount replies { id text likeCount } }
                ... on TextActivity { id userId type text createdAt likeCount replies { id text likeCount } }
                ... on MessageActivity { id recipientId type message createdAt likeCount replies { id text likeCount } }
            } } }`, { user: user, page: 1, perPage: 25 });
    } 
};

module.exports = User;