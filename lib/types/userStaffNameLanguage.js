/**
 * An enum for user name settings
 * @enum {String}
 * @readonly
 */

const UserStaffNameLanguage = {
	/**
	 * @member {String}
	 * @description Person's name in romanized Japanese
	 */
	ROMAJI: "ROMAJI",
	/**
	 * @member {String}
	 * @description Person's name in native Japanese
	 */
	NATIVE: "NATIVE",
	/**
	 * @member {String}
	 * @description Similar to Romaji except the names follow Western naming style: Given name, Surname
	 */
	ROMAJI_WESTERN: "ROMAJI_WESTERN"
};

Object.freeze(UserStaffNameLanguage);

module.exports = UserStaffNameLanguage;
