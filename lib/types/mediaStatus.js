/**
 * An enum for media statuses
 * @enum {String}
 * @readonly
 */
const MediaStatus = {
    FINISHED: "FINISHED",
    RELEASING: "RELEASING",
    NOT_YET_RELEASED: "NOT_YET_RELEASED",
    CANCELLED: "CANCELLED",
    HIATUS: "HIATUS"
};

Object.freeze(MediaStatus);

module.exports = MediaStatus;