const anilist = require("../lib/index");
const AniList = new anilist();

//Finds recommendations. Should return recommendation list for Shirobako.
AniList.recommendation.getList(20812).then(console.log);

// Get a single recommendation. Should return a recommendation for Shirobako.
AniList.recommendation.get(808).then(console.log);
