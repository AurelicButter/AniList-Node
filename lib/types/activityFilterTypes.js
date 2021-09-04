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

/**
 * @typedef ActivityFilterTypes
 * @description An enum for filter types for values
 * @enum
 * @readonly
 * @property {Number} id The id of the activity
 * @property {Number} userId The userID of the account with the activity
 * @property {Number} messengerId The ID of who sent the message
 * @property {ActivityType} type The type of activity
 * @property {Boolean} isFollowing [Requires Login] Filter users by who is following the authorized user
 * @property {Boolean} hasReplies Filter by which activities have replies.
 * @property {Boolean} hasRepliesOrTypeText Filter by which activities have replies or text
 * @property {Number} createdAt The time at which the activity was created
 * @property {Number} id_not Exclude an activity with the given ID
 * @property {Number[]} id_in Include any activities with the given IDs
 * @property {Number[]} id_not_in Excludes any activities with the given IDs
 * @property {Number} userId_not Exclude any activity with the given userID
 * @property {Number[]} userId_in Includes any activity with the given userIDs
 * @property {Number[]} userId_not_in Exclude any activity with the given userIDs
 * @property {Number} messengerId_not Exclude any activity with the given ID
 * @property {Number[]} messengerId_in Include any activity with the given IDs
 * @property {Number[]} messengerId_not_in Exclude any activity with the given IDs
 * @property {Number} mediaId_not Exclude any activity with the given media ID
 * @property {Number[]} mediaId_in Include any activity with the given media IDs
 * @property {Number[]} mediaId_not_in Exclude any activity with the given media IDs
 * @property {ActivityType} type_not Exclude any activity with the same ActivityType
 * @property {ActivityType[]} type_in Include any activity with the given ActivityTypes
 * @property {ActivityType[]} type_not_in Exclude any activity with the given ActivityTypes
 * @property {Number} createdAt_greater Include any activity created at the given date or more recent.
 * @property {Number} createdAt_lesser Include any activity created at the given date or less recent.
 * @property {ActivitySort[]} sort Sort the query by the parameters given.
 */
