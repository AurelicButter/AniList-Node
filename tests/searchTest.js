const anilistnode = require("../index");
const Anilist = new anilistnode();

Anilist.search("anime", "Occultic;Nine", 1, 10).then((data) => { console.log(data); });