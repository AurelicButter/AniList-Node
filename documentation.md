# List of functions
`Anilist.search(type, term, page, amount)` | Search function
`Anilist.studio(id)` | Studio function
`Anilist.media.anime(id)` | Anime function
`Anilist.media.manga(id)` | Manga function
`Anilist.people.staff(id)` | Staff function
`Anilist.people.character(id)` | Character function
`Anilist.user.all(username|id)` | All user profile function
`Anilist.user.stats(username|id)` | User stats function
`Anilist.user.profile(username|id)` | User profile function

# Media
## Functions
- `media.anime(id)` | Fetches an anime by its id
- `media.manga(id)` | Fetches a manga by its id

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
- `media.trends` | Media's daily trend status. An array of objects that gives four values per object: averageScore, popularity, inProgress, episode
- `media.staff` | An array of staff ids credited in the media
- `media.characters` | An array of character ids of characters in the anime
- `media.reviews` | A list of reviews for the media. Gives two values per object: id and summary
- `media.popularity` | The number of users with the media on their list
- `media.trending` | The amount of related activity in the past hour
- `media.rankings` | The ranking of the media in a particular time span and format compared to others. Returns one value: id
- `media.relations` | All media ids that relate to the media
- `media.mediaListEntry` | [Requires login] User's media list entry. Gives a value of id. This is required for list edits.
- `media.autoCreateForumThread` | Checks if the media gets a thread automatically for each release
- `media.externalLinks` | External links associated with the media
- `media.updatedAt` | Timestamp of when the page was last updated
- `media.siteUrl` | The media's Anilist page
- `media.modNotes` | Mod notes for the media

## Anime Unique
- `anime.episodes` | Number of episodes
- `anime.season` | Season that the anime started airing
- `anime.duration` | General length of an episode
- `anime.hashtag` | Twitter hashtag associated with the anime
- `anime.trailer` | The trailer id of the anime 
- `anime.studios` | An array of studio ids that produced the anime
- `anime.source` | Source type that the media was adapted from
- `anime.nextAiringEpisode` | The media's next episode airing schedule. Returns value of id
- `anime.airingSchedule` | The media's entire airing schedule. Returns an array of ids
- `anime.streamingEpisodes` | An array of episodes and where it can be streamed. Each episode has four values: title, thumbnail, url, and site

## Manga Unique
- `manga.volumes` | Number of volumes

# People 
## Functions
- `people.character(id)` | Fetches a character by their id
- `people.staff(id)` | Fetches a staff member by their id

## General
- `people.id` | Person's id
- `people.name` | Person's name. Returns three values: first, last, native
- `people.image` | Person's cover image. Returns two values: large and medium
- `people.descriptions` | Person's description
- `people.isFavourite` | [Requires login] Check if person is favourited
- `people.siteUrl` | Person's AniList page

## Character Unique
- `character.media` | All media that the character is in (Returns ids only)

## Staff Unique
- `staff.language` | Staff's language
- `staff.staffMedia` | An array of ids of all media that the staff has been apart of
- `staff.characters` | An array of ids of all characters that the staff has voiced

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
Quick note: Usernames must be strings and ids must be integers.

- `user.all(username|id)` | Calls a combined query of `user.profile()` and `user.stats()`
- `user.profile(username|id)` | Fetches an AniList user by either their username or id.
- `user.stats(username|id)` | Fetches the stats of an AniList user by either their username or id.

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

# Studio
- `Anilist.studio(id)` | Get information on a studio by an id
    - `studio.id` | The studio's id
    - `studio.name` | The studio's name
    - `studio.media` | An array of ids of all of the media the studio has done.
    - `studio.siteUrl` | Site url of the studio on Anilist
    - `studio.isFavourite` | Checks if the studio is favourited [Requires login]