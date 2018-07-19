# Anilist-Node
A simple, lightweight Node.js wrapper for the AniList API.

## Installing
Install with: `npm install anilist-node --dev` for the following:
1. Searches that need a user login (ie: Checking for favourites)
2. Uses such as editing a user's list
AND not having a client and token with AniList

If that doesn't apply (ie: general searches, user lookups), you may install with `npm install anilist-node`

### Getting your token
You only need to generate a token once in order to use. To start, head to [Anilist's Developer Page](https://anilist.co/settings/developer) and click "Create New Client". Note the client id. Next, change the name of the settings_example.json to settings.json or copy paste into a new JSON file. As long as the end result leads to a settings.json with content like in the example JSON file. Add your email, password, and client id in the proper spots and save. In the same directory, run `node authorization.js`. A file titled "token.txt" should appear. That is your token. Store it securely. There is an example in the Example section on how to use the token.

Optional:
- You may delete your AniList credentials from the settings.json file (Email, password, and client id if you feel inclined)
- You may uninstall puppeteer via `npm uninstall puppeeteer` in the anilist-node directory
- You may delete authorization.js file and token.txt (Do store your token securely elsewhere before doing so)

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