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

	/**
	 * [Require Login] Delete a thread
	 * @param {Number} id - The AniList thread ID to delete
	 *
	 * @returns {Boolean} Returns true if successful
	 * @since 1.12.0
	 */
	async delete(id) {
		if (typeof id !== "number") {
			throw new Error("ID is not a number type.");
		}

		return this.util.send(`mutation ($id: Int) { DeleteThread(id: $id) { deleted } }`, { id: id }).then((data) => {
			return data.DeleteThread.deleted;
		});
	}

	/**
	 * Get thread comments for a thread
	 * @param {Number} id - The AniList thread ID
	 * @param {Number} page - The page number
	 * @param {Number} perPage - How many entries per page
	 *
	 * @returns {ThreadComment[]}
	 * @since 1.12.0
	 */
	getComments(id, page = 1, perPage = 25) {
		if (typeof id !== "number") {
			throw new Error("ID is not a number type.");
		}

		return this.util
			.send(
				`query ($threadID: Int, $page: Int, $perPage: Int) {
				Page(page:$page, perPage:$perPage) {
				threadComments(threadId: $threadID) {
			   		id user { id name } comment isLiked createdAt updatedAt
			   		likes { id name } childComments isLocked
				} } }`,
				{ threadID: id, page: page, perPage: perPage }
			)
			.then((data) => {
				return data.threadComments;
			});
	}
}

module.exports = Thread;
