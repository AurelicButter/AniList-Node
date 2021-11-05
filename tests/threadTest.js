const AnilistNode = require("../lib/index.js");
const anilist = new AnilistNode();

anilist.thread.get(14344).then((data) => {
	console.log(data);
});
