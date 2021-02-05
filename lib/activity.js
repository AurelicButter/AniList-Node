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
};

module.exports = Activity;