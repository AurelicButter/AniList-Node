/**
 * An enum for user title settings
 * @enum {String}
 * @readonly
 */

const UserTitleLanguage = {
	/**
	 * @member {String}
	 * @description Media name in romanized Japanese
	 */
	ROMAJI: "ROMAJI",
	/**
	 * @member {String}
	 * @description Official media name in English
	 */
	ENGLISH: "ENGLISH",
	/**
	 * @member {String}
	 * @description Official title in Japanese
	 */
	NATIVE: "NATIVE",
	/**
	 * @member {String}
	 * @description The romanization of the native language title, stylised by media creator
	 */
	ROMAJI_STYLISED: "ROMAJI_STYLISED",
	/**
	 * @member {String}
	 * @description The official english title, stylised by media creator
	 */
	ENGLISH_STYLISED: "ENGLISH_STYLISED",
	/**
	 * @member {String}
	 * @description Official title in it's native language, stylised by media creator
	 */
	NATIVE_STYLISED: "NATIVE_STYLISED"
};

Object.freeze(UserTitleLanguage);

module.exports = UserTitleLanguage;
