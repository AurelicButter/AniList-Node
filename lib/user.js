const {
	UserProfileQuery,
	UserStatsQuery,
	UserUpdateQuery,
	ListActivityQuery,
	TextActivityQuery,
	MessageActivityQuery
} = require("./consts");

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
	}

	/**
	 * Fetch a user's AniList basic profile.
	 * @param { Number | String } user - Required. Can either be the username or the AniList ID.
	 * @returns { UserProfile }
	 * @since 1.0.0
	 */
	profile(user) {
		let queryVars = this.util.generateQueryHeaders("User", user);

		return this.util.send(`${queryVars[1]}${UserProfileQuery}}}`, queryVars[0]);
	}

	/**
	 * Fetch a user's AniList stats.
	 * @param { Number | String } user - Required. Can either be the username or the AniList ID.
	 * @returns { UserStats }
	 * @since 1.3.0
	 */
	stats(user) {
		let queryVars = this.util.generateQueryHeaders("User", user);
		return this.util.send(`${queryVars[1]}${UserStatsQuery}}}`, queryVars[0]);
	}

	/**
	 * Fetch a user's AniList profile, basic and stats.
	 * @param { Number | String } user - Required. Can either be the username or the AniList ID.
	 * @returns { Object } Returns all keys within {@link UserProfile} and {@link UserStats}. UserStats are found under the statistics key.
	 * @since 1.0.0
	 */
	all(user) {
		let queryVars = this.util.generateQueryHeaders("User", user);
		return this.util.send(`${queryVars[1]}${UserProfileQuery} ${UserStatsQuery}}}`, queryVars[0]);
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
		if (typeof user !== "number") {
			throw new Error("Term does not match the required types!");
		}

		return this.util.send(
			`query ($page: Int, $perPage: Int, $user: Int) {
            Page (page: $page, perPage: $perPage) { pageInfo { total currentPage lastPage hasNextPage perPage } 
            activities(userId: $user, sort:ID_DESC) {
                ... on ListActivity { ${ListActivityQuery} }
                ... on TextActivity { ${TextActivityQuery} }
                ... on MessageActivity { ${MessageActivityQuery} }
            } } }`,
			{ user: user, page: 1, perPage: 25 }
		);
	}

	/**
	 * Fetch profile information on the currently authorized user.
	 * @returns { UserProfile }
	 *
	 * @since 1.8.0
	 */
	getAuthorized() {
		if (!this.util.key) {
			throw new Error("There is no current authorized user!");
		}

		return this.util.send(`query{Viewer{${UserProfileQuery}}}`, {});
	}

	/**
	 * [Requires Login] Update user settings
	 * @param {UserOptionsInput} options
	 * @returns {UserOptions}
	 *
	 * @since 1.10.0
	 */
	async update(options) {
		if (!options || Object.keys(options).length === 0) {
			throw new Error("Options were not provided for updating user!");
		}

		const data = await this.util.send(UserUpdateQuery, options);
		return data.updateUser;
	}

	/**
	 * [Requires Login] Follow/Unfollow a user
	 * @param {Number} userID - The user ID of the account to follow
	 * @returns {Boolean} True if following, false otherwise.
	 *
	 * @since 1.12.0
	 */
	async follow(userID) {
		if (typeof userID !== "number") {
			throw new Error("userID is not a number type.");
		}

		return this.util
			.send(`mutation ($userID: Int) { ToggleFollow(userId: $userID) { isFollowing } }`, {
				userID: userID
			})
			.then((data) => {
				if (Array.isArray(data)) {
					return data;
				}
				return data.ToggleFollow.isFollowing;
			});
	}
}

module.exports = User;
