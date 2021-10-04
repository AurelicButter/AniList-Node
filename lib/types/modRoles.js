/**
 * An enum for moderator roles on users
 * @enum {String}
 * @readonly
 */

const ModRole = {
	/**
	 * @member {String}
	 * @description An AniList administrator
	 */
	ADMIN: "ADMIN",
	/**
	 * @member {String}
	 * @description A head developer of AniList
	 */
	LEAD_DEVELOPER: "LEAD_DEVELOPER",
	/**
	 * @member {String}
	 * @description An AniList developer
	 */
	DEVELOPER: "DEVELOPER",
	/**
	 * @member {String}
	 * @description A lead community moderator
	 */
	LEAD_COMMUNITY: "LEAD_COMMUNITY",
	/**
	 * @member {String}
	 * @description A community moderator
	 */
	COMMUNITY: "COMMUNITY",
	/**
	 * @member {String}
	 * @description A discord community moderator
	 */
	DISCORD_COMMUNITY: "DISCORD_COMMUNITY",
	/**
	 * @member {String}
	 * @description A lead anime data moderator
	 */
	LEAD_ANIME_DATA: "LEAD_ANIME_DATA",
	/**
	 * @member {String}
	 * @description An anime data moderator
	 */
	ANIME_DATA: "ANIME_DATA",
	/**
	 * @member {String}
	 * @description A lead manga data moderator
	 */
	LEAD_MANGA_DATA: "LEAD_MANGA_DATA",
	/**
	 * @member {String}
	 * @description A manga data moderator
	 */
	MANGA_DATA: "MANGA_DATA",
	/**
	 * @member {String}
	 * @description A lead social media moderator
	 */
	LEAD_SOCIAL_MEDIA: "LEAD_SOCIAL_MEDIA",
	/**
	 * @member {String}
	 * @description A social media moderator
	 */
	SOCIAL_MEDIA: "SOCIAL_MEDIA",
	/**
	 * @member {String}
	 * @description A retired moderator
	 */
	RETIRED: "RETIRED"
};

Object.freeze(ModRole);

module.exports = ModRole;
