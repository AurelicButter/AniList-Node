const AnilistNode = require("../lib/index.js");
const anilist = new AnilistNode();

// Fetch a specific activity
anilist.activity.get(60575018).then(data => console.log(data));