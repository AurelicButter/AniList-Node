const anilist = require("../lib/index");
const AniList = new anilist();

//Finds recommendations. Should return recommendation list for Shirobako.
AniList.recommendation.getList(20812).then((data) => {
	console.log(data);
});

// Get a single recommendation. Should return a recommendation for Shirobako.
AniList.recommendation.get(808).then((data) => {
	console.log(data);
});
