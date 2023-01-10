const AnilistNode = require("../lib/index.js");
const anilist = new AnilistNode();

anilist.thread.get(14344).then(console.log);

anilist.thread.getComments(14344).then(console.log);
