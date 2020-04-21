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
- `media.description` | Media description
- `media.format` | Format of the media (ie: TV, OVA, Novel)
- `media.favourites` | Number of favourites a media has.
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
- `media.staff` | An array of credited staff. Gives two values per object: id and their name (given as "first last")
- `media.characters` | An array of characters with two values per object: id and their name (given as "first last")
- `media.reviews` | An array of objects. Gives four values per object: id, score, summary, and body (main text of the review)
- `media.popularity` | The number of users with the media on their list
- `media.trending` | The amount of related activity in the past week.
- `media.rankings` | The ranking of the media in a particular time span and format compared to others. Returns multiple values of:
    rank, type, context, year, and season.
- `media.relations` | All media that relate to the media. Gives five values: id, idMal, title (All four options), type, and format
- `media.mediaListEntry` | [Requires login] User's media list entry. Gives a value of id and status. This is required for list edits.
- `media.autoCreateForumThread` | Checks if the media gets a thread automatically for each release
- `media.externalLinks` | An array of external links associated with the media
- `media.updatedAt` | Timestamp of when the page was last updated
- `media.siteUrl` | The media's Anilist page
- `media.modNotes` | Mod notes for the media
- `media.recommendations` | An array of recommendations
- `media.recommendations.id` | The ID of the show recommended. 
- `media.recommendations.title` | An object of the show's titles. Four values: romanji, english, native, and userPreferred.
- `media.stats.scoreDistribution` | An array of how the users have rated the media. Each object contains a score and amount.
- `media.stats.statusDistribution` | An array of the users status with the show. Each object contains a status and amount.

## Anime Unique
- `anime.episodes` | Number of episodes
- `anime.season` | Season that the anime started airing
- `anime.seasonYear` | The season year that the anime started airing
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
- `manga.chapters` | Number of chapters

# People

## Functions
Names must be strings and ids must be numbers.
`Anilist.people.staff(name|id)` | Staff function. Fetches a staff member by their id or name.<br/>
`Anilist.people.character(name|id)` | Character function. Fetches a character by their id or name.<br/>

## General
- `people.id` | Person's id
- `people.name` | Person's name. Returns three values: english, native, and alternative (alternatives being nicknames and titles)
- `people.image` | Person's cover image. Returns two values: large and medium
- `people.descriptions` | Person's description
- `people.isFavourite` | [Requires login] Check if person is favourited
- `people.siteUrl` | Person's AniList page
- `people.favourites` | Number of users that have favourited the person.

## Character Unique
- `character.media` | All media that the character is in (Returns id, idMal, title (All four options), and format)

## Staff Unique
- `staff.language` | Staff's language
- `staff.staffMedia` | An array of ids and titles of all media that the staff has been apart of (Up to the first 25 on the list.)
- `staff.characters` | An array of ids and the english names of all characters that the staff has voiced (Up to the first 25 on the list.)

# Search
- `Anilist.search(type, term, page, amount)` | Searches the database for an anime or manga that resembles the term provided.<br>
    Accepted types: anime, manga, character, staff, studio<br>
    Term: Search input (ie: Occultic;Nine)<br>
    Page: Page number of the search, defaults to 1.<br>
    Amount: Amount of results on the page, defaults to 5.
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
`Anilist.user.all(username|id)` | All user profile function, grabs both statistics and profile items.<br/>
`Anilist.user.stats(username|id)` | Grabs all statistics for the given user. Contains no profile unique items.<br/>
`Anilist.user.profile(username|id)` | Grabs all profile unique data. Contains no statistics of the user.<br/>

## Profile Unique
- `profile.id` | User's id
- `profile.name` | User's username
- `profile.about` | User's description
- `profile.avatar` | User's avatar. Returns two values: large and medium
- `profile.bannerImage` | User's banner image
- `profile.isFollowing` | [Requires login] Checks if the logged in user is following the user
- `profile.options` | User's options. Returns four values: titleLanguage, displayAdultContent, airingNotifications, profileColor
- `profile.mediaListOptions` | Undocumented. Returns five values: scoreFormat, rowOrder, useLegacyLists, animeList, mangaList
- `profile.mediaListOptions.animeList` | User's anime list options. Returns five values: sectionOrder, splitCompletedSectionByFormat, customLists, advancedScoring, advancedScoringEnabled.
- `profile.mediaListOptions.mangaList` | User's manga list options. Returns five values: sectionOrder, splitCompletedSectionByFormat, customLists, advancedScoring, advancedScoringEnabled.
- `profile.unreadNotificationCount` | Amount of unreadNotifications the user has
- `profile.siteUrl` | User's AniList URL
- `profile.donatorTier` | Check if the user is a donator
- `profile.moderatorStatus` | Check if the user is a moderator
- `profile.updatedAt` | Timestamp of the last update of the user
- `profile.isFollower` | [Requires login] Checks if the searched user is following the logged in user.
- `profile.isBlocked` | [Requires login] Checks if the logged in user has blocked the searched user.
- `profile.bans` | Record of user's bans.

### User's Favourites
Fetched through `profile.favourites`

- `favourites.anime` | An array of all user's favourite anime. Returns two values: id and title.
- `favourites.manga` | An array of all user's favourite manga. Returns two values: id and title.
- `favourites.characters` | An array of all user's favourite characters. Returns two values: id and name (given "first last")
- `favourites.staff` | An array of all user's favourite staff. Returns two values: id and name (given "first last")
- `favourites.studios` | An array of all user's favourite studios. Returns two values: id and name

### User's Statistics
Fetched through `profile.statistics`. Returns two objects: anime and manga.

- `statistics.[type].meanScore` | Mean score of all entries with the type.
- `statistics.[type].standardDeviation` | The standard deviation of all scores with all entries with the type.
- `statistics.[type].count` | Total amount of entries with the type.

#### Statistics Across Various Fields.
All of these types will return an object with four keys: 

    > count and meanScore are included across all fields
    > watchedTime is included for all anime specific fields.
    > chaptersRead is included for all manga specific fields.
    > one additional key, specified in each description pertaining to the entry.

> Note that any item will only appear in the list if the user has a count of two or more items

- `statistics.[type].statuses` | A list of the user's statistics across various statuses. Unique key: status
- `statistics.[type].formats` | A list of the user's statistics across various formats. Unique key: format
- `statistics.[type].lengths` | A list of the user's statistics across various lengths. Unique key: length
- `statistics.[type].releaseYears` | A list of the user's statistics across various release years. Unique key: releaseYear
- `statistics.[type].startYears` | A list of the user's statistics across years where the user started the entry. Unique key: startYear
- `statistics.[type].genres` | A list of the user's statistics across various genres. Unique key: genre
- `statistics.[type].tags` | A list of the user's statistics across various tags. Unique key: tag (tag returns two values: id and name)
- `statistics.[type].countries` | A list of the user's statistics across various countries. Unique key: country
- `statistics.[type].staff` | A list of the user's statistics across various staff. Unique key: staff (staff returns two values: id and name)

#### Anime Unique
- `statistics.anime.watchedTime` | Total amount of watch time on the user's anime lists.
- `statistics.anime.episodesWatched` | Total amount of episodes watched on the user's anime lists. 
- `statistics.anime.voiceActors` | A list of the user's statistics across various voice actors. Unique key: voiceActor (voiceActor returns two values: id and name)
- `statistics.anime.studios` | A list of the user's statistics across various studios. Unique key: studio (studio returns two values: id and name)

#### Manga Unique
- `statistics.manga.chaptersRead` | Total amount of chapters read on the user's manga lists.
- `statistics.manga.volumesRead` | Total amount of volumes read of the user's manga lists.

# Lists
Usernames must be strings and ids must be numbers!<br/>
`Anilist.lists.manga(username|id)` | User manga lists function<br/>
`Anilist.lists.anime(username|id)` | User anime lists function<br/>

- `list.name` | The user's list name
- `list.isCustomList` | Checks if the list is a custom one (not created by default by AniList)
- `list.isSplitCompletedList` | Checks if the list is a split completed list ie. if the user chose to have each completed media format in a separate list (toggled in user's settings)
- `list.status` | The user's list status ("CURRENT", "PLANNING", "COMPLETED", "PAUSED", "DROPPED", "REPEATING")
- `list.entries` | List of entries in this list
    - `entry.media` | An object containing various media information for the entry.
        - `media.id` | The id of the media
        - `media.idMAL` | The MAL id of the media
        - `media.title` | Media title. Gives four values: romaji, English, native, userPreferred [Requires login for userPreferred]
        - `media.description` | Media description
        - `media.format` | Format of the media (ie: TV, OVA, Novel)
        - `media.tags` | Tags that describes the media. Gives a name and checks if it is a media spoiler for each tag
        - `media.startDate` | Official release date of the media
        - `media.endDate` | Official end date of the media
        - `media.genres` | Media genres
        - `media.isFavourite` | [Requires login] Checks if media is on the user's favourites list
        - `media.isAdult` | Checks if media is for adult audiences (ie: Hentai)
        - `media.synonyms` | Media's alternative titles
        - `media.siteUrl` | The media's Anilist page
        - `media.duration` | Anime only. General length of an episode
        - `media.episodes` | Anime only. Number of episodes
        - `media.volumes` | Manga only. Number of volumes
        - `media.chapters` | Manga only. Number of chapters.
    - `entry.status` | The user's status ("CURRENT", "PLANNING", "COMPLETED", "PAUSED", "DROPPED", "REPEATING") for that media
    - `entry.score` | The user's score for that media
    - `entry.progress` | The user's progress for that media (episodes for anime, chapters for manga)
    - `entry.progressVolumes` | Manga media only. The user's volume progress for that manga
    - `entry.repeat` | The amount of times the user rewatched or read the media
    - `entry.priority` | The user's priority for that media
    - `entry.private` | Check if the entry should only be visible to authenticated user
    - `entry.notes` | The user's note about that media
    - `entry.hiddenFromStatusLists` | Check if the entry should be hidden from non-custom lists (ie. default lists)
    - `entry.advancedScores` | The user's advanced scores for that media (Story, Characters, Visuals, Audio, Enjoyment, …)
    - `entry.dates` | The dates related to that entry in ISO 8601 format. Gives four values per object: startedAt, completedAt, updatedAt and createdAt

# Studio
- `Anilist.studio(id|name)` | Get information on a studio by an id or its name
    - `studio.id` | The studio's id
    - `studio.name` | The studio's name
    - `studio.isAnimationStudio` | Boolean value of if the studio is an animation studio.
    - `studio.favourites` | Number of people who have favourited the studio on AniList.
    - `studio.media` | A list of all the media the studio has done (Up to the first 25 per AniList's limit). Returns two values per object: id and title
    - `studio.siteUrl` | Site url of the studio on Anilist
    - `studio.isFavourite` | Checks if the studio is favourited [Requires login]
