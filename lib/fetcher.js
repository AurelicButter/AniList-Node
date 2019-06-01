const fetch = require('node-fetch');

module.exports = {
    edgeRemove: function(obj) {
        var list = [];
        for (var x = 0; x < obj.length; x++) {
            if (obj[x].node) { list.push(obj[x].node); }
            else if (obj[x].id) { list.push(obj[x].id); }
            else if (obj[x].url) { list.push(obj[x].url); }
            else { list.push(obj[x]); }
        }; return list;
    },
    convertFuzzyDate: function(fuzzyDate) {
        if (Object.values(fuzzyDate).some(d => d === null)) return null;
        return new Date(fuzzyDate.year, fuzzyDate.month - 1, fuzzyDate.day);
    },
    formatMedia: async function(media) {
        var keys = ["characters", "staff", "relations", "trends"];
        if (media.studios) { keys.push("studios"); }
        if (media.airingSchedule) { keys.push("airingSchedule"); }

        if (media.reviews.edges.length === 0) { media.reviews = null; }
        else { keys.push("reviews"); }

        for (var x = 0; x < keys.length; x++) { media[keys[x]] = await this.edgeRemove(media[keys[x]].edges); }
        media.externalLinks = await this.edgeRemove(media.externalLinks);
        media.trends = await this.edgeRemove(media.trends);

        if (media.trailer) {
            switch (media.trailer.site) {
                case "youtube": media.trailer = "https://www.youtube.com/watch?v=" + media.trailer.id; break;
                case "dailymotion": media.trailer = "https://www.dailymotion.com/video/" + media.trailer.id; break;
                case undefined: media.trailer = null; break;
                default: media.trailer = media.trailer; break;
            }
        }
    },
    send: async function(query, variables) {
        if (!query || !variables) { throw new Error("Query or variables are not given!"); }
        var options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ query: query, variables: variables })
        };
        if (this.key) { options.headers.Authorization = 'Bearer ' + this.key; }
        var response = await fetch('https://graphql.anilist.co', options);
        var json = await response.json();

        if (json.data === null) {
            if (json.errors[0].status === 404) { return { data: null, status: 404, message: "Search item by that term is not found." } }
            else { return { data: null, status: json.errors[0].status, message: json.errors[0].message } }
        } else {
            if (json.data.Media) {
                this.formatMedia(json.data.Media);
                return json.data.Media;
            } else if (json.data.Character) {
                json.data.Character.media = await this.edgeRemove(json.data.Character.media.edges);
                return json.data.Character;
            } else if (json.data.Staff) {
                json.data.Staff.staffMedia = await this.edgeRemove(json.data.Staff.staffMedia.edges);
                json.data.Staff.characters = await this.edgeRemove(json.data.Staff.characters.edges);
                if (json.data.Staff.description.length < 1) { json.data.Staff.description = null; }
                return json.data.Staff;
            } else if (json.data.Page) {
                return json.data.Page;
            }
            else if (json.data.Studio) {
                json.data.Studio.media = await this.edgeRemove(json.data.Studio.media.edges);
                return json.data.Studio;
            } else if (json.data.User) {
                if (json.data.User.stats) { return json.data.User.stats; }
                else { return json.data.User; }
            } else if (json.data.MediaListCollection) {
                json.data.MediaListCollection.lists.forEach(list => {
                    list.entries.map(entry => {
                        this.formatMedia(entry.media);
                        entry.dates = {
                            'startedAt': this.convertFuzzyDate(entry.startedAt),
                            'completedAt': this.convertFuzzyDate(entry.completedAt),
                            'updatedAt': new Date(entry.updatedAt * 1000),
                            'createdAt': (entry.createdAt === 0) ? null : new Date(entry.createdAt * 1000)
                        };
                        ['startedAt', 'completedAt', 'updatedAt', 'createdAt'].forEach(e => delete entry[e]);
                    });
                });
                return json.data.MediaListCollection.lists;
            } else {
                return json.data;
            }
        }
    }
};
