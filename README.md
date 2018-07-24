# Anilist-Node
A simple, lightweight Node.js wrapper for the AniList API.

## Installing
Install with: `npm install anilist-node --dev` for the following:
1. Searches that need a user login (ie: Checking for favourites)
2. Uses such as editing a user's list
AND not having a client and token with AniList

If that doesn't apply (ie: general searches, user lookups), you may install with `npm install anilist-node`

### Getting your token
You only need to generate a token once in order to use. To start, head to [Anilist's Developer Page](https://anilist.co/settings/developer) and click "Create New Client". Note the client id. Then use the auth function, providing client id, email, and password. The function will return the token. Store it securely. There is an example in the Example section on how to use the token. 

If you wish to save space afterwards and know how to do so, you may uninstall puppeteer from the anilist-node directory.

## Example
### General lookup search (no login):
```javascript 
const anilist = require('anilist-node');
const Anilist = new anilist();

Anilist.media.anime(21708).then(data => {
    console.log(data);
});
```

### Lookup search (login):
```javascript
const settings = require('./settings.json');
const anilist = require('anilist-node');
const Anilist = new anilist(settings.token /* This being your token */);

Anilist.media.anime(21708).then(data => {
    console.log(data);
});
```

## Documentation
Please see [documentation.md](documentation.md) file for more information