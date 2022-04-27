/**
 * Access AniList's media data.
 * @since 1.0.0
 * @memberof AniList
 */
class Media {
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
	 * Fetch an anime entry by its AniList ID.
	 * @param { Number } id - Required. The ID tied to the AniList entry.
	 * @returns { AnimeEntry }
	 * @since 1.0.0
	 */
	anime(id) {
		if (!id) {
			throw new Error("Anime id is not provided!");
		}
		if (typeof id !== "number") {
			throw new Error("Term provided is not a number!");
		}

		return this.util.send(
			`query ($id: Int) { Media (id: $id, type: ANIME) { id idMal title { romaji english native userPreferred } 
            format status episodes description startDate { year month day } endDate { year month day }
            season seasonYear duration countryOfOrigin isLicensed source hashtag trailer { id site }
            updatedAt coverImage { large:extraLarge medium:large small:medium color }
            bannerImage genres synonyms averageScore meanScore favourites
            popularity trending tags { id name isMediaSpoiler } relations { nodes { id title { english native romaji userPreferred } type } } 
            characters { nodes { id name { english: full } } } staff { nodes { id name { english: full } } } studios { nodes { id name isAnimationStudio } } 
            isFavourite isAdult isLocked nextAiringEpisode { timeUntilAiring airingAt episode } airingSchedule { nodes { airingAt timeUntilAiring episode } }
            trends { nodes { date trending popularity inProgress } } externalLinks { url }
            streamingEpisodes { title thumbnail url site } rankings { rank type context year season } mediaListEntry { id status }
            reviews { nodes { id score summary body } } siteUrl autoCreateForumThread modNotes 
            stats { scoreDistribution { score amount } statusDistribution { status amount } }
            isRecommendationBlocked recommendations { nodes { mediaRecommendation { id title { romaji english native userPreferred } type } } } } }`,
			{ id: id }
		);
	}

	/**
	 * [Requires Login] Favourite/Unfavourite an anime
	 * @param {Number} id - Required. The ID tied to the AniList entry.
	 * @returns {Boolean} Returns true if added, false otherwise.
	 * @since 1.12.0
	 */
	async favouriteAnime(id) {
		if (!id || typeof id !== "number") {
			throw new Error("AniList ID is not provided!");
		}

		const data = await this.util.send(
			`mutation ($mediaID: Int) {
				ToggleFavourite(animeId: $mediaID) {
					anime (page: 1, perPage: 25) {
					nodes { id }
			} } }`,
			{ mediaID: id }
		);

		return data.ToggleFavourite.anime.nodes.some((e) => {
			if (e.id === id) {
				return true;
			}
		});
	}

	/**
	 * Fetch a manga entry by its AniList ID.
	 * @param { Number } id - Required. The ID tied to the AniList entry.
	 * @returns { MangaEntry }
	 * @since 1.0.0
	 */
	manga(id) {
		if (!id) {
			throw new Error("Manga id is not provided!");
		}
		if (typeof id !== "number") {
			throw new Error("Term provided is not a number!");
		}

		return this.util.send(
			`query ($id: Int) { Media (id: $id, type: MANGA) { id idMal title { romaji english native userPreferred }
            description format status startDate { year month day } endDate { year month day } chapters volumes countryOfOrigin isLicensed updatedAt
            coverImage { large:extraLarge medium:large small:medium color } bannerImage genres synonyms averageScore meanScore siteUrl autoCreateForumThread modNotes
            popularity trending tags { id name isMediaSpoiler } relations { nodes { id title { english native romaji userPreferred } type } }
            characters { nodes { id name { english: full } } } staff { nodes { id name { english: full } } } isFavourite isAdult isLocked
            trends { nodes { date trending popularity inProgress } } externalLinks { url } rankings { rank type context year season } 
            mediaListEntry { id status } reviews { nodes { id score summary body } } 
            stats { scoreDistribution { score amount } statusDistribution { status amount } } favourites
            isRecommendationBlocked recommendations { nodes { mediaRecommendation { id title { romaji english native userPreferred } type } } } } }`,
			{ id: id }
		);
	}

	/**
	 * [Requires Login] Favourite/Unfavourite a manga
	 * @param {Number} id - Required. The ID tied to the AniList entry.
	 * @returns {Boolean} Returns true if added, false otherwise.
	 * @since 1.12.0
	 */
	async favouriteManga(id) {
		if (!id || typeof id !== "number") {
			throw new Error("AniList ID is not provided!");
		}

		const data = await this.util.send(
			`mutation ($mediaID: Int) {
				ToggleFavourite(mangaId: $mediaID) {
					manga (page: 1, perPage: 25) {
					nodes { id }
			} } }`,
			{ mediaID: id }
		);

		return data.ToggleFavourite.manga.nodes.some((e) => {
			if (e.id === id) {
				return true;
			}
		});
	}
}

module.exports = Media;
