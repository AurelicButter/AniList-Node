const anilist = require('../index');
const AniList = new anilist();

AniList.media.anime(21708).then(data => { console.log(data); });