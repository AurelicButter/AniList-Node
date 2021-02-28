/**
 * An enum for activity types
 * @enum {String}
 * @readonly
 */

const ActivityType = {
    TEXT: "TEXT",
    ANIME_LIST: "ANIME_LIST",
    MANGA_LIST: "MANGA_LIST",
    MESSAGE: "MESSAGE",
    MEDIA_LIST: "MEDIA_LIST"
};

Object.freeze(ActivityType);

module.exports = ActivityType;