/**
 * @typedef { Object } InitOptions
 * @property { Number } timeout - A number in milliseconds which defines a timeout when making requests
 */

/**
 * @typedef { Object } MediaTitle
 * @enum
 * @property { String } english - The offical English licensed title
 * @property { String } native - The Japanese title in Japanese
 * @property { String } romaji - The Japanese romanized title
 * @property { String } userPreferred - The title as it would be displayed to the user
 */

/**
 * @typedef { Object } PersonName
 * @enum
 * @property { String } english - The person's first and last name in English
 * @property { String } native - The person's name in Japanese
 * @property { String[] } alternative - Any nicknames or titles the person goes by.
 */

/**
 * @typedef { Object } SearchEntry
 * @enum
 * @property { Object } pageInfo - Information about the search result page
 * @property { Number } pageInfo.total - The total amount of pages in the search
 * @property { Number } pageInfo.currentPage - The current page of the search result
 * @property { Number } pageInfo.lastPage - Last page of the searched term
 * @property { Boolean } pageInfo.hasNextPage - Check if there is another page
 * @property { Number } pageInfo.perPage - Result count per page.
 * @property { Object[] } media - Search results
 * @property { Number } media.id - The ID of the media
 * @property { MediaTitle } media.title - The media's title (Used for anime and manga searches only)
 * @property { PersonName } media.name - The media's name (Used for character and staff searches only)
 * @property { String } media.name - The media's name (Used for studio and user searches only)
 */

/**
 * @typedef { Object } ActivityEntry
 * @property { Object } pageInfo - Information about the search result page
 * @property { Number } pageInfo.total - The total amount of pages in the search
 * @property { Number } pageInfo.currentPage - The current page of the search result
 * @property { Number } pageInfo.lastPage - Last page of the searched term
 * @property { Boolean } pageInfo.hasNextPage - Check if there is another page
 * @property { Number } pageInfo.perPage - Result count per page.
 * @property { Object[] } activities - Search results
 * @property { Number } id - The ID of the activity
 * @property { ActivityType } type - The activity type
 * @property { Number } createdAt - The creation timestamp of the activity
 * @property { Number } likeCount - The like count of the activity
 */

/**
 * @typedef { Object } StaffEntry
 * @enum
 * @property { Number } id - The person's ID on AniList
 * @property { PersonName } name - The person's name
 * @property { Object } image - The person's cover image.
 * @property { string } image.large - The large file
 * @property { string } image.medium - The medium file
 * @property { String } description - The person's description
 * @property { Boolean } isFavourite - [Requires Login] Check if the person is favourited
 * @property { String } siteUrl - The person's AniList page
 * @property { Number } favourites - The number of users that have favourited the person
 * @property { String } language - The staff's language
 * @property { MediaRelation[] } staffMedia - An array of ids and titles of all media that the staff has been apart of. (Up to the first 25 entries)
 * @property { PersonRelation[] } characters - An array of ids and the english names of all characters that the staff has voiced. (Up to the first 25 entries)
 */

/**
 * @typedef { Object } CharacterEntry
 * @enum
 * @property { Number } id - The person's ID on AniList
 * @property { PersonName } name - The person's name
 * @property { Object } image - The person's cover image.
 * @property { string } image.large - The large file
 * @property { string } image.medium - The medium file
 * @property { String } description - The person's description
 * @property { Boolean } isFavourite - [Requires Login] Check if the person is favourited
 * @property { String } siteUrl - The person's AniList page
 * @property { Number } favourites - The number of users that have favourited the person
 * @property { MediaRelation[] } media - All media that the character is in. (Up to the first 25 entries)
 */

/**
 * @typedef { Object } MediaRelation
 * @enum
 * @property { Number } id - The media's AniList ID
 * @property { MediaTitle } title - The media's titles
 * @property { String } type - Tells what type of media it is. Returns either ANIME or MANGA
 */

/**
 * @typedef { Object } PersonRelation
 * @enum
 * @property { Number } id - The person's AniList ID
 * @property { String } name - The person's name in English
 */

/**
 * @typedef { Object } StudioEntry
 * @enum
 * @property { Number } id - The studio's ID
 * @property { String } name - The studio's name
 * @property { Boolean } isAnimationStudio - Check if the studio is an animation studio
 * @property { Number } favourites - Number of users who have favourited it.
 * @property { Object[] } media - A list of all the media the studio has done (Up to the first 25 per AniList's limit).
 * @property { Number } media.id - The media's ID
 * @property { MediaTitle } media.title - The media's titles
 * @property { String } siteUrl - The studio's site URL
 * @property { Boolean } isFavourite - [Requires Login] Check if the studio is favourited by the user.
 */

/**
 * @typedef { Object } AiringEntry
 * @enum
 * @property { Number } airingAt - The timestamp that the episode is airing at
 * @property { Number } timeUntilAiring - The amount of seconds until the episode airs
 * @property { Number } episode - The episode number to air.
 */

/**
 * @typedef { Object } AnimeEntry
 * @enum
 * @property { AiringEntry[] } airingSchedule - The media's airing schedule, ordered by episode number (ie: 1, 2, 3, etc...).
 * @property { Boolean } autoCreateForumThread - Checks if the media gets a thread automatically with each release
 * @property { Number } averageScore - A weighted average score of the media.
 * @property { String } bannerImage - The media's banner image
 * @property { PersonRelation[] } characters - An array of characters
 * @property { String } countryOfOrigin - The country origin of the media
 * @property { Object[] } coverImage - The media's cover image
 * @property { String } coverImage.large - The large sized cover image
 * @property { String } coverImage.medium - The medium sized cover image
 * @property { String } coverImage.small - The small sized cover image
 * @property { String } coverImage.color - Average hex colour of the cover image
 * @property { String } description - The medias description
 * @property { Number } duration - General length of an episode
 * @property { Date } endDate - Official end date of the media
 * @property { Number } episodes - Number of episodes
 * @property { String[] } externalLinks - A list of external links associated with the media
 * @property { Number } favourites - Number of users who have favourited it.
 * @property { String } format - The format of the anime. (ie: TV, OVA, etc...)
 * @property { String[] } genres - The media's genres
 * @property { String } hashtag - Twitter hashtag associated with the anime
 * @property { Number } id - The anime's AniList ID
 * @property { Number } idMal - The anime's MyAnimeList ID
 * @property { Boolean } isAdult - Check if the media is for adult audiences (ie: Hentai)
 * @property { Boolean } isFavourite - [Requires Login] Check if the media is favourited
 * @property { Boolean } isLicensed - Check if the media is licensed
 * @property { Number } meanScore - Mean score of the media
 * @property { Object } mediaListEntry - [Requires Login] User's media list entry; required for list edits.
 * @property { Number } mediaListEntry.id - Id of the media on a user's media list
 * @property { String } mediaListEntry.status - Status of the media on the user's media list.
 * @property { String } modNotes - Mod notes for the media
 * @property { AiringEntry[] | null } nextAiringEpisode - The media's next episode airing schedule. Returns either an AiringEntry object or null depending if there is an episode to air.
 * @property { Number } popularity - Number of users with the media on their list
 * @property { Object[] } rankings - Media rankings in a particular category compared to others.
 * @property { Number } rankings.rank - The rank position
 * @property { String } rankings.type - What type of ranking it is. (ie: RATED or POPULAR)
 * @property { String } rankings.context - The category of the ranking.
 * @property { Number } rankings.year - The year for the ranking
 * @property { String } rankings.season - The season of the ranking. (ie: WINTER, SPRING, SUMMER, FALL)
 * @property { MediaRelation[] } recommendations - Recommendations for the media.
 * @property { MediaRelation[] } relations - All media that relate to the media.
 * @property { Object[] } reviews - An array of reviews.
 * @property { Number } reviews.id - The id of the review
 * @property { Number } reviews.score - The review's media score
 * @property { String } reviews.summary - The summary of the review.
 * @property { String } reviews.body - The review content.
 * @property { String } season - Season that the anime started airing
 * @property { Number } seasonYear - The season year that the anime started airing
 * @property { String } siteUrl - The media's AniList page
 * @property { String } source - Source type that the media was adapted from
 * @property { PersonRelation[] } staff - An array of credited staff
 * @property { Date } startDate - Official release date of the media
 * @property { Object } stats - Statistics on the media
 * @property { Object[] } stats.scoreDistribution - An array of how the users have rated the media. Each object contains a score and amount.
 * @property { Object[] } stats.statusDistribution - An array of the users status with the show. Each object contains a status and amount.
 * @property { String } status - The current status of the media
 * @property { Object[] } streamingEpisodes - An ordered array of episodes and where it can be streamed.
 * @property { String } streamingEpisodes.title - The title of the episode
 * @property { String } streamingEpisodes.thumbnail - The thumbnail image for the episode
 * @property { String } streamingEpisodes.url - The URL of the episode
 * @property { String } streamingEpisodes.site - The name of the site where the episode is provided.
 * @property { Object[] } studios - An array of studios that produced the anime.
 * @property { Number } studios.id - The studio's id
 * @property { String } studios.name - The studio's name
 * @property { Boolean } studios.isAnimationStudio - Check if the studio is the animation studio for the anime.
 * @property { String[] } synonyms - The media's alternative titles
 * @property { Object[] } tags - Tags that describes the media
 * @property {Number} tags.id - The ID of the tag
 * @property { String } tags.name - The name of the tag
 * @property { Boolean } tags.isMediaSpoiler - Checks if the tag is a spoiler for the media.
 * @property { MediaTitle } title - The manga's titles
 * @property { String | Object | null } trailer - Returns the trailer URL if the trailer is a Youtube or Dailymotion video. Will return an object if it is a video outside of YouTube and Dailymotion or null if no trailer is found.
 * @property { Number } trending - Number of related activity in the past week.
 * @property { Object[] } trends - An array of the media's daily trend status
 * @property { Number } trends.date - The timestamp of the day the data was recorded
 * @property { Number } trends.trending - Amount of media acitivity for that day
 * @property { Number | null } trends.popularity - Number of users with the media on their list
 * @property { Number | null } trends.inProgress - Number of users watching the media.
 * @property { Number } updatedAt - Timestamp of when the page was last updated
 */

/**
 * @typedef { Object } MangaEntry
 * @enum
 * @property { Boolean } autoCreateForumThread - Checks if the media gets a thread automatically with each release
 * @property { Number } averageScore - A weighted average score of the media.
 * @property { String } bannerImage - The media's banner image
 * @property { Number } chapters - Number of chapters
 * @property { PersonRelation[] } characters - An array of characters
 * @property { String } countryOfOrigin - The country origin of the media
 * @property { Object[] } coverImage - The media's cover image
 * @property { String } coverImage.large - The large sized cover image
 * @property { String } coverImage.medium - The medium sized cover image
 * @property { String } coverImage.small - The small sized cover image
 * @property { String } coverImage.color - Average hex colour of the cover image
 * @property { String } description - The manga's description
 * @property { Date } endDate - Official end date of the media
 * @property { String[] } externalLinks - A list of external links associated with the media
 * @property { Number } favourites - Number of users who have favourited it.
 * @property { String } format - The format of the manga. (ie: Manga, Novel, etc...)
 * @property { String[] } genres - The media's genres
 * @property { Number } id - The manga's AniList ID
 * @property { Number } idMal - The manga's MyAnimeList ID
 * @property { Boolean } isAdult - Check if the media is for adult audiences (ie: Hentai)
 * @property { Boolean } isFavourite - [Requires Login] Check if the media is favourited
 * @property { Boolean } isLicensed - Check if the media is licensed
 * @property { Number } meanScore - Mean score of the media
 * @property { Object } mediaListEntry - [Requires Login] User's media list entry; required for list edits.
 * @property { Number } mediaListEntry.id - Id of the media on a user's media list
 * @property { String } mediaListEntry.status - Status of the media on the user's media list.
 * @property { String } modNotes - Mod notes for the media
 * @property { Number } popularity - Number of users with the media on their list
 * @property { Object[] } rankings - Media rankings in a particular category compared to others.
 * @property { Number } rankings.rank - The rank position
 * @property { String } rankings.type - What type of ranking it is. (ie: RATED or POPULAR)
 * @property { String } rankings.context - The category of the ranking.
 * @property { Number } rankings.year - The year for the ranking
 * @property { String } rankings.season - The season of the ranking. (ie: WINTER, SPRING, SUMMER, FALL)
 * @property { MediaRelation[] } recommendations - Recommendations for the media.
 * @property { MediaRelation[] } relations - All media that relate to the media.
 * @property { Object[] } reviews - An array of reviews.
 * @property { Number } reviews.id - The id of the review
 * @property { Number } reviews.score - The review's media score
 * @property { String } reviews.summary - The summary of the review.
 * @property { String } reviews.body - The review content.
 * @property { String } siteUrl - The media's AniList page
 * @property { PersonRelation[] } staff - An array of credited staff
 * @property { Date } startDate - Official release date of the media
 * @property { Object } stats - Statistics on the media
 * @property { Object[] } stats.scoreDistribution - An array of how the users have rated the media. Each object contains a score and amount.
 * @property { Object[] } stats.statusDistribution - An array of the users status with the show. Each object contains a status and amount.
 * @property { String } status - The current status of the media
 * @property { String[] } synonyms - The media's alternative titles
 * @property { Object[] } tags - Tags that describes the media
 * @property {Number} tags.id - The ID of the tag
 * @property { String } tags.name - The name of the tag
 * @property { Boolean } tags.isMediaSpoiler - Checks if the tag is a spoiler for the media.
 * @property { MediaTitle } title - The manga's titles
 * @property { Number } trending - Number of related activity in the past week.
 * @property { Object[] } trends - An array of the media's daily trend status.
 * @property { Number } trends.date - The timestamp of the day the data was recorded
 * @property { Number } trends.trending - Amount of media acitivity for that day
 * @property { Number | null } trends.popularity - Number of users with the media on their list
 * @property { Number | null } trends.inProgress - Number of users reading the media.
 * @property { Number } updatedAt - Timestamp of when the page was last updated
 * @property { Number } volumes - Number of volumes
 */

/**
 * @typedef { Object } UserRelation
 * @enum
 * @property { Number } id - The user's ID
 * @property { String } name - The user's name
 */

/**
 * @typedef { Object } UserProfile
 * @enum
 * @property { Number } id - The user's ID
 * @property { String } name - The user's username
 * @property { String } about - The user's about section
 * @property { Object } avatar - The user's avatar
 * @property { String } avatar.large - A large version of the avatar
 * @property { String } avatar.medium - A medium version of the avatar
 * @property { String } bannerImage - The user's banner image
 * @property { Boolean } isFollowing - [Requires Login] Check if the authorized user is following this user
 * @property { Boolean } isBlocked - [Requires Login] Check if the authorized user has blocked this user
 * @property { Boolean } isFollower - [Requires Login] Check if the user is following the authorized user
 * @property { String } bans - Record of the user's bans
 * @property { Object } options - The user's options
 * @property { String } options.titleLanguage - The language that the user prefers to see (ie: English, Japanese)
 * @property { Boolean } options.displayAdultContent - Check if the user allows adult content to be displayed
 * @property { Boolean } options.airingNotifications - Check if the user receives notification about airing episodes
 * @property { String } options.profileColor - The highlight colour that the user uses.
 * @property { Number } options.activityMergeTime - Minutes between activity for them to be merged together. 0 is Never, Above 2 weeks (20160 mins) is Always.
 * @property { StaffNameLanguage } options.staffNameLanguage - The language the user wants to see staff and character names in
 * @property { NotificationOptions[] } options.notificationOptions - The user's notification options
 * @property { Object } mediaListOptions - A user's media list settings
 * @property { String } mediaListOptions.scoreFormat - The scoring format the user uses.
 * @property { String } mediaListOptions.rowOrder - The default order list rows should be displayed in.
 * @property { MediaListOptions } mediaListOptions.animeList - Settings pertaining to the user's anime list.
 * @property { MediaListOptions } mediaListOptions.mangaList - Settings pertaining to the user's manga list.
 * @property { Object } favourites - An object containing all of the user's favourited entries
 * @property { MediaRelation[] } favourites.anime - An array of the user's favourite anime
 * @property { MediaRelation[] } favourites.manga - An array of the user's favourite manga
 * @property { PersonRelation[] } favourites.characters - An array of the user's favourite characters
 * @property { PersonRelation[] } favourites.staff - An array of the user's favourite staff
 * @property { Object[] } favourites.studios - An array of the user's favourite studios
 * @property { Number } favourites.studios.id - The id of the studio
 * @property { String } favourites.studios.name - The name of the studio
 * @property { Number } unreadNotificationCount - Number of notifications that aren't read yet
 * @property { String } siteUrl - The user's profile link
 * @property { Number } donatorTier - The donator tier of the user
 * @property { String } donatorBadge - Custom donation badge text
 * @property { ModRole[] } moderatorRoles - Check if the user is a moderator.
 * @property { Number } updatedAt - Timestamp of the last update for the profile.
 */

/**
 * @typedef { Object } UserStats
 * @enum
 * @property { Object } anime - The user's statistics with anime
 * @property { Number } anime.meanScore - The mean score of all entries
 * @property { Number } anime.standardDeviation - The standard deviation of all scores with all entries
 * @property { Number } anime.count - Total amount of entries
 * @property { Number } anime.minutesWatched - Total amount of minutes the user has seen
 * @property { Number } anime.episodesWatched - Total amount of episodes the user watched.
 * @property { Object[] } anime.statuses - Undocumented
 * @property { Number } anime.statuses.count - Number of entries
 * @property { Number } anime.statuses.meanScore - The mean score of all entries
 * @property { Number } anime.statuses.watchedTime - The total watched time
 * @property { String } anime.statuses.status - The status of the entries
 * @property { Object[] } anime.formats - Undocumented
 * @property { Number } anime.formats.count - Number of entries
 * @property { Number } anime.formats.meanScore - The mean score of all entries
 * @property { Number } anime.formats.watchedTime - The total watched time
 * @property { String } anime.formats.format - The format of the entries
 * @property { Object[] } anime.lengths - Undocumented
 * @property { Number } anime.lengths.count - Number of entries
 * @property { Number } anime.lengths.meanScore - The mean score of all entries
 * @property { Number } anime.lengths.watchedTime - The total watched time
 * @property { String } anime.lengths.length - The length of the entries.
 * @property { Object[] } anime.releaseYears - Undocumented
 * @property { Number } anime.releaseYears.count - Number of entries
 * @property { Number } anime.releaseYears.meanScore - The mean score of all entries
 * @property { Number } anime.releaseYears.watchedTime - The total watched time
 * @property { String } anime.releaseYears.releaseYear - The release year of the entries.
 * @property { Object[] } anime.startYears - Undocumented
 * @property { Number } anime.startYears.count - Number of entries
 * @property { Number } anime.startYears.meanScore - The mean score of all entries
 * @property { Number } anime.startYears.watchedTime - The total watched time
 * @property { String } anime.startYears.startYear - The start year of the entries.
 * @property { Object[] } anime.genres - Undocumented
 * @property { Number } anime.genres.count - Number of entries
 * @property { Number } anime.genres.meanScore - The mean score of all entries
 * @property { Number } anime.genres.watchedTime - The total watched time
 * @property { String } anime.genres.genre - The genre of the entries.
 * @property { Object[] } anime.tags - Undocumented
 * @property { Number } anime.tags.count - Number of entries
 * @property { Number } anime.tags.meanScore - The mean score of all entries
 * @property { Number } anime.tags.watchedTime - The total watched time
 * @property { Object } anime.tags.tag - The tag of the entries.
 * @property { Number } anime.tags.tag.id - The id of the tag
 * @property { String } anime.tags.tag.name - The name of the tag.
 * @property { Object[] } anime.countries - Undocumented
 * @property { Number } anime.countries.count - Number of entries
 * @property { Number } anime.countries.meanScore - The mean score of all entries
 * @property { Number } anime.countries.watchedTime - The total watched time
 * @property { String } anime.countries.country - The country of origin of the entries.
 * @property { Object[] } anime.voiceActors - Undocumented
 * @property { Number } anime.voiceActors.count - Number of entries
 * @property { Number } anime.voiceActors.meanScore - The mean score of all entries
 * @property { Number } anime.voiceActors.watchedTime - The total watched time
 * @property { PersonRelation } anime.voiceActors.voiceActor - The VA of the entries.
 * @property { Object[] } anime.staff - Undocumented
 * @property { Number } anime.staff.count - Number of entries
 * @property { Number } anime.staff.meanScore - The mean score of all entries
 * @property { Number } anime.staff.watchedTime - The total watched time
 * @property { PersonRelation } anime.staff.staff - The staff of the entries.
 * @property { Object[] } anime.studios - Undocumented
 * @property { Number } anime.studios.count - Number of entries
 * @property { Number } anime.studios.meanScore - The mean score of all entries
 * @property { Number } anime.studios.watchedTime - The total watched time
 * @property { Object } anime.studios.studio - The studio of the entries.
 * @property { Number } anime.studios.studio.id - The ID of the studio
 * @property { String } anime.studios.studio.name - The name of the studio.
 * @property { Object } manga - The user's statistics with manga
 * @property { Number } manga.meanScore - The mean score of all entries
 * @property { Number } manga.standardDeviation - The standard deviation of all scores with all entries
 * @property { Number } manga.count - Total amount of entries
 * @property { Number } manga.chaptersRead - Total amount of chapters read
 * @property { Number } manga.volumesRead - Total amount of volumes read.
 * @property { Object[] } manga.statuses - Undocumented
 * @property { Number } manga.statuses.count - Number of entries
 * @property { Number } manga.statuses.meanScore - The mean score of all entries
 * @property { Number } manga.statuses.chaptersRead - The total chapters read
 * @property { String } manga.statuses.status - The status of the entries
 * @property { Object[] } manga.formats - Undocumented
 * @property { Number } manga.formats.count - Number of entries
 * @property { Number } manga.formats.meanScore - The mean score of all entries
 * @property { Number } manga.formats.chaptersRead - The total chapters read
 * @property { String } manga.formats.format - The format of the entries
 * @property { Object[] } manga.lengths - Undocumented
 * @property { Number } manga.lengths.count - Number of entries
 * @property { Number } manga.lengths.meanScore - The mean score of all entries
 * @property { Number } manga.lengths.chaptersRead - The total chapters read
 * @property { String } manga.lengths.length - The length of the entries.
 * @property { Object[] } manga.releaseYears - Undocumented
 * @property { Number } manga.releaseYears.count - Number of entries
 * @property { Number } manga.releaseYears.meanScore - The mean score of all entries
 * @property { Number } manga.releaseYears.chaptersRead - The total chapters read
 * @property { String } manga.releaseYears.releaseYear - The release year of the entries.
 * @property { Object[] } manga.startYears - Undocumented
 * @property { Number } manga.startYears.count - Number of entries
 * @property { Number } manga.startYears.meanScore - The mean score of all entries
 * @property { Number } manga.startYears.chaptersRead - The total chapters read
 * @property { String } manga.startYears.startYear - The start year of the entries.
 * @property { Object[] } manga.genres - Undocumented
 * @property { Number } manga.genres.count - Number of entries
 * @property { Number } manga.genres.meanScore - The mean score of all entries
 * @property { Number } manga.genres.chaptersRead - The total chapters read
 * @property { String } manga.genres.genre - The genre of the entries.
 * @property { Object[] } manga.tags - Undocumented
 * @property { Number } manga.tags.count - Number of entries
 * @property { Number } manga.tags.meanScore - The mean score of all entries
 * @property { Number } manga.tags.chaptersRead - The total chapters read
 * @property { Object } manga.tags.tag - The tag of the entries.
 * @property { Number } manga.tags.tag.id - The id of the tag
 * @property { String } manga.tags.tag.name - The name of the tag.
 * @property { Object[] } manga.countries - Undocumented
 * @property { Number } manga.countries.count - Number of entries
 * @property { Number } manga.countries.meanScore - The mean score of all entries
 * @property { Number } manga.countries.chaptersRead - The total chapters read
 * @property { String } manga.countries.country - The country of origin of the entries.
 * @property { Object[] } manga.staff - Undocumented
 * @property { Number } manga.staff.count - Number of entries
 * @property { Number } manga.staff.meanScore - The mean score of all entries
 * @property { Number } manga.staff.chaptersRead - The total chapters read
 * @property { PersonRelation } manga.staff.staff - The staff of the entries.
 */

/**
 * @typedef { Object } UserList
 * @enum
 * @property { String } name - The user's list name
 * @property { Boolean } isCustomList - Checks if the list is a custom one (not created by default)
 * @property { Boolean } isSplitCompletedList - Checks if the list is a split completed list. (ie: If the user chose to have each media format in a separate list)
 * @property { EntryStatus } status - The user's list status. Returns either "CURRENT", "PLANNING", "COMPLETED", "PAUSED", "DROPPED", "REPEATING"
 * @property { ListEntry[] } entries - A list of entries on this list
 */

/**
 * @typedef { Object } ListEntry
 * @enum
 * @property { Object } media - An object containing various media information
 * @property { Number } media.id - The id of the media
 * @property { Number } media.idMAL - The MAL id of the media
 * @property { MediaTitle } media.title - The media's titles
 * @property { String } media.description - The media's description
 * @property { String } media.format - The media's format (ie: TV, OVA, Novel)
 * @property { Object[] } media.tags - Tags relating to the media
 * @property { String } media.tags.name - The name of the tag
 * @property { Boolean } media.tags.isMediaSpoiler - Checks if the tag is a spoiler or not.
 * @property {Object} media.startDate  - Starting date
 * @property {Number} media.startDate.year
 * @property {Number} media.startDate.month
 * @property {Number} media.startDate.day
 * @property {Object} media.endDate  - The official end date
 * @property {Number} media.endDate.year
 * @property {Number} media.endDate.month
 * @property {Number} media.endDate.day
 * @property { String[] } media.genres - The genres of the media
 * @property { Boolean } media.isFavourite - [Requires Login] Checks if the media is on the user's favourites list
 * @property { Boolean } media.isAdult - Checks if the media is for adult audiences (ie: Hentai)
 * @property { String[] } media.synonyms - The media's alternative titles
 * @property { String } media.siteUrl - The media's AniList page
 * @property { Number } media.duration - General length of an episode (Anime only)
 * @property { Number } media.episodes - Number of episodes (Anime only)
 * @property { Number } media.volumes - Number of volumes (Manga only)
 * @property { Number } media.chapters - Number of chapters (Manga only)
 * @property { Number } id - The AniList list ID for the entry
 * @property { String } status - The user's status ("CURRENT", "PLANNING", "COMPLETED", "PAUSED", "DROPPED", "REPEATING") for that media
 * @property { Number } score - The user's score for the entry
 * @property { Number } progress - The user's progress for that entry. (Episode count for anime, chapter count for manga)
 * @property { Number } progressVolumes - The user's volume progress for that media (Manga only)
 * @property { Number } repeat - The amount of times the user rewatched or read the media
 * @property { Number } priority - The user's priority status for that media
 * @property { Boolean } private - [Requires Login] Check if the entry should only be visible to the authenticated user.
 * @property { String } notes - The user's notes
 * @property { Boolean } hiddenFromStatusLists - Checks if the entry should be hidden from non-custom lists
 * @property { Object } advancedScores - The user's advanced scores for that media (Story, Characters, Visuals, Audio, Enjoyment, …)
 * @property { Object } dates - Dates related to that entry in ISO 8601 format
 * @property { String } dates.startedAt - The date the user started the entry
 * @property { String } dates.completedAt - The date the user finished the entry
 * @property { String } dates.updatedAt - The time the entry was last updated
 * @property { String } dates.createdAt - When the entry data was created.
 */

/**
 * @typedef { Object } ListActivity
 * @enum
 * @property { Number } id - The id of the activity
 * @property { UserRelation } user - The user of the activity
 * @property { String } status - The status of the update
 * @property { String } type - The activity type
 * @property { Number | null } progress - Progress of the media
 * @property { MediaRelation } media - The target media
 * @property { Number } createdAt - The timestamp of the creation time
 * @property { Object[] } replies - The replies for the activity
 * @property { Number } replies.id - The id of the reply
 * @property { String } replies.text - The content of the reply
 * @property { Number } replies.likeCount - The amount of likes on the reply
 * @property { Boolean } isLocked - True if the activity cannot receive replies
 * @property { Boolean } isSubscribed - [Requires Login] True if the authorized user is subscribed.
 * @property { Boolean } isLiked - [Requires Login] True if authorized user liked it
 * @property { UserRelation[] } likes - All users who liked the activity
 */

/**
 * @typedef { Object } TextActivity
 * @enum
 * @property { Number } id - The id of the activity
 * @property { UserRelation } user - The user of the activity
 * @property { String } text - The content of the activity
 * @property { String } type - The activity type
 * @property { Number } createdAt - The timestamp of the creation time
 * @property { Object } replies - The replies for the activity
 * @property { Number } replies.id - The id of the reply
 * @property { String } replies.text - The content of the reply
 * @property { Number } replies.likeCount - The amount of likes on the reply
 * @property { Boolean } isLocked - True if the activity cannot receive replies
 * @property { Boolean } isSubscribed - [Requires Login] True if the authorized user is subscribed.
 * @property { Boolean } isLiked - [Requires Login] True if authorized user liked it
 * @property { UserRelation[] } likes - All users who liked the activity
 */

/**
 * @typedef { Object } MessageActivity
 * @enum
 * @property { Number } id - The id of the activity
 * @property { UserRelation } user - The sender of the activity
 * @property { UserRelation } recipient - The user receiving the message
 * @property { String } message - The content of the activity
 * @property { String } type - The activity type
 * @property { Number } createdAt - The timestamp of the creation time
 * @property { Boolean } isPrivate - True if message is private and only viewable to sender and recipients
 * @property { Object } replies - The replies for the activity
 * @property { Number } replies.id - The id of the reply
 * @property { String } replies.text - The content of the reply
 * @property { Number } replies.likeCount - The amount of likes on the reply
 * @property { Boolean } isLocked - True if the activity cannot receive replies
 * @property { Boolean } isSubscribed - [Requires Login] True if the authorized user is subscribed.
 * @property { Boolean } isLiked - [Requires Login] True if authorized user liked it
 * @property { UserRelation[] } likes - All users who liked the activity
 */

/**
 * @typedef {Number} FuzzyDateInt
 * @example
 * 6 Jan 2021 = 20210106
 * April 2016 = 20160400
 * 1969 = 19690000
 * @description 8 digit integer (YYYYMMDD). Unknown dates are represented by 0.
 */

/**
 * @typedef {Number} CountryCode
 * @description ISO 3166-1 alpha-2 country code
 */

/**
 * @typedef MediaFilterTypes
 * @description An enum for filter types for values
 * @enum
 * @readonly
 * @property {Number} id The AniList ID
 * @property {Number} idMal The MAL ID
 * @property {FuzzyDateInt} startDate The start date
 * @property {FuzzyDateInt} endDate The end date
 * @property {MediaSeason} season The season the show aired
 * @property {Number} seasonYear The year of the season
 * @property {MediaType} type The media type
 * @property {MediaFormat} format The format of the media
 * @property {MediaStatus} status Status of the media
 * @property {Number} episodes Number of episodes
 * @property {Number} duration Time for each episode
 * @property {Number} chapters Number of chapters
 * @property {Number} volumes Number of volumes
 * @property {boolean} isAdult True if the media is adult
 * @property {String} genre A genre
 * @property {String} tag A tag
 * @property {Number} minimumTagRank The minimum tag rank
 * @property {String} tagCategory The category of the tag
 * @property {boolean} onList [Requires Login] True if the media is on the user's list
 * @property {String} licensedBy The licensor of the media
 * @property {Number} averageScore The average score of the media
 * @property {Number} popularity The popularity of the media
 * @property {MediaFormat} source The source of the media
 * @property {CountryCode} countryOfOrigin The country code for the country origin
 * @property {String} search The search term to use
 * @property {Number} id_not The id to exclude
 * @property {Number[]} id_in The ids to include
 * @property {Number[]} id_not_in The ids to exclude
 * @property {Number} idMal_not The MAL id to exclude
 * @property {Number[]} idMal_in The MAL ids to include
 * @property {Number[]} idMal_not_in The MAL ids to exclude
 * @property {FuzzyDateInt} startDate_greater Include any media with a start date equal to or past that date
 * @property {FuzzyDateInt} startDate_lesser Include any media with a start date equal to or before that date
 * @property {String} startDate_like Include any media with a start date similar to the provided value.
 * @property {FuzzyDateInt} endDate_greater Include any media with an end date equal to or past that date
 * @property {FuzzyDateInt} endDate_lesser Include any media with an end date equal to or before that date
 * @property {String} endDate_like Include any media with an end date similar to the provided value
 * @property {MediaFormat[]} format_in Include any media with these formats
 * @property {MediaFormat} format_not Exclude any media with this format
 * @property {MediaFormat[]} format_not_in Exclude any media with these formats
 * @property {MediaStatus[]} status_in Include any media with these statuses
 * @property {MediaStatus} status_not Exclude any media with this status
 * @property {MediaStatus[]} status_not_in Exclude any media with these statuses
 * @property {Number} episodes_greater Include any media with an episode count equal to or greater than the value
 * @property {Number} episodes_lesser Include any media with an episode count less than or equal to the value
 * @property {Number} duration_greater Include any media with a duration equal to or greater than the value
 * @property {Number} duration_lesser Include any media with a duration less than or equal to the value
 * @property {Number} chapters_greater Include any media with a chapter count equal to or greater than the value
 * @property {Number} chapters_lesser Include any media with a chapter count less than or equal to the value
 * @property {Number} volumes_greater Include any media with a volume count equal to or greater than the value
 * @property {Number} volumes_lesser Include any media with a volume count less than or equal to the value
 * @property {String[]} genre_in Include any media with the following genres
 * @property {String[]} genre_not_in Exclude any media with the following genres
 * @property {String[]} tag_in Include any media with the following tags
 * @property {String[]} tag_not_in Exclude any media with the following tags
 * @property {String[]} tagCategory_in Include any media with the following tag categories
 * @property {String[]} tagCategory_not_in Exclude any media with the following tag categories
 * @property {String[]} licensedBy_in Include any media licensed by the following licensors
 * @property {Number} averageScore_not Exclude any media with an average score provided
 * @property {Number} averageScore_greater Include any media with an average score equal to or greater than the value
 * @property {Number} averageScore_lesser Include any media with an average score less than or equal to the value
 * @property {Number} popularity_not Exclude any media with a popularity count provided
 * @property {Number} popularity_greater Include any media with a popularity count equal to or greater than the value
 * @property {Number} popularity_lesser Include any media with a popularity count less than or equal to the value
 * @property {MediaSource[]} source_in Include any media with the following sources
 * @property {MediaSort[]} sort Sort the query by the provided MediaSort key. (ie: FAVOURITES will sort the query by the favourites count)
 */

/**
 * @typedef ActivityFilterTypes
 * @description An enum for filter types for values
 * @enum
 * @readonly
 * @property {Number} id The id of the activity
 * @property {Number} userId The userID of the account with the activity
 * @property {Number} messengerId The ID of who sent the message
 * @property {ActivityType} type The type of activity
 * @property {Boolean} isFollowing [Requires Login] Filter users by who is following the authorized user
 * @property {Boolean} hasReplies Filter by which activities have replies.
 * @property {Boolean} hasRepliesOrTypeText Filter by which activities have replies or text
 * @property {Number} createdAt The time at which the activity was created
 * @property {Number} id_not Exclude an activity with the given ID
 * @property {Number[]} id_in Include any activities with the given IDs
 * @property {Number[]} id_not_in Excludes any activities with the given IDs
 * @property {Number} userId_not Exclude any activity with the given userID
 * @property {Number[]} userId_in Includes any activity with the given userIDs
 * @property {Number[]} userId_not_in Exclude any activity with the given userIDs
 * @property {Number} messengerId_not Exclude any activity with the given ID
 * @property {Number[]} messengerId_in Include any activity with the given IDs
 * @property {Number[]} messengerId_not_in Exclude any activity with the given IDs
 * @property {Number} mediaId_not Exclude any activity with the given media ID
 * @property {Number[]} mediaId_in Include any activity with the given media IDs
 * @property {Number[]} mediaId_not_in Exclude any activity with the given media IDs
 * @property {ActivityType} type_not Exclude any activity with the same ActivityType
 * @property {ActivityType[]} type_in Include any activity with the given ActivityTypes
 * @property {ActivityType[]} type_not_in Exclude any activity with the given ActivityTypes
 * @property {Number} createdAt_greater Include any activity created at the given date or more recent.
 * @property {Number} createdAt_lesser Include any activity created at the given date or less recent.
 * @property {ActivitySort[]} sort Sort the query by the parameters given.
 */

/**
 * @typedef RecommendationList
 * @description A list of recommendations for a given media
 * @property {MediaRelation} media The given media
 * @property {RecommendationEntry[]} recommendations The list of recommended medias.
 */

/**
 * @typedef RecommendationEntry
 * @description A recommendation for a given media
 * @property {Number} id ID of the recommendation
 * @property {Number} rating User ratings of the recommendation
 * @property {RecommendationRating} userRating [Requires Login] Rating of the recommendation from the authorized user
 * @property {UserRelation} user The first user to recommend
 * @property {MediaRelation} mediaRecommendation The media being recommended.
 */

/**
 * @typedef SingleRecommendation
 * @description A recommendation for a given media
 * @property {Number} id ID of the recommendation
 * @property {Number} rating User ratings of the recommendation
 * @property {RecommendationRating} userRating [Requires Login] Rating of the recommendation from the authorized user
 * @property {UserRelation} user The first user to recommend
 * @property {MediaRelation} mediaRecommendation The media being recommended.
 * @property {MediaRelation} media The given media
 */

/**
 * @typedef NotificationOption
 * @description A user's notification options
 * @property {NotificationType} type The type of notification
 * @property {Boolean} enabled Enable the notification or disable it
 */

/**
 * @typedef MediaListOptionsInput
 * @description The options input for a user's media lists
 * @property {String[]} sectionOrder The order each list should be displayed in
 * @property {Boolean} splitCompletedSectionByFormat If the completed sections of the list should be separated by format
 * @property {String[]} customLists The names of the user's custom lists
 * @property {String[]} advancedScoring The names of the user's advanced scoring sections
 * @property {Boolean} advancedScoringEnabled If advanced scoring is enabled
 * @property {String} theme list theme
 */

/**
 * @typedef UserOptionsInput
 * @property {String} about - The user's description
 * @property {UserTitleLanguage} titleLanguage - The user's preferred title language
 * @property {Boolean} displayAdultContent - True if the user wants to display adult content
 * @property {Boolean} airingNotifications - True if the user wants airing notifications
 * @property {ScoreFormat} scoreFormat - The user's score format
 * @property {String} rowOrder - The user's default list order
 * @property {String} profileColor - The user's profile highlight color
 * @property {String} donatorBadge - The user's donator badge highlight color
 * @property {NotificationOption[]} notificationOptions - The user's notification options
 * @property {String} timezone - The user's timezone offset format
 * @property {Number} activityMergeTime - The minutes between activity for them to be merged together. 0 is Never, Above 2 weeks (20160 mins) is always.
 * @property {MediaListOptionsInput} animeListOptions - The user's options for anime lists
 * @property {MediaListOptionsInput} mangaListOptions - The user's options for manga lists
 * @property {UserStaffNameLanguage} staffNameLanguage - The user's preferred way to see staff and characters
 */

/**
 * @typedef UserOptions
 * @property {String} about - The user's description
 * @property {String} donatorBadge - The user's donator badge highlight color
 * @property {Object} options - General settings
 * @property {UserTitleLanguage} options.titleLanguage - The user's preferred title language
 * @property {Boolean} options.displayAdultContent - True if the user wants to display adult content
 * @property {Boolean} options.airingNotifications - True if the user wants airing notifications
 * @property {String} options.profileColor - The user's profile highlight color
 * @property {String} options.timezone - The user's timezone offset format
 * @property {Number} options.activityMergeTime - The minutes between activity for them to be merged together. 0 is Never, Above 2 weeks (20160 mins) is always.
 * @property {UserStaffNameLanguage} options.staffNameLanguage - The user's preferred way to see staff and characters
 * @property {NotificationOption[]} options.notificationOptions
 * @property {Object} mediaListOptions - List settings
 * @property {ScoreFormat} mediaListOptions.scoreFormat - The user's score format
 * @property {String} mediaListOptions.rowOrder - The user's default list order
 * @property {MediaListOptions} mediaListOptions.animeListOptions - The user's options for anime lists
 * @property {MediaListOptions} mediaListOptions.mangaListOptions - The user's options for manga lists
 */

/**
 * @typedef MediaListOptions
 * @property {String[]} sectionOrder - The order each list should be displayed in.
 * @property {Boolean} splitCompletedSectionByFormat - Check if completed sections should be separate by format.
 * @property {String[]} customLists - The names of the user's custom lists
 * @property {String[]} advancedScoring - The names of the user's advanced scoring sections
 * @property {Boolean} advancedScoringEnabled - Check if advanced scoring is enabled for the user's lists
 */

/**
 * @typedef ThreadEntry
 * @property {Number} id - The AniList ID of the thread
 * @property {String} title - Title of the thread
 * @property {String} body - Contents of the thread
 * @property {UserRelation} user - Author of the thread
 * @property {Number} replyCommentId - Comment ID of the latest reply
 * @property {Number} viewCount - Number of how many people looked at the thread
 * @property {Boolean} isLocked - True if locked. Users cannot comment on thread
 * @property {Boolean} isSticky - True if sticky. Thread is pinned at the top of the forum
 * @property {Boolean} isSubscribed - [Requires Login] True if authorized user is subscribed to thread
 * @property {UserRelation} replyUser - Latest user to reply to the thread.
 * @property {Boolean} isLiked - [Requires Login] True if the authorized user liked the thread.
 * @property {Number} repliedAt - Timestamp of when the thread was last replied at
 * @property {Number} createdAt - Timestamp of when the thread was created
 * @property {Number} updatedAt - Timestamp of when the thread was last edited
 * @property {UserRelation[]} likes - List of all users who liked the thread
 * @property {Object[]} categories - List of all categories the thread is labeled with
 * @property {Number} categories.id - ID of the forum category
 * @property {String} categories.name - Name of the forum category
 * @property {MediaRelation[]} mediaCategories - List of related media entries for the thread
 */

/**
 * @typedef MediaTag
 * @property {Number} id - The ID of the tag
 * @property {String} name - Name of the tag
 * @property {String} description - What the tag is about
 * @property {String} category - The category that the tag belongs to
 * @property {Boolean} isAdult - True if tag is meant for adult content
 */

/**
 * @typedef ThreadComment
 * @property {Number} id - The ID of the thread comment
 * @property {UserRelation} user - The author of the comment
 * @property {String} comment - The content of the comment
 * @property {Boolean} isLiked - [Requires Login] True if current user liked
 * @property {Number} createdAt - The timestamp it was created at
 * @property {Number} updatedAt - The timestamp it was updated at
 * @property {UserRelation[]} likes - An array of users who liked the post
 * @property {ThreadComment[]} childComments - Comments in reply to this comment
 * @property {Boolean} isLocked - True if users can no longer interact with comment.
 */

/**
 * @typedef UpdateEntryOptions
 * @property {Number} id - The ID of the list entry
 * @property {Number} mediaId - The ID of the media to add
 * @property {EntryStatus} status - The status on the list (ie: WATCHING)
 * @property {Number} score - The score of the media in the user's chosen scoring method
 * @property {Number} scoreRaw - The score in 100 point form
 * @property {Number} progress - The amount of episodes/chapters
 * @property {Number} progressVolumes - Amount of volumes read by the user
 * @property {Number} repeat - Amount of repeats
 * @property {Number} priority - Priority of planning
 * @property {Boolean} private - True if the entry is visible only to the authorized user
 * @property {String} notes - Text notes
 * @property {Boolean} hiddenFromStatusLists - True if entry should be hidden on non-custom lists
 * @property {String[]} customLists - Array of list names that the entry should be displayed on
 * @property {Number[]} advancedScores - Array of advanced scores
 * @property {Object} startedAt - Starting date
 * @property {Number} startedAt.year
 * @property {Number} startedAt.month
 * @property {Number} startedAt.day
 * @property {Object} completedAt - Completion date
 * @property {Number} completedAt.year
 * @property {Number} completedAt.month
 * @property {Number} completedAt.day
 */

/**
 * @typedef UpdatedEntry
 * @property {Number} id - The ID of the list entry
 * @property {Number} mediaId - The ID of the media to add
 * @property {EntryStatus} status - The status on the list (ie: WATCHING)
 * @property {Number} score - The score of the media in the user's chosen scoring method
 * @property {Number} scoreRaw - The score in 100 point form
 * @property {Number} progress - The amount of episodes/chapters
 * @property {Number | null} progressVolumes - Amount of volumes read by the user
 * @property {Number} repeat - Amount of repeats
 * @property {Number} priority - Priority of planning
 * @property {Boolean} private - True if the entry is visible only to the authorized user
 * @property {String | null} notes - Text notes
 * @property {Boolean} hiddenFromStatusLists - True if entry should be hidden on non-custom lists
 * @property {String[] | null} customLists - Array of list names that the entry should be displayed on
 * @property {Object} advancedScores
 * @property {Number} advancedScores.Story
 * @property {Number} advancedScores.Characters
 * @property {Number} advancedScores.Visuals
 * @property {Number} advancedScores.Audio
 * @property {Number} advancedScores.Enjoyment
 * @property {Object} startedAt - Starting date
 * @property {Number} startedAt.year
 * @property {Number} startedAt.month
 * @property {Number} startedAt.day
 * @property {Object} completedAt - Completion date
 * @property {Number} completedAt.year
 * @property {Number} completedAt.month
 * @property {Number} completedAt.day
 */
