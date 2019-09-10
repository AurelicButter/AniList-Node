# How Data is Presented
Upon using a function, the data it returns is given in an object. So within the documentation, seeing a `media.id` for example means that it's grabbing the id key of the object returned.

# Media

## Functions
`Anilist.media.anime(id)` | Anime function. Fetches an anime by its id.<br/>
`Anilist.media.manga(id)` | Manga function. Fetches a manga by its id.<br/>

## General
- `media.id` | The id of the media
- `media.idMAL` | The MAL id of the media
- `media.title` | Media title. Gives four values: romaji, English, native, userPreferred [Requires login for userPreferred]
- `media.type` | Media type
- `media.description` | Media description
- `media.format` | Format of the media (ie: TV, OVA, Novel)
- `media.status` | Current status of the media
- `media.startDate` | Official release date of the media
- `media.endDate` | Official end date of the media
- `media.countryOfOrigin` | The country origin of the media
- `media.genres` | Media genres
- `media.isFavourite` | [Requires login] Checks if media is on the user's favourites list
- `media.isAdult` | Checks if media is for adult audiences (ie: Hentai)
- `media.isLicensed` | Checks if the media is licensed
- `media.coverImage` | Media's cover image on AniList. Gives two values: large and medium
- `media.bannerImage` | Media's banner image on AniList
- `media.tags` | Tags that describes the media. Gives a name and checks if it is a media spoiler for each tag
- `media.averageScore` | A weighted average score of all the user's scores
- `media.meanScore` | Mean score of all the user's scores
- `media.synonyms` | Media's alternative titles
- `media.trends` | Media's daily trend status. An array of objects that gives four values per object: date, trending, popularity, and inProgress
- `media.staff` | An array of staff credited in the media. Gives three values per object: id, name (string given as "first last"), and native (Native form of their name)
- `media.characters` | An array of objects with two values per object: id and name (name is a string given as "first last")
- `media.reviews` | An array of objects. Gives four values per object: id, score, summary, and body (main text of the review)
- `media.popularity` | The number of users with the media on their list
- `media.trending` | The amount of related activity in the past week.
- `media.rankings` | The ranking of the media in a particular time span and format compared to others. Returns one value: id
- `media.relations` | All media that relate to the media. Gives five values: id, idMal, title (All four options), type, and format
- `media.mediaListEntry` | [Requires login] User's media list entry. Gives a value of id. This is required for list edits.
- `media.autoCreateForumThread` | Checks if the media gets a thread automatically for each release
- `media.externalLinks` | An array of external links associated with the media
- `media.updatedAt` | Timestamp of when the page was last updated
- `media.siteUrl` | The media's Anilist page
- `media.modNotes` | Mod notes for the media

## Anime Unique
- `anime.episodes` | Number of episodes
- `anime.season` | Season that the anime started airing
- `anime.duration` | General length of an episode
- `anime.hashtag` | Twitter hashtag associated with the anime
- `anime.trailer` | Returns the trailer URL if the trailer is a Youtube or Dailymotion video. Will default to the object if it's not.
- `anime.studios` | An array of studios that produced the anime. An array of objects with two values per object: id and name.
- `anime.source` | Source type that the media was adapted from
- `anime.nextAiringEpisode` | The media's next episode airing schedule. Returns either null or an object with two values (timeUntilAiring and airingAt)
- `anime.airingSchedule` | The media's airing schedule, ordered by episode number (ie: 1, 2, 3, etc...). Returns two time values per object: airingAt and timeUntilAiring. 
- `anime.streamingEpisodes` | An array of episodes and where it can be streamed. Each episode has four values: title, thumbnail, url, and site

## Manga Unique
- `manga.volumes` | Number of volumes

# People

## Functions
Names must be strings and ids must be numbers.
`Anilist.people.staff(name|id)` | Staff function. Fetches a staff member by their id or name.<br/>
`Anilist.people.character(id)` | Character function. Fetches a character by their id.<br/>

## General
- `people.id` | Person's id
- `people.name` | Person's name. Returns three values: first, last, native
- `people.image` | Person's cover image. Returns two values: large and medium
- `people.descriptions` | Person's description
- `people.isFavourite` | [Requires login] Check if person is favourited
- `people.siteUrl` | Person's AniList page

## Character Unique
- `character.media` | All media that the character is in (Returns id, idMal, title (All four options), and format)

## Staff Unique
- `staff.language` | Staff's language
- `staff.staffMedia` | An array of ids and titles of all media that the staff has been apart of (Up to the first 25 on the list.)
- `staff.characters` | An array of ids and names of all characters that the staff has voiced (Up to the first 25 on the list.)

# Search
- `Anilist.search(type, term, page, amount)` | Searches the database for an anime or manga that resembles the term provided.
    Accepted types: anime, manga, character, staff, studio
    Term: Search input (ie: Occultic;Nine)
    Page: Page number of the search
    Amount: Amount of results on the page
    - `search.pageInfo` | Page object
        - `pageInfo.total` | Total amount of pages in search
        - `pageInfo.currentPage` | Current page of the search
        - `pageInfo.lastPage` | Last page of searched term
        - `pageInfo.hasNextPage` | If the page has a next page or not
        - `pageInfo.perPage` | How many results are on each page
    - `search.media` | Search results (Returns as an array)
        - `media.id` | Media ID
        - `media.title` | Media title (Four sub-values: English, native, romaji, userPreferred) [Anime and manga searches only]
        - `media.name` | Name of item (Three sub-values: first, last, native) [Sub-values for character and staff searches only]

# User
## Functions
Usernames must be strings and ids must be numbers!<br/>
`Anilist.user.all(username|id)` | All user profile function<br/>
`Anilist.user.stats(username|id)` | User stats function<br/>
`Anilist.user.profile(username|id)` | User profile function<br/>

## Profile Unique
- `profile.id` | User's id
- `profile.name` | User's username
- `profile.about` | User's description
- `profile.avatar` | User's avatar. Returns two values: large and medium
- `profile.bannerImage` | User's banner image
- `profile.isFollowing` | [Requires login] Checks if the logged in user is following the user
- `profile.options` | User's options. Returns four values: titleLanguage, displayAdultContent, airingNotifications, profileColor
- `profile.mediaListOptions` | Undocumented. Returns five values: scoreFormat, rowOrder, useLegacyLists, sharedTheme, sharedThemeEnabled
- `profile.unreadNotificationCount` | Amount of unreadNotifications the user has
- `profile.siteUrl` | User's AniList URL
- `profile.donatorTier` | Check if the user is a donator
- `profile.moderatorStatus` | Check if the user is a moderator
- `profile.updatedAt` | Timestamp of the last update of the user

## Stats Unique
- `stats.watchedTime` | Total amount of watch time on the user's anime list
- `stats.chaptersRead` | Total amount of chapters read on the user's manga list
- `stats.activityHistory` | The activity history of the user. Returns three values: date, amount, level
- `stats.animeStatusDistribution` | Undocumented. Returns two values: status and amount
- `stats.mangaStatusDistribution` | Undocumented. Returns two values: status and amount
- `stats.animeScoreDistribution` | Undocumented. Returns two values: score and amount
- `stats.mangaScoreDistribution` | Undocumented. Returns two values: score and amount
- `stats.animeListScores` | Undocumented. Returns two values: meanScore and standardDeviation
- `stats.mangaListScores` | Undocumented. Returns two values: meanScore and standardDeviation
- `stats.favouredGenresOverview` | Undocumented. Returns four values: genre, amount, meanScore, timeWatched
- `stats.favouredGenres` | List of the user's favourite genres. Gives four values per object: genre, amount, meanScore, timeWatched
- `stats.favouredTags` | List of the user's favourite tags. Gives four values per object: tag.name, amount, meanScore, timeWatched
- `stats.favouredActors` | List of the user's favourite actors. Gives three values per object: staff.id, amount, meanScore, timeWatched
- `stats.favouredStaff` | List of the user's favourite staff. Gives three values per object: staff.id, amount, meanScore, timeWatched
- `stats.favouredStudios` | List of the user's favourite studios. Gives three values per object: studio.name, amount, meanScore, timeWatched
- `stats.favouredYears` | List of the user's favourite years. Gives three values per object: year, amount, meanScore
- `stats.favouredFormats` | List of the user's favourite formats. Gives two values per object: format, amount

# Lists
Usernames must be strings and ids must be numbers!<br/>
`Anilist.lists.manga(username|id)` | User manga lists function<br/>
`Anilist.lists.anime(username|id)` | User anime lists function<br/>

- `list.name` | The user's list name
- `list.isCustomList` | Checks if the list is a custom one (not created by default by AniList)
- `list.isSplitCompletedList` | Checks if the list is a split completed list ie. if the user chose to have each completed media format in a separate list (toggled in user's settings)
- `list.status` | The user's list status ("CURRENT", "PLANNING", "COMPLETED", "PAUSED", "DROPPED", "REPEATING")
- `list.entries` | List of entries in this list, containing the media and related information
    - `entry.media` | The media linked to that entry (refer to the `Media` paragraph for all properties)
    - `entry.userId` | The user's id
    - `entry.status` | The user's status ("CURRENT", "PLANNING", "COMPLETED", "PAUSED", "DROPPED", "REPEATING") for that media
    - `entry.score` | The user's score for that media
    - `entry.progress` | The user's progress for that media (episodes for anime, chapters for manga)
    - `entry.progressVolumes` | Only if the media is a mange. The user's volume progress for that manga
    - `entry.repeat` | The amount of times the user rewatched or read the media
    - `entry.priority` | The user's priority for that media
    - `entry.private` | Check if the entry should only be visible to authenticated user
    - `entry.notes` | The user's note about that media
    - `entry.hiddenFromStatusLists` | Check if the entry should be hidden from non-custom lists (ie. default lists)
    - `entry.advancedScores` | The user's advanced scores for that media (Story, Characters, Visuals, Audio, Enjoyment, …)
    - `entry.dates` | The dates related to that entry in ISO 8601 format. Gives four values per object: startedAt, completedAt, updatedAt and createdAt

# Studio
- `Anilist.studio(id)` | Get information on a studio by an id
    - `studio.id` | The studio's id
    - `studio.name` | The studio's name
    - `studio.media` | An array of ids of all of the media the studio has done.
    - `studio.siteUrl` | Site url of the studio on Anilist
    - `studio.isFavourite` | Checks if the studio is favourited [Requires login]
