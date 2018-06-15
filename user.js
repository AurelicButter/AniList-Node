module.exports = class User {
    constructor(uname, id) {
        this.uname = uname;
        this.id = id;
    };

    profile() {
        var start = this.variables();
        var query = start[1] + this.query("profile") + " } }";
        return [query, start[0]];
    };

    stats() {
        var start = this.variables();
        var query = start[1] + this.query("stats") + " } }";
        return [query, start[0]];
    };

    query(type) {
        if (type === "profile") {
            var info = `id name
            about
            avatar { large medium } bannerImage
            isFollowing
            options { titleLanguage displayAdultContent airingNotifications profileColor }
            mediaListOptions { scoreFormat rowOrder useLegacyLists sharedTheme sharedThemeEnabled }
            unreadNotificationCount
            siteUrl
            donatorTier moderatorStatus
            updatedAt`;
        } else if (type === "stats") {
            var info = `stats {
                watchedTime chaptersRead
                activityHistory { date amount level }
                animeStatusDistribution { status amount }
                mangaStatusDistribution { status amount }
                animeScoreDistribution { score amount }
                mangaScoreDistribution { score amount }
                animeListScores { meanScore standardDeviation }
                mangaListScores { meanScore standardDeviation }
                favouredGenresOverview { genre amount meanScore timeWatched }
                favouredGenres { genre amount meanScore timeWatched }
                favouredTags { amount meanScore timeWatched }
                favouredActors { amount meanScore timeWatched }
                favouredStaff { amount meanScore timeWatched }
                favouredStudios { amount meanScore timeWatched }
                favouredYears { year amount meanScore }
                favouredFormats { format amount }
            }`;
        }
        return info;
    };

    variables() {
        const vari = new Object();
        if (this.uname.length > 1) { 
            vari.name = this.uname; 
            var text = `query ($name: String) { User (name: $name) { `;
        }
        else if (this.id.length > 1) { 
            vari.id = this.id; 
            var text = `query ($id: Int) { User (id: $id) { `;
        }
        return [vari, text];
    };
}