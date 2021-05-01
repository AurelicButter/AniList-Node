/**
 * An enum for recommendation ratings
 * @enum {String}
 * @readonly
 */

 const RecommendationRating = {
    NO_RATING: "NO_RATING",
    RATE_UP: "RATE_UP",
    RATE_DOWN: "RATE_DOWN"
};

Object.freeze(RecommendationRating);

module.exports = RecommendationRating;