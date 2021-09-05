module.exports = {
	// Queries for AniList.User
	profileQuery: `id name about avatar { large medium } bannerImage isFollowing isFollower isBlocked 
        bans options { titleLanguage displayAdultContent airingNotifications profileColor }
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
	statsQuery: `statistics { anime {
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
            staff { count meanScore chaptersRead staff { id name { english: full } } } } }`
};
