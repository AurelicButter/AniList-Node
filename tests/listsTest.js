const anilist = require('../lib/index');
const AniList = new anilist();

let animeLists = AniList.lists.anime('salixor');
let mangaLists = AniList.lists.manga('salixor');

// Read an anime list with specified status (here, COMPLETED)
animeLists.then(lists => console.log(lists.filter(list => list.status === 'COMPLETED')));

// Read a manga list with specified status (here, CURRENT)
mangaLists.then(lists => console.log(lists.filter(list => list.status === 'CURRENT')));

// Display a sample user list entry
animeLists.then(lists => console.log(lists.filter(list => list.status === 'COMPLETED')[0].entries.filter(e => e.media.id === 20912)));