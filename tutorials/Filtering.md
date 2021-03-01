# Filtering Searches

## Getting Started
Filtering is a feature avalible with the search class added in v1.7.0. It allows users to filter their query results to show different entries such as showing animes with light novel sources or mangas that aired before 1981.

Currently (as of 1.7.0) only [AniList.searchEntry.anime]{@link AniList.Search#anime}, [AniList.searchEntry.manga]{@link AniList.Search#manga}, and [AniList.searchEntry.activity]{@link AniList.Search#activity} allow for filtering.

```JavaScript
const anilistnode = require("../lib/index");
const Anilist = new anilistnode();

// Old search method will not filter
Anilist.search("anime", "Occultic;Nine", 1, 10).then((data) => { 
    console.log(data); 
});

// Instead use the new Search class
Anilist.searchEntry.anime("Occultic;Nine", myFilter, 1, 10).then((data) => {
    console.log(data);
});
```

## How to Use

Filters are designed to be an object filled with simple key-value pairs. No filter should have any objects or complex data types within them. But, filters can have one or many different pairs to filter the queries with.

```JavaScript
let myMediaFilter = {
    episodes_greater: 25
};

let myActivtyFilter = {
    hasReplies: true,
    type_not: "MEDIA_LIST",
    userId: 1
};
```

```JavaScript
// Example of a correct filter and use within the method.

let myFilter = {
    isAdult: true,
    source_in: ["ORIGINAL", "LIGHT_NOVEL"]
};

Anilist.searchEntry.anime(null, myFilter).then(data => {
    // Data will return any entry that is adult which has
    // either an original or light novel source for the story.
    console.log(data);
});
```

AniList-Node also validates your filters before sending the request. Filter keys are case-sensitive and values require the correct type. If the filter is build incorrectly, the method will throw an error.
```JavaScript
// The key is mistyped
// This will throw an error message of "Filter key not recognized. Bad key: idMalnot."
let myFilter = {
    idMalnot: 8425 
};

// Likewise, if the key doesn't exist...
// This will throw an error message of "Filter key not recognized. Bad key: myCoolKey."
let myFilter = {
    myCoolKey: 8425 
};

// Value types will also be validated. Here, the type is not correct
// This will throw an error message of "Value true type does not match filter type in key idMal!"
let myFilter = {
    idMal: true
};
```

For finding what keys and possible value types are needed refer to the following:

- Activity Filters: [ActivityFilterTypes]{@link ActivityFilterTypes}
- Media Filters: [MediaFilterTypes]{@link MediaFilterTypes}