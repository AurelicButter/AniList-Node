## How to Import

AniList-Node is a class based, asynchronous package, meaning the main class needed to be constructed and all of its methods are async. 

For JavaScript, a simple require line and new class is perfect for the job.
```JavaScript
const AniList = require("anilist-node");

const anilist = new AniList();
```

However with TypeScript installs, the class is exported under the name AniList and therefore should be imported as such. AniList-Node is a CommonJS package so depending on your configurations, you may need to import it differently.
```TypeScript
// For projects using CommonJS modules
import AniList from "anilist-node"; 

// For projects using ES modules
import { AniList } from "anilist-node";

const anilist = new AniList();
```

## Authorization

For a few features such as checking favourites, a token needs to be added to AniList-Node during the class initialization. 

For those without a token, head to [Anilist's Developer Page](https://anilist.co/settings/developer) and click "Create New Client". Note the client id. Then, copy paste this URL `https://anilist.co/api/v2/oauth/authorize?client_id={clientID}&response_type=token`, replacing the `{clientID}` with your client ID. It will ask you to log in and then provide you with the token to use. You will not need to generate a token more than once.

>***NOTE: Please store your token securely and privately! This gives access to your AniList account. It is your responsibility to maintain your token.***

Once the token is accquired, then it can be added to the class as follows.

```JavaScript
const settings = require('./settings.json'); //Or wherever your store your token.
const anilist = require('anilist-node');
const Anilist = new anilist(settings.token /* This being your token */);
```

## How to Use

Every class, method, and property is found within the AniList class. 

So if the program wanted to get the character information of [Myne](https://anilist.co/character/126156) from [Ascendance of a Bookworm](https://anilist.co/manga/87383), it would need to get data from the character method within the [people]{@link AniList.People} class.

```JavaScript
const AniList = require("anilist-node");

const anilist = new AniList();

// You can either use then...
anilist.people.character(126156).then(data => { console.log(data); });

// Or await it!
const data = await anilist.people.character(126156);
console.log(data);
```

All of the methods to fetch data are the same way so please refer to the documentation on what methods are available and what data is returned in the objects.