/**
 * An enum for notification types
 * @enum {String}
 * @readonly
 */

const NotificationType = {
	/**
	 * @member {String}
	 * @description Recieved a message
	 */
	ACTIVITY_MESSAGE: "ACTIVITY_MESSAGE",
	/**
	 * @member {String}
	 * @description Replied to user's activity
	 */
	ACTIVITY_REPLY: "ACTIVITY_REPLY",
	/**
	 * @member {String}
	 * @description Another user has followed
	 */
	FOLLOWING: "FOLLOWING",
	/**
	 * @member {String}
	 * @description A user has mentioned you in their activity
	 */
	ACTIVITY_MENTION: "ACTIVITY_MENTION",
	/**
	 * @member {String}
	 * @description A user has mentioned you in a forum comment
	 */
	THREAD_COMMENT_MENTION: "THREAD_COMMENT_MENTION",
	/**
	 * @member {String}
	 * @description A user has commented in one of your subscribed forum threads
	 */
	THREAD_SUBSCRIBED: "THREAD_SUBSCRIBED",
	/**
	 * @member {String}
	 * @description A user has replied to your forum comment
	 */
	THREAD_COMMENT_REPLY: "THREAD_COMMENT_REPLY",
	/**
	 * @member {String}
	 * @description An anime you are currently watching has aired
	 */
	AIRING: "AIRING",
	/**
	 * @member {String}
	 * @description A user has liked your activity
	 */
	ACTIVITY_LIKE: "ACTIVITY_LIKE",
	/**
	 * @member {String}
	 * @description A user has liked your activity reply
	 */
	ACTIVITY_REPLY_LIKE: "ACTIVITY_REPLY_LIKE",
	/**
	 * @member {String}
	 * @description A user has liked your forum thread
	 */
	THREAD_LIKE: "THREAD_LIKE",
	/**
	 * @member {String}
	 * @description A user has liked your forum comment
	 */
	THREAD_COMMENT_LIKE: "THREAD_COMMENT_LIKE",
	/**
	 * @member {String}
	 * @description A user has replied to activity you have also replied to
	 */
	ACTIVITY_REPLY_SUBSCRIBED: "ACTIVITY_REPLY_SUBSCRIBED",
	/**
	 * @member {String}
	 * @description A new anime or manga has been added to the site where its related media is on the user's list
	 */
	RELATED_MEDIA_ADDITION: "RELATED_MEDIA_ADDITION",
	/**
	 * @member {String}
	 * @description An anime or manga has had a data change that affects how a user may track it in their lists
	 */
	MEDIA_DATA_CHANGE: "MEDIA_DATA_CHANGE",
	/**
	 * @member {String}
	 * @description Anime or manga entries on the user's list have been merged into a single entry
	 */
	MEDIA_MERGE: "MEDIA_MERGE",
	/**
	 * @member {String}
	 * @description An anime or manga on the user's list has been deleted from the site
	 */
	MEDIA_DELETION: "MEDIA_DELETION"
};

Object.freeze(NotificationType);

module.exports = NotificationType;
