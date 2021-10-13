const AnilistNode = require("../lib/index.js");
const { token } = require("../token.json");
const anilist = new AnilistNode(token);

// Fetch a user's profile
anilist.user.profile("Butterstroke").then((data) => console.log(data));

// Fetch the currently authorized user.
anilist.user.getAuthorized().then((data) => console.log(data));

anilist.user.update({ scoreFormat: "POINT_3" }).then((data) => console.log(data));
