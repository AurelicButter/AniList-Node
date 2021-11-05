/**
 * Access recommendations on AniList
 * @since 1.8.0
 * @memberof AniList
 */
class Recommendation {
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
	 * Get AniList recommendations for a media.
	 * @param {Number} mediaID The AniList media ID
	 * @param {Number} page Target a specific page number for recommended.
	 * @param {Number} perPage Limits the page amount to a specific number. 25 is max as per AniList limits.
	 * @returns {RecommendationList}
	 * @since 1.8.0
	 */
	getList(mediaID, page = 1, perPage = 25) {
		if (typeof mediaID !== "number") {
			throw new Error("mediaID is not a number type!");
		}
		if (typeof page !== "number") {
			throw new Error("page is not a number type!");
		}
		if (typeof perPage !== "number") {
			throw new Error("perPage is not a number type!");
		}

		const recommendQuery = `query ($page: Int, $perPage: Int, $id: Int) { Recommendation (mediaId: $id) {
            media { id title { romaji english native userPreferred } type } }
            Page(page: $page, perPage: $perPage) { recommendations(mediaId: $id, sort: RATING_DESC) {
            rating userRating user { id name } id
            mediaRecommendation { id title { romaji english native userPreferred } type } } } }`;

		return this.util.send(recommendQuery, { id: mediaID, page: page, perPage: perPage });
	}

	/**
	 * Get an AniList recommendation via its ID
	 * @param {Number} recommendID The AniList recommendation ID
	 * @returns {SingleRecommendation}
	 * @since 1.8.0
	 */
	get(recommendID) {
		if (typeof recommendID !== "number") {
			throw new Error("recommendID is not a number type!");
		}

		const recommendQuery = `query ($id: Int) { Recommendation (id: $id) {
            id rating userRating
            media { id title { romaji english native userPreferred } type } 
            mediaRecommendation { id title { romaji english native userPreferred } type }
            user { id name } } }`;

		return this.util.send(recommendQuery, { id: recommendID }).then((data) => {
			return data.Recommendation;
		});
	}
}

module.exports = Recommendation;
