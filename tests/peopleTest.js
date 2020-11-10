const AnilistNode = require("../lib/index.js");
const anilist = new AnilistNode();

//Find staff via their Anilist ID
anilist.people.staff(95672).then(data => { console.log(data); });

//Finds staff via their names.
anilist.people.staff("Yuuki Kaji").then(data => { console.log(data); });

//Finds a character via their Anilist ID
anilist.people.character(88344).then(data => { console.log(data); });

//Finds a character via their name.
anilist.people.character("Yuuta Gamon").then(data => { console.log(data); });