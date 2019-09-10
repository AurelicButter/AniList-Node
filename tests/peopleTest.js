const AnilistNode = require("../index.js");
const anilist = new AnilistNode();

//Find staff via their Anilist ID
anilist.people.staff(95672).then(data => { console.log(data); });

//Finds staff via their names.
anilist.people.staff("Kaiji Yuki").then(data => { console.log(data); });

//Finds a character via their Anilist ID
AniList.people.character(88344).then(data => { console.log(data); });