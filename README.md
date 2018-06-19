# Anilist-Node
A simple, lightweight Node.js wrapper for the AniList API.

##Installing
```
npm install anilist-node
```

Then, in order to begin using the package, just refer to it as with any other package.
```javascript
const anilist = require('anilist-node');
```

##Example
```javascript 
const list = require('anilist-node');
const anilist = new list();

anilist.media.anime(21708).then(data => {
    console.log(data);
});
```

##Documentation
Please see [documentation.md](Documentation.md) file for more information