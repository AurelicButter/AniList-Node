/**
 * An enum for media sources
 * @enum {String}
 * @readonly
 */
 
const MediaSource = {
    ORIGINAL: "ORIGINAL",
    MANGA: "MANGA",
    LIGHT_NOVEL: "LIGHT_NOVEL",
    VISUAL_NOVEL: "VISUAL_NOVEL",
    VIDEO_GAME: "VIDEO_GAME",
    OTHER: "OTHER",
    NOVEL: "NOVEL",
    DOUJINSHI: "DOUJINSHI",
    ANIME: "ANIME"
};

Object.freeze(MediaSource);

module.exports = MediaSource;
