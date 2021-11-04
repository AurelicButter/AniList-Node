const AnilistNode = require("../lib/index.js");
const { token } = require("../token.json");
const anilist = new AnilistNode(token);

// Fetch a specific activity
anilist.activity.get(60575018).then((data) => console.log(data));

// Get user's activity
anilist.activity.getUserActivity(120223).then((data) => console.log(data));

// Post an activity
//anilist.activity.postText("Hello world!").then(data => console.log(data));

// Delete a target activity
//anilist.activity.delete(306764401).then(data => console.log(data));
