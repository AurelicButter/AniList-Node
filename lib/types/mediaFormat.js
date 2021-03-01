/**
 * An enum for media formats
 * @enum {String}
 * @readonly
 */
const MediaFormat = {
    TV: "TV",
    TV_SHORT: "TV_SHORT",
    MOVIE: "MOVIE",
    SPECIAL: "SPECIAL",
    OVA: "OVA",
    ONA: "ONA",
    MUSIC: "MUSIC",
    MANGA: "MANGA",
    NOVEL: "NOVEL",
    ONE_SHOT: "ONE_SHOT"
};

Object.freeze(MediaFormat);

module.exports = MediaFormat;
