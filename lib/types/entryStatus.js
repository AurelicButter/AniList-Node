/**
 * An enum for list entry status
 * @enum {String}
 * @readonly
 */
const EntryStatus = {
	CURRENT: "CURRENT",
	PLANNING: "PLANNING",
	COMPLETED: "COMPLETED",
	DROPPED: "DROPPED",
	PAUSED: "PAUSED",
	REPEATING: "REPEATING"
};

Object.freeze(EntryStatus);

module.exports = EntryStatus;
