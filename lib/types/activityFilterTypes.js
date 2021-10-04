/* eslint-disable camelcase */
/**
 * @type {ActivityFilterTypes}
 * @ignore
 */
const activityFilterTypes = {
	id: "number",
	userId: "number",
	messengerId: "number",
	mediaId: "number",
	type: "string", // ActivityType -> String
	isFollowing: "boolean",
	hasReplies: "boolean",
	hasRepliesOrTypeText: "boolean",
	createdAt: "number",
	id_not: "number",
	id_in: ["number"],
	id_not_in: ["number"],
	userId_not: "number",
	userId_in: ["number"],
	userId_not_in: ["number"],
	messengerId_not: "number",
	messengerId_in: ["number"],
	messengerId_not_in: ["number"],
	mediaId_not: "number",
	mediaId_in: ["number"],
	mediaId_not_in: ["number"],
	type_not: "string", // ActivityType -> String
	type_in: ["string"], // ActivityType -> String
	type_not_in: ["string"], // ActivityType -> String
	createdAt_greater: "number",
	createdAt_lesser: "number",
	sort: ["string"] // ActivitySort -> String
};

Object.freeze(activityFilterTypes);

module.exports = activityFilterTypes;
