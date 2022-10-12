const anilist = require("../lib/index");
const { token } = require("../token.json");
const AniList = new anilist(token);

let animeLists = AniList.lists.anime("salixor");
let mangaLists = AniList.lists.manga("salixor");

// Read an anime list with specified status (here, COMPLETED)
animeLists.then((lists) => console.log(lists.filter((list) => list.status === "COMPLETED")));

// Read a manga list with specified status (here, CURRENT)
mangaLists.then((lists) => console.log(lists.filter((list) => list.status === "CURRENT")));

// Display a sample user list entry
animeLists.then((lists) => console.log(lists.filter((list) => list.status === "CURRENT")[0].entries));

// Add an entry to a user's list.
AniList.lists
	.addEntry(108268, {
		status: "CURRENT",
		progress: 2,
		startedAt: {
			year: 2022,
			month: 9,
			day: 20
		}
	})
	.then((data) => console.log(data));

// Update entry on a user's list with a list ID
AniList.lists
	.updateEntry(295799608, {
		status: "DROPPED"
	})
	.then((data) => console.log(data));

// Remove an entry on a user's list with same list ID
AniList.lists.removeEntry(295799608).then((data) => console.log(data));
