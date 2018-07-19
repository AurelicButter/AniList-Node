const fetch = require('node-fetch');

module.exports = class fetcher {
    constructor () { };

    edgeRemove(obj) {
        var list = [];
        for (var x = 0; x < obj.length; x++) { 
            if (obj[x].node) { list.push(obj[x].node); }
            else if (obj[x].id) { list.push(obj[x].id); } 
            else if (obj[x].url) { list.push(obj[x].url); } 
            else { list.push(obj[x]); } 
        };
        return list;
    };

    async send(query, variables, auth) {
        if (!query || !variables) { throw new Error("Query or variables are not given!"); }
        var options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ query: query, variables: variables })
        };
        if (auth) { options.headers.Authorization = 'Bearer ' + auth; }
        var response = await fetch('https://graphql.anilist.co', options);
        var json = await response.json();

        if (json.errors) { 
            if (json.errors[0].status === 404) { return { data: null, status: 404, message: "Search item by that term is not found." } }
            else { return { data: null, status: json.errors[0].status, message: json.errors[0].message } }
        } else if (json.data !== null) {
            if (json.data.Media) { 
                json.data.Media.characters = await this.edgeRemove(json.data.Media.characters.edges);
                json.data.Media.staff = await this.edgeRemove(json.data.Media.staff.edges);
                json.data.Media.relations = await this.edgeRemove(json.data.Media.relations.edges);
                json.data.Media.externalLinks = await this.edgeRemove(json.data.Media.externalLinks);
                json.data.Media.trends = await this.edgeRemove(json.data.Media.trends.edges);
                json.data.Media.trends = await this.edgeRemove(json.data.Media.trends);

                if (json.data.Media.reviews.edges.length === 0) { json.data.Media.reviews = null; }
                else { json.data.Media.reviews = await this.edgeRemove(json.data.Media.reviews.edges); }

                if (json.data.Media.trailer) { 
                    if (json.data.Media.trailer.id.length < 1) { json.data.Media.trailer = null; } 
                    else { json.data.Media.trailer = json.data.Media.trailer.id; }
                }
                if (json.data.Media.studios) { json.data.Media.studios = await this.edgeRemove(json.data.Media.studios.edges); }
                if (json.data.Media.airingSchedule) { json.data.Media.airingSchedule = await this.edgeRemove(json.data.Media.airingSchedule.edges); }

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
            } else { return json.data; }
        }
        else { return console.log("New error found. Console log original object for more information"); }
    };
};