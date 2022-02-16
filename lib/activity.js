const { TextActivityQuery, MessageActivityQuery, ListActivityQuery } = require("./consts");

/**
 * Access activities on AniList
 * @since 1.7.0
 * @memberof AniList
 */
class Activity {
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
	 * Get a specific AniList activity by its ID.
	 * @param {Number} activityID The AniList activity ID
	 * @returns { ListActivity | TextActivity | MessageActivity } Returns the activity information. Activity will either appear as:
	 * {@link ListActivity}, {@link TextActivity}, {@link MessageActivity}. All of which are identifiable by the type key.
	 * @since 1.7.0
	 */
	get(activityID) {
		const queryVars = this.util.generateQueryHeaders("Activity", activityID);

		return this.util
			.send(
				queryVars[1] +
					`... on ListActivity {
                ${ListActivityQuery}
            }
            ... on TextActivity {
                ${TextActivityQuery}
            }
            ... on MessageActivity {
                ${MessageActivityQuery}
            }}}`,
				queryVars[0]
			)
			.then((data) => {
				return data.Activity;
			});
	}

	/**
	 * Fetch activities from a user.
	 * @param {Number} user - Required. Needs to be the user's AniList ID.
	 * @param {Number} page - The page number to display
	 * @param {Number} perPage - How many entries to display on one page. (Max is 25 per AniList limit)
	 * @returns { Object[] } Returns a list of user activities based on the page & perPage values Contains any number of
	 * {@link ListActivity}, {@link TextActivity}, {@link MessageActivity}. All of which are identifiable by the type key.
	 *
	 * @since 1.7.0
	 */
	getUserActivity(user, page = 1, perPage = 25) {
		if (typeof user !== "number" || typeof page !== "number" || typeof perPage !== "number") {
			throw new Error("Term does not match the required type!");
		}

		return this.util
			.send(
				`query ($page: Int, $perPage: Int, $user: Int) {
            Page (page: $page, perPage: $perPage) { pageInfo { total currentPage lastPage hasNextPage perPage } 
            activities(userId: $user, sort:ID_DESC) {
                ... on ListActivity { ${ListActivityQuery} }
                ... on TextActivity { ${TextActivityQuery} }
                ... on MessageActivity { ${MessageActivityQuery} }
            } } }`,
				{ user: user, page: page, perPage: perPage }
			)
			.then((data) => {
				return data;
			});
	}

	/**
	 * [Require Login] Post a new text activity or update the activity with its ID
	 * @param {String} text - The content of the activity.
	 * @param {Number?} id - The AniList activity ID. Null to create, number for update
	 *
	 * @returns {TextActivity}
	 * @since 1.11.0
	 */
	async postText(text, id) {
		if (typeof text !== "string") {
			throw new Error("Text is not a string type.");
		}
		if (id && typeof id !== "number") {
			throw new Error("Provided ID is not a number type.");
		}

		const data = await this.util.send(
			`mutation ($id: Int, $text: String) {
				SaveTextActivity(id: $id, text: $text) {
				${TextActivityQuery}
			} }`,
			{ id: id, text: text }
		);
		return data.SaveTextActivity;
	}

	/**
	 * [Require Login] Post a new message activity or update the activity with its ID
	 * @param {String} text - The activity message text
	 * @param {Number} recipientId - The target user to send the message to
	 * @param {Boolean} isPrivate - Set to true if it is a private message
	 * @param {Number?} id - AniList Activity ID. Null to create, number to update.
	 *
	 * @returns {MessageActivity}
	 * @since 1.11.0
	 */
	async postMessage(text, recipientId, isPrivate = false, id) {
		if (typeof text !== "string") {
			throw new Error("Text is not a string type.");
		}
		if (typeof recipientId !== "number") {
			throw new Error("Recipient ID is not a number type.");
		}
		if (id && typeof id !== "number") {
			throw new Error("Provided ID is not a number type.");
		}

		const data = await this.util.send(
			`mutation ($id: Int, $text: String, $recipientId: Int, $private: Boolean) {
			SaveMessageActivity(message: $text, id: $id, recipientId: $recipientId, private: $private) {
			  ${MessageActivityQuery}
			} }`,
			{ id: id, text: text, recipientId: recipientId, private: isPrivate }
		);

		return data.SaveMessageActivity;
	}

	/**
	 * [Require Login] Delete the current authorized user's activity post
	 * @param {Number} id - The AniList activity ID to delete
	 *
	 * @returns {Boolean} Returns true if successful
	 * @since 1.11.0
	 */
	async delete(id) {
		if (typeof id !== "number") {
			throw new Error("ID is not a number type.");
		}

		const data = await this.util.send(`mutation ($id: Int) { DeleteActivity(id: $id) { deleted } }`, { id: id });

		return data.DeleteActivity.deleted;
	}
}

module.exports = Activity;
