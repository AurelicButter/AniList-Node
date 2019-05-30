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
        } else if (json.data !== null) {
            if (json.data.Media) {
                var keys = ["characters", "staff", "relations", "trends"];
                if (json.data.Media.studios) { keys.push("studios"); }
                if (json.data.Media.airingSchedule) { keys.push("airingSchedule"); }

                if (json.data.Media.reviews.edges.length === 0) { json.data.Media.reviews = null; }
                else { keys.push("reviews"); }

                for (var x = 0; x < keys.length; x++) { json.data.Media[keys[x]] = await this.edgeRemove(json.data.Media[keys[x]].edges); }
                json.data.Media.externalLinks = await this.edgeRemove(json.data.Media.externalLinks);
                json.data.Media.trends = await this.edgeRemove(json.data.Media.trends);

               if (json.data.Media.trailer) {
                   switch (json.data.Media.trailer.site) {
                       case "youtube": json.data.Media.trailer = "https://www.youtube.com/watch?v=" + json.data.Media.trailer.id; break;
                       case "dailymotion": json.data.Media.trailer = "https://www.dailymotion.com/video/" + json.data.Media.trailer.id; break;
                       case undefined: json.data.Media.trailer = null; break;
                       default: json.data.Media.trailer = json.data.Media.trailer; break;
                   }
                }

                return json.data.Media;
            } else if (json.data.Character) {
                json.data.Character.media = await this.edgeRemove(json.data.Character.media.edges);
                return json.data.Character;
            } else if (json.data.Staff) {
                json.data.Staff.staffMedia = await this.edgeRemove(json.data.Staff.staffMedia.edges);
                json.data.Staff.characters = await this.edgeRemove(json.data.Staff.characters.edges);
                if (json.data.Staff.description.length < 1) { json.data.Staff.description = null; }
                return json.data.Staff;
            } else if (json.data.Page) { return json.data.Page; }
            else if (json.data.Studio) {
                json.data.Studio.media = await this.edgeRemove(json.data.Studio.media.edges);
                return json.data.Studio;
            } else if (json.data.User) {
                if (json.data.User.stats) { return json.data.User.stats; }
                else { return json.data.User; }
            }  else if (json.data.MediaListCollection) {
                if (json.data.MediaListCollection.lists) { return json.data.MediaListCollection.lists; }
                else { return json.data.MediaListCollection; }
            } else { return json.data; }
        }
    }
};
