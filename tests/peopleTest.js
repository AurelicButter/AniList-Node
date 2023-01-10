const AnilistNode = require("../lib/index.js");
const { token } = require("../token.json");
const anilist = new AnilistNode(token);

//Find staff via their Anilist ID
anilist.people.staff(95672).then(console.log);

//Finds staff via their names.
anilist.people.staff("Yuuki Kaji").then(console.log);

//Finds a character via their Anilist ID
anilist.people.character(88344).then(console.log);

//Finds a character via their name.
anilist.people.character("Yuuta Gamon").then(console.log);

// Adds/Removes favourite from characters
anilist.people.favouriteChar(126156).then(console.log);
