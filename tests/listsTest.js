const anilist = require('../index');
const AniList = new anilist();

AniList.lists.anime('salixor')
    .then(data => { console.log(data.filter(l => l.status === 'CURRENT')); });
AniList.lists.manga('salixor')
    .then(data => { console.log(data.filter(l => l.status === 'CURRENT')); });
