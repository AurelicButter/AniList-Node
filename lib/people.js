const Fetch = require('./fetcher');

module.exports = {
    character: function(id) {
        if (!id) { throw new Error("Person id is not provided"); }
        return Fetch.send(`query ($id: Int) { Character (id: $id) { id name { first last native } image { large medium }
        description isFavourite siteUrl media { nodes { id idMal title { romaji english native userPreferred } format } } } }`, { id: id });
    },
    staff: function(id) {
        if (!id) { throw new Error("Person id is not provided"); }
        qStart = (typeof id === "string") ? [{ search: id }, `query ($search: String) { Staff (search: $search) { `] : [{ id: id }, `query ($id: Int) { Staff (id: $id) { `];
        
        return Fetch.send(qStart[1] + `id name { first last native } language image { large medium }
            description isFavourite siteUrl
            staffMedia { nodes { id title { romaji english native userPreferred } } }
            characters { nodes { id name { first last } } } } }`, qStart[0]);
    }
};