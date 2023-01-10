const AnilistNode = require("../lib/index.js");
const { token } = require("../token.json");
const anilist = new AnilistNode(token);

// Fetch a user's profile
anilist.user.profile("Butterstroke").then(console.log);

// Fetch the currently authorized user.
anilist.user.getAuthorized().then(console.log);

anilist.user.update({ scoreFormat: "POINT_3" }).then(console.log);
