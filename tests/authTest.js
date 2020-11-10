const AnilistNode = require("../lib/index.js");
const { token } = require("../token.json");
const anilist = new AnilistNode(token);

// Check if isFavourite is true.
anilist.people.character(126156).then(data => { console.log(data); });