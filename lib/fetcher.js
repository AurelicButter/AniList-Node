const fetch = require('node-fetch');

function edgeRemove(obj) { // Move data up levels in the object for better use
    var list = [];
    for (var x = 0; x < obj.length; x++) {
        if (obj[x].name) {
            if (obj[x].name.native) { obj[x].native = obj[x].name.native; }
            if (obj[x].name.last === null) { obj[x].name = obj[x].name.first; }
            else if (obj[x].name.first === null) { obj[x].name = obj[x].name.last; }
            else { obj[x].name = obj[x].name.first + " " + obj[x].name.last; }
        }

        if (obj[x].node) { list.push(obj[x].node); }
        else if (obj[x].id && obj[x].length === 1) { list.push(obj[x].id); }
        else if (obj[x].url) { list.push(obj[x].url); }
        else { list.push(obj[x]); }
    }; 
    return list;
}

function convertFuzzyDate(fuzzyDate) {
    if (Object.values(fuzzyDate).some(d => d === null)) return null;
    return new Date(fuzzyDate.year, fuzzyDate.month - 1, fuzzyDate.day);
}

async function formatMedia(media) { //Formats the media data to read better.
    media.reviews = (media.reviews.nodes.length === 0) ? null : media.reviews.nodes;

    media.externalLinks = await edgeRemove(media.externalLinks);
    media.characters = await edgeRemove(media.characters.nodes);
    media.staff = await edgeRemove(media.staff.nodes);

    if (media.airingSchedule) { media.airingSchedule = media.airingSchedule.nodes; }
    if (media.studios) { media.studios = media.studios.nodes; }
    media.relations = media.relations.nodes;
    media.trends = media.trends.nodes;

    if (media.trailer) {
        switch (media.trailer.site) {
            case "youtube": media.trailer = "https://www.youtube.com/watch?v=" + media.trailer.id; break;
            case "dailymotion": media.trailer = "https://www.dailymotion.com/video/" + media.trailer.id; break;
            case undefined: media.trailer = null; break;
             default: media.trailer = media.trailer; break;
        } 
    }
    return media;
}

module.exports = {
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

        if (json.errors && json.errors[0].status === 404) { return { data: null, status: 404, message: "Search item by that term is not found." } }
        if (json.data === null) { return { data: null, status: json.errors[0].status, message: json.errors[0].message } } 
        
        if (json.data.Media) {
            json.data.Media = await formatMedia(json.data.Media);
            return json.data.Media;
        } else if (json.data.Character) {
            json.data.Character.media = json.data.Character.media.nodes;
            return json.data.Character;
        } else if (json.data.Staff) {
            json.data.Staff.staffMedia = await edgeRemove(json.data.Staff.staffMedia.nodes);
            json.data.Staff.characters = await edgeRemove(json.data.Staff.characters.nodes);
            if (json.data.Staff.description.length < 1) { json.data.Staff.description = null; }
            return json.data.Staff;
        } else if (json.data.Page) {
            return json.data.Page;
        }
        else if (json.data.Studio) {
            json.data.Studio.media = await edgeRemove(json.data.Studio.media.edges);
            return json.data.Studio;
        } else if (json.data.User) {
            if (json.data.User.stats) { return json.data.User.stats; }
            return json.data.User;
        } else if (json.data.MediaListCollection) {
            json.data.MediaListCollection.lists.forEach(list => {
                list.entries.map(entry => {
                    formatMedia(entry.media);
                    entry.dates = {
                        'startedAt': convertFuzzyDate(entry.startedAt),
                        'completedAt': convertFuzzyDate(entry.completedAt),
                        'updatedAt': new Date(entry.updatedAt * 1000),
                        'createdAt': (entry.createdAt === 0) ? null : new Date(entry.createdAt * 1000)
                    };
                    ['startedAt', 'completedAt', 'updatedAt', 'createdAt'].forEach(e => delete entry[e]);
                });
            });
            return json.data.MediaListCollection.lists;
        }

        return json.data; //If nothing matches, return collected data,
    }
};
