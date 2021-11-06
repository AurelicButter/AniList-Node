module.exports = {
	// Queries for AniList.User
	UserProfileQuery: `id name about avatar { large medium } bannerImage isFollowing isFollower isBlocked 
        bans 
        options { 
            titleLanguage displayAdultContent airingNotifications profileColor 
            activityMergeTime staffNameLanguage notificationOptions { type enabled } 
        }
        mediaListOptions { scoreFormat rowOrder 
            animeList { sectionOrder splitCompletedSectionByFormat customLists advancedScoring advancedScoringEnabled }
            mangaList { sectionOrder splitCompletedSectionByFormat customLists advancedScoring advancedScoringEnabled } } 
        favourites {
            anime { nodes { id title { romaji english native userPreferred } type } }
            manga { nodes { id title { romaji english native userPreferred } type } }
            characters { nodes { id name { english: full } } }
            staff { nodes { id name { english: full } } }
            studios { nodes { id name } } }
        unreadNotificationCount siteUrl donatorTier donatorBadge moderatorRoles updatedAt`,
	UserStatsQuery: `statistics { anime {
            meanScore standardDeviation count minutesWatched episodesWatched
            statuses { count meanScore minutesWatched status }
            formats { count meanScore minutesWatched format }
            lengths { count meanScore minutesWatched length }
            releaseYears { count meanScore minutesWatched releaseYear }
            startYears { count meanScore minutesWatched startYear }
            genres { count meanScore minutesWatched genre }
            tags { count meanScore minutesWatched tag { id name } }
            countries { count meanScore minutesWatched country }
            voiceActors { count meanScore minutesWatched voiceActor { id name { english: full } } }
            staff { count meanScore minutesWatched staff { id name { english: full } } }
            studios { count meanScore minutesWatched studio { id name } } }
        manga {
            meanScore standardDeviation count chaptersRead volumesRead
            statuses { count meanScore chaptersRead status }
            formats { count meanScore chaptersRead format }
            lengths { count meanScore chaptersRead length }
            releaseYears { count meanScore chaptersRead releaseYear }
            startYears { count meanScore chaptersRead startYear }
            genres { count meanScore chaptersRead genre }
            tags { count meanScore chaptersRead tag { id name } }
            countries { count meanScore chaptersRead country }
            staff { count meanScore chaptersRead staff { id name { english: full } } } } }`,
	UserUpdateQuery: `mutation (
        $about: String, $titleLanguage: UserTitleLanguage, $displayAdultContent: Boolean,
        $airingNotifications: Boolean, $scoreFormat: ScoreFormat, $rowOrder: String,
        $profileColor: String, $donatorBadge: String, $notificationOptions: [NotificationOptionInput],
        $timezone: String, $activityMergeTime: Int, $animeListOptions: MediaListOptionsInput,
        $mangaListOptions: MediaListOptionsInput, $staffNameLanguage: UserStaffNameLanguage
        ) {
        UpdateUser(
            about: $about, titleLanguage: $titleLanguage, displayAdultContent: $displayAdultContent,
            airingNotifications: $airingNotifications, scoreFormat: $scoreFormat, rowOrder: $rowOrder,
            profileColor: $profileColor, donatorBadge: $donatorBadge, notificationOptions: $notificationOptions,
            timezone: $timezone, activityMergeTime: $activityMergeTime, animeListOptions: $animeListOptions,
            mangaListOptions: $mangaListOptions, staffNameLanguage: $staffNameLanguage
        ) {
            about 
            options { 
                titleLanguage displayAdultContent airingNotifications profileColor 
                timezone activityMergeTime staffNameLanguage notificationOptions { type enabled } 
            }
            mediaListOptions { scoreFormat rowOrder 
                animeList { sectionOrder splitCompletedSectionByFormat customLists advancedScoring advancedScoringEnabled }
                mangaList { sectionOrder splitCompletedSectionByFormat customLists advancedScoring advancedScoringEnabled } }
            donatorBadge
        }
    }`,
	TextActivityQuery: `id user { id name } type text createdAt replies { id text likeCount }
        isLocked isSubscribed isLiked likes { id name }`,
	MessageActivityQuery: `id recipient { id name } type message createdAt replies { id text likeCount }
        user:messenger { id name } isPrivate isLocked isSubscribed isLiked likes { id name }`,
	ListActivityQuery: ` id user { id name } status type progress
        media { id title { romaji english native userPreferred } type }
        createdAt isLocked isSubscribed isLiked replies { id text likeCount } likes { id name }`
};
