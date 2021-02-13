/**
 * Access activities on AniList
 * @since 1.7.0
 * @memberof AniList
 */
class Activity {
    /**
     * @description This constructor is meant for internal use and is apart of initializing. You cannot access this
     * through the AniList class and are not expect to.
     * @param { Utilites } utilities - The AniList Utilities class.
     * @hideconstructor
     */
    constructor(utilities) {
        this.util = utilities;
    }

    /**
     * Get a specific AniList activity by its ID.
     * @param {Number} activityID The AniList activity ID 
     * @returns { ListActivity | TextActivity | MessageActivity } Returns the activity information. Activity will either appear as: 
     * {@link ListActivity}, {@link TextActivity}, {@link MessageActivity}. All of which are identifyable by the type key.
     * @since 1.7.0
     */
    get(activityID) {
        var queryVars = this.util.generateQueryHeaders("Activity", activityID);

        return this.util.send(queryVars[1] + 
            `... on ListActivity {
                id status type progress
                media { id title { romaji english native userPreferred } type }
                createdAt
                likeCount
                replies { id text likeCount }
            }
            ... on TextActivity {
                id userId type text createdAt likeCount
                replies { id text likeCount }
            }
            ... on MessageActivity {
                id recipientId type message createdAt likeCount
                replies { id text likeCount }
            }}}`, queryVars[0]);
    }

    /**
     * Fetch activities from a user.
     * @param {Number} user - Required. Needs to be the user's AniList ID.
     * @param {Number} page - The page number to display
     * @param {Number} perPage - How many entries to display on one page. (Max is 25 per AniList limit)
     * @returns { Object[] } Returns a list of user activities based on the page & perPage values Contains any number of 
     * {@link ListActivity}, {@link TextActivity}, {@link MessageActivity}. All of which are identifyable by the type key.
     * 
     * @since 1.7.0
     */
    getUserActivity(user, page=1, perPage=25) {
        if (typeof user !== "number") { throw new Error("Term does not match the required type!"); }
        if (typeof page !== "number") { throw new Error("Term does not match the required type!"); }
        if (typeof perPage !== "number") { throw new Error("Term does not match the required type!"); }

        return this.util.send(`query ($page: Int, $perPage: Int, $user: Int) {
            Page (page: $page, perPage: $perPage) { pageInfo { total currentPage lastPage hasNextPage perPage } 
            activities(userId: $user, sort:ID_DESC) {
                ... on ListActivity { id status type progress media { id title { romaji english native userPreferred } type  }
                    createdAt likeCount replies { id text likeCount } }
                ... on TextActivity { id userId type text createdAt likeCount replies { id text likeCount } }
                ... on MessageActivity { id recipientId type message createdAt likeCount replies { id text likeCount } }
            } } }`, { user: user, page: page, perPage: perPage });
    } 
};

module.exports = Activity;