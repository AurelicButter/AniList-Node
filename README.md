# Anilist-Node
<a href="https://www.npmjs.com/package/anilist-node"><img src="https://img.shields.io/npm/dt/anilist-node?label=Downloads&logo=NPM" alt="Total Downloads (NPM Link)" /></a>
<a href="https://www.npmjs.com/package/anilist-node"><img src="https://img.shields.io/npm/dm/anilist-node?label=Monthly&logo=NPM" alt="Monthly Downloads (NPM Link)"/></a>
<a href="https://discord.gg/qKfqsjW"><img src="https://discordapp.com/api/guilds/303253034551476225/widget.png" alt="Support Server" /></a>

A simple, lightweight Node.js wrapper for the AniList API.

## Using Anilist-node
To install: `npm install anilist-node`

You may need a token for some features (ie checking favourites). A token only needs to be generated once in order to use. To start, head to [Anilist's Developer Page](https://anilist.co/settings/developer) and click "Create New Client". Note the client id and place this URL into your client redirect `https://anilist.co/api/v2/oauth/pin`. This URL will allow you to get your token when authorizing. Then, copy paste this URL `https://anilist.co/api/v2/oauth/authorize?client_id={clientID}&response_type=token`, replacing the `{clientID}` with your client ID. It will ask you to log in and then provide you with the token to use.

>***NOTE: Please store your token securely and privately! This gives access to your AniList account. It is your responsibility to maintain your token.***

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
const settings = require('./settings.json'); //Or wherever your store your token.
const anilist = require('anilist-node');
const Anilist = new anilist(settings.token /* This being your token */);

Anilist.media.anime(21708).then(data => {
    console.log(data);
});
```

## Documentation
Documentation is provided in two locations. A static HTML site is avalible with the package under the docs directory. Or users can view the same site online here: [katsurin.com/docs/anilist-node](https://www.katsurin.com/docs/anilist-node/index.html).

## Contributing

Please refer to the [Contributing Guide](https://github.com/Butterstroke/AniList-Node/tree/master/.github/CONTRIBUTING.md) for more information. 

## License and Contact
AniList-Node is licensed under the [MIT License](LICENSE).

For issues and bugs, please use the issue tracker on the [GitHub repository](https://github.com/Butterstroke/AniList-Node/issues). For other needs, either contact me by email [katsurinstudios@protonmail.ch](mailto:katsurinstudios@protonmail.ch) or in my [Discord server](https://discord.gg/qKfqsjW) in the #anilist-node channel.
