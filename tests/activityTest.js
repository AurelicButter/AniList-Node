const AnilistNode = require("../lib/index.js");
const { token } = require("../token.json");
const anilist = new AnilistNode(token);

// Fetch a specific activity
anilist.activity.get(60575018).then(console.log);

// Get user's activity
anilist.activity.getUserActivity(120223).then(console.log);

// Post an activity
//anilist.activity.postText("Hello world!").then(console.log);

// Delete a target activity
//anilist.activity.delete(306764401).then(console.log);
