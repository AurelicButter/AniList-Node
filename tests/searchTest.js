const anilistnode = require("../lib/index");
const Anilist = new anilistnode();

// Depreciated Search Method
Anilist.search("anime", "Occultic;Nine", 1, 10).then((data) => {
	console.log(data);
});

let myFilter = {
	isAdult: true,
	// eslint-disable-next-line camelcase
	source_in: ["ORIGINAL", "LIGHT_NOVEL"]
};

// New Search Method
Anilist.searchEntry.anime(null, myFilter).then((data) => console.log(data));
