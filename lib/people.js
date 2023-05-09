/**
 * Access AniList's characters and staff data.
 * @since 1.0.0
 * @memberof AniList
 */
class People {
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
	 * Fetch a character entry by its AniList ID.
	 * @param { Number|String } id - Required. The ID tied to the AniList entry.
	 * @returns { CharacterEntry }
	 * @since 1.0.0
	 */
	character(id) {
		let queryVars = this.util.generateQueryHeaders("Character", id);

		return this.util.send(
			queryVars[1] +
				`id name { english: full native alternative alternativeSpoiler userPreferred } 
				image { large medium } gender dateOfBirth { year month day } age bloodType description 
				isFavourite favourites isFavouriteBlocked 
        		media { nodes { id title { romaji english native userPreferred } type } } } }`,
			queryVars[0]
		);
	}

	/**
	 * [Requires Login] Favourite/Unfavourite a character
	 * @param {Number} id - Required. The ID tied to the AniList entry.
	 * @returns {Boolean} Returns true if added, false otherwise.
	 * @since 1.12.0
	 */
	async favouriteChar(id) {
		if (!id || typeof id !== "number") {
			throw new Error("AniList ID is not provided!");
		}

		const data = await this.util.send(
			`mutation ($charID: Int) {
				ToggleFavourite(characterId: $charID) {
				  characters (page: 1, perPage: 25) {
					nodes { id }
			} } }`,
			{ charID: id }
		);

		return data.ToggleFavourite.characters.nodes.some((e) => {
			if (e.id === id) {
				return true;
			}
		});
	}

	/**
	 * Get all characters who's birthday is today
	 * @param { Number } page - What page in the search to target. Defaults at 1.
	 * @returns { PersonRelation[] }
	 * @since 1.14.0
	 */
	async getBirthdayCharacters(page = 1) {
		if (typeof page !== "number") {
			throw new Error("Page number is not a number");
		}

		const data = await this.util.send(
			`query ($page: Int) { Page (page: $page) {
				characters (isBirthday: true) {
					id name { english: full }
			} } }`,
			{ page: page }
		);

		return data.Page.characters;
	}

	/**
	 * Fetch a staff entry by its AniList ID or their name.
	 * @param { Number|String } id - Required. The ID can either be the AniList ID or the staff's name.
	 * @returns { StaffEntry }
	 * @since 1.0.0
	 */
	staff(id) {
		let queryVars = this.util.generateQueryHeaders("Staff", id);

		return this.util.send(
			queryVars[1] +
				`id name { english: full native alternative userPreferred } language: languageV2 image { large medium }
            	description primaryOccupations gender dateOfBirth { year month day } dateOfDeath { year month day }
				age yearsActive homeTown bloodType isFavourite isFavouriteBlocked favourites
            	staffMedia { nodes { id title { romaji english native userPreferred } type } }
            	characters { nodes { id name { english: full } } }
				characterMedia { nodes { id title { romaji english native userPreferred } type } } } }`,
			queryVars[0]
		);
	}

	/**
	 * [Requires Login] Favourite/Unfavourite a staff entry
	 * @param {Number} id - Required. The ID tied to the AniList entry.
	 * @returns {Boolean} Returns true if added, false otherwise.
	 * @since 1.12.0
	 */
	async favouriteStaff(id) {
		if (!id || typeof id !== "number") {
			throw new Error("AniList ID is not provided!");
		}

		const data = await this.util.send(
			`mutation ($staffID: Int) {
				ToggleFavourite(staffId: $staffID) {
				  staff (page: 1, perPage: 25) { 
					nodes { id } 
			} } }`,
			{ staffID: id }
		);

		return data.ToggleFavourite.staff.nodes.some((e) => {
			if (e.id === id) {
				return true;
			}
		});
	}

	/**
	 * Get all staff entries who's birthday is today
	 * @param { Number } page - What page in the search to target. Defaults at 1.
	 * @returns { PersonRelation[] }
	 * @since 1.14.0
	 */
	async getBirthdayStaff(page = 1) {
		if (typeof page !== "number") {
			throw new Error("Page number is not a number");
		}

		const data = await this.util.send(
			`query ($page: Int) { Page (page: $page) {
				staff (isBirthday: true) {
					id name { english: full }
			} } }`,
			{ page: page }
		);

		return data.Page.staff;
	}
}

module.exports = People;
