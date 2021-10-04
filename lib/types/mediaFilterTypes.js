/* eslint-disable camelcase */
/**
 * @type {MediaFilterTypes}
 * @ignore
 */
const mediaFilterTypes = {
	id: "number",
	idMal: "number",
	startDate: "number", // FuzzyDateInt -> "number"
	endDate: "number", // FuzzyDateInt -> "number"
	season: "string", // MediaSeason -> "string"
	seasonYear: "number",
	type: "string", // MediaType -> "string"
	format: "string", // MediaFormat -> "string"
	status: "string", // MediaStatus -> "string"
	episodes: "number",
	duration: "number",
	chapters: "number",
	volumes: "number",
	isAdult: "boolean",
	genre: "string",
	tag: "string",
	minimumTagRank: "number",
	tagCategory: "string",
	onList: "boolean",
	licensedBy: "string",
	averageScore: "number",
	popularity: "number",
	source: "string", // MediaFormat -> "string"
	countryOfOrigin: "number", // CountryCode -> "number"
	search: "string",
	id_not: "number",
	id_in: [0], // [0] for Number array.
	id_not_in: [0], // [0] for Number array.
	idMal_not: "number",
	idMal_in: [0], // [0] for Number array.
	idMal_not_in: [0], // [0] for Number array.
	startDate_greater: "number", // FuzzyDateInt -> "number"
	startDate_lesser: "number", // FuzzyDateInt -> "number"
	startDate_like: "string",
	endDate_greater: "number", // FuzzyDateInt -> "number"
	endDate_lesser: "number", // FuzzyDateInt -> "number"
	endDate_like: "string",
	format_in: ["string"], // MediaFormat -> "string"
	format_not: "string", // MediaFormat -> "string"
	format_not_in: ["string"], // MediaFormat -> "string"
	status_in: ["string"], // MediaStatus -> "string"
	status_not: "string", // MediaStatus -> "string"
	status_not_in: ["string"], // MediaStatus -> "string"
	episodes_greater: "number",
	episodes_lesser: "number",
	duration_greater: "number",
	duration_lesser: "number",
	chapters_greater: "number",
	chapters_lesser: "number",
	volumes_greater: "number",
	volumes_lesser: "number",
	genre_in: ["string"],
	genre_not_in: ["string"],
	tag_in: ["string"],
	tag_not_in: ["string"],
	tagCategory_in: ["string"],
	tagCategory_not_in: ["string"],
	licensedBy_in: ["string"],
	averageScore_not: "number",
	averageScore_greater: "number",
	averageScore_lesser: "number",
	popularity_not: "number",
	popularity_greater: "number",
	popularity_lesser: "number",
	source_in: ["string"], // MediaSource -> "string"
	sort: ["string"] // MediaSort -> "string"
};

Object.freeze(mediaFilterTypes);

module.exports = mediaFilterTypes;
