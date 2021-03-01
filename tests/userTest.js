const AnilistNode = require("../lib/index.js");
const anilist = new AnilistNode();

// Fetch a user's profile
anilist.user.profile("Butterstroke").then(data => console.log(data));