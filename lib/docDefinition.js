/**
 * @typedef { Object } MediaTitle
 * @property { String } english - The offical English licensed title
 * @property { String } native - The Japanese title in Japanese
 * @property { String } romaji - The Japanese romanized title
 * @property { String } userPreferred - The title as it would be displayed to the user
 */

/**
 * @typedef { Object } PersonName
 * @property { String } english - The person's first and last name in English
 * @property { String } native - The person's name in Japanese
 * @property { String[] } alternative - Any nicknames or titles the person goes by.
 */

/**
 * @typedef { Object } SearchEntry
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
 * @typedef { Object } StaffEntry
 * @property { Number } id - The person's ID on AniList
 * @property { PersonName } name - The person's name 
 * @property { Object } image - The person's cover image.
 * @property { String } description - The person's description
 * @property { Boolean } isFavourite - [Requires Login] Check if the person is favourited
 * @property { String } siteUrl - The person's AniList page
 * @property { Number } favourites - The number of users that have favourited the person
 * @property { String } language - The staff's language
 * @property { MediaRelation[] } staffMedia - An array of ids and titles of all media that the staff has been apart of. (Up to the first 25 entries)
 * @property { Object[] } characters - An array of ids and the english names of all characters that the staff has voiced. (Up to the first 25 entries)
 */

/**
 * @typedef { Object } CharacterEntry
 * @property { Number } id - The person's ID on AniList
 * @property { PersonName } name - The person's name 
 * @property { Object } image - The person's cover image.
 * @property { String } description - The person's description
 * @property { Boolean } isFavourite - [Requires Login] Check if the person is favourited
 * @property { String } siteUrl - The person's AniList page
 * @property { Number } favourites - The number of users that have favourited the person
 * @property { MediaRelation[] } media - All media that the character is in. (Up to the first 25 entries)
 */

/**
 * @typedef { Object } MediaRelation
 * @property { Number } id - The media's AniList ID
 * @property { MediaTitle } title - The media's titles
 * @property { String } type - Tells what type of media it is. Returns either ANIME or MANGA
 */

/**
 * @typedef { Object } PersonRelation
 * @property { Number } id - The person's AniList ID
 * @property { String } name.english - The person's name in English
 */

/**
 * @typedef { Object } StudioEntry
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
 * @property { Number } airingAt - The timestamp that the episode is airing at
 * @property { Number } timeUntilAiring - The amount of seconds until the episode airs
 * @property { Number } episode - The episode number to air.
 */

/**
 * @typedef { Object } AnimeEntry
 * @property { AiringEntry[] } airingSchedule - The media's airing schedule, ordered by episode number (ie: 1, 2, 3, etc...).
 * @property { Boolean } autoCreateForumThread - Checks if the media gets a thread automatically with each release
 * @property { Number } averageScore - A weighted average score of the media.
 * @property { String } bannerImage - The media's banner image
 * @property { Object[] } characters - An array of characters
 * @property { Number } characters.id - The character's AniList ID
 * @property { String } characters.name.english - The character's name in English.
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
 * @property { String } siteUrl - The media's Anilist page
 * @property { String } source - Source type that the media was adapted from
 * @property { Object[] } staff - An array of credited staff
 * @property { Number } staff.id - The staff's AniList ID
 * @property { String } staff.name.english - The staff's name in English.
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
 * @property { Boolean } autoCreateForumThread - Checks if the media gets a thread automatically with each release
 * @property { Number } averageScore - A weighted average score of the media.
 * @property { String } bannerImage - The media's banner image
 * @property { Number } chapters - Number of chapters
 * @property { Object[] } characters - An array of characters
 * @property { Number } characters.id - The character's AniList ID
 * @property { String } characters.name.english - The character's name in English.
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
 * @property { String } siteUrl - The media's Anilist page
 * @property { Object[] } staff - An array of credited staff
 * @property { Number } staff.id - The staff's AniList ID
 * @property { String } staff.name.english - The staff's name in English.
 * @property { Date } startDate - Official release date of the media
 * @property { Object } stats - Statistics on the media
 * @property { Object[] } stats.scoreDistribution - An array of how the users have rated the media. Each object contains a score and amount.
 * @property { Object[] } stats.statusDistribution - An array of the users status with the show. Each object contains a status and amount.
 * @property { String } status - The current status of the media
 * @property { String[] } synonyms - The media's alternative titles
 * @property { Object[] } tags - Tags that describes the media
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
 * @property { Number } id - The user's ID
 * @property { String } name - The user's name
 */

/**
 * @typedef { Object } UserProfile
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
 * @property { Boolean } options.airingNotifications - Check if the user recieves notification about airing episodes
 * @property { String } options.profileColor - The highlight colour that the user uses.
 * @property { Object } mediaListOptions - A user's media list settings
 * @property { String } mediaListOptions.scoreFormat - The scoring format the user uses.
 * @property { String } mediaListOptions.rowOrder - The default order list rows should be displayed in.
 * @property { Object } mediaListOptions.animeList - Settings pertaining to the user's anime list.
 * @property { String[] } mediaListOptions.animeList.sectionOrder - The order each list should be displayed in.
 * @property { Boolean } mediaListOptions.animeList.splitCompletedSectionByFormat - Check if completed sections should be separate by format.
 * @property { String[] } mediaListOptions.animeList.customLists - The names of the user's custom lists
 * @property { String[] } mediaListOptions.animeList.advancedScoring - The names of the user's advanced scoring sections
 * @property { Boolean } mediaListOptions.animeList.advancedScoringEnabled - Check if advanced scoring is enabled for the user's lists
 * @property { Object } mediaListOptions.mangaList - Settings pertaining to the user's manga list. 
 * @property { String[] } mediaListOptions.mangaList.sectionOrder - The order each list should be displayed in.
 * @property { Boolean } mediaListOptions.mangaList.splitCompletedSectionByFormat - Check if completed sections should be separate by format.
 * @property { String[] } mediaListOptions.mangaList.customLists - The names of the user's custom lists
 * @property { String[] } mediaListOptions.mangaList.advancedScoring - The names of the user's advanced scoring sections
 * @property { Boolean } mediaListOptions.mangaList.advancedScoringEnabled - Check if advanced scoring is enabled for the user's lists
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
 * @property { String } moderatorStatus - Check if the user is a moderator.
 * @property { Number } updatedAt - Timestamp of the last update for the profile.
 */

/**
 * @typedef { Object } UserStats
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
 * @property { String } name - The user's list name
 * @property { Boolean } isCustomList - Checks if the list is a custom one (not created by default)
 * @property { Boolean } isSplitCompletedList - Checks if the list is a split completed list. (ie: If the user chose to have each media format in a separate list)
 * @property { String } status - The user's list status. Returns either "CURRENT", "PLANNING", "COMPLETED", "PAUSED", "DROPPED", "REPEATING"
 * @property { ListEntry[] } entries - A list of entries on this list
 */

/**
 * @typedef { Object } ListEntry
 * @property { Object } media - An object containing various media information
 * @property { Number } media.id - The id of the media
 * @property { Number } media.idMAL - The MAL id of the media
 * @property { MediaTitle } media.title - The media's titles
 * @property { String } media.description - The media's description
 * @property { String } media.format - The media's format (ie: TV, OVA, Novel)
 * @property { Object[] } media.tags - Tags relating to the media
 * @property { String } media.tags.name - The name of the tag
 * @property { Boolean } media.tags.isMediaSpoiler - Checks if the tag is a spoiler or not.
 * @property { Number } media.startDate - The official release date
 * @property { Number } media.endDate - The official end date
 * @property { String[] } media.genres - The genres of the media
 * @property { Boolean } media.isFavourite - [Requires Login] Checks if the media is on the user's favourites list
 * @property { Boolean } media.isAdult - Checks if the media is for adult audiences (ie: Hentai)
 * @property { String[] } media.synonyms - The media's alternative titles
 * @property { String } media.siteUrl - The media's AniList page
 * @property { Number } media.duration - General length of an episode (Anime only)
 * @property { Number } media.episodes - Number of episodes (Anime only)
 * @property { Number } media.volumes - Number of volumes (Manga only)
 * @property { Number } media.chapters - Number of chapters (Manga only)
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
 * @property { Number } id - The id of the activity
 * @property { String } status - The status of the update
 * @property { String } type - The activity type
 * @property { Number | null } progress - Progress of the media
 * @property { MediaRelation } media - The target media
 * @property { Number } createdAt - The timestamp of the creation time
 * @property { Number } likeCount - The amount of likes the activity has
 * @property { Object } replies - The replies for the activity
 * @property { Number } replies.id - The id of the reply
 * @property { String } replies.text - The content of the reply
 * @property { Number } likeCount - The amount of likes on the reply
 */

/**
 * @typedef { Object } TextActivity
 * @property { Number } id - The id of the activity
 * @property { Number } userId - The id of the user
 * @property { String } text - The content of the activity
 * @property { String } type - The activity type
 * @property { Number } createdAt - The timestamp of the creation time
 * @property { Number } likeCount - The amount of likes the activity has
 * @property { Object } replies - The replies for the activity
 * @property { Number } replies.id - The id of the reply
 * @property { String } replies.text - The content of the reply
 * @property { Number } likeCount - The amount of likes on the reply
 */

/**
 * @typedef { Object } MessageActivity
 * @property { Number } id - The id of the activity
 * @property { Number } recipientId - The id of the user recieving the message
 * @property { String } message - The content of the activity
 * @property { String } type - The activity type
 * @property { Number } createdAt - The timestamp of the creation time
 * @property { Number } likeCount - The amount of likes the activity has
 * @property { Object } replies - The replies for the activity
 * @property { Number } replies.id - The id of the reply
 * @property { String } replies.text - The content of the reply
 * @property { Number } likeCount - The amount of likes on the reply
 */