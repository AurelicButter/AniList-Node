/**
 * Access threads on AniList
 * @since 1.11.0
 * @memberof AniList
 */
class Thread {
	/**
	 * @description This constructor is meant for internal use and is apart of initializing. You cannot access this
	 * through the AniList class and are not expect to.
	 * @param { Utilities } utilities - The AniList Utilities class.
	 * @hideconstructor
	 */
	constructor(utilities) {
		this.util = utilities;
	}

	/**
	 * Get a specific thread by its AniList ID
	 * @param {Number} id - The AniList ID of the thread
	 *
	 * @returns {ThreadEntry}
	 * @since 1.11.0
	 */
	get(id) {
		let queryVars = this.util.generateQueryHeaders("Thread", id);

		return this.util
			.send(
				`${queryVars[1]}
			id title body user { id name } replyCommentId
			viewCount isLocked isSticky isSubscribed replyUser { id name }
			isLiked repliedAt createdAt updatedAt
			likes { id name } categories { id name }
			mediaCategories { id title { english native romaji userPreferred } type }
	  		} }`,
				queryVars[0]
			)
			.then((data) => {
				return data.Thread;
			});
	}
}

module.exports = Thread;
