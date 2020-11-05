const AnilistNode = require("../lib/index.js");
const anilist = new AnilistNode();

//Find studio via their Anilist ID
anilist.studio(314).then(data => { console.log(data); });

//Find studio via their AniList name
anilist.studio("White Fox").then(data => { console.log(data); });
