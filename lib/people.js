const Fetch = require('./fetcher');

module.exports = {
    character: function(id) {
        if (!id) { throw new Error("Person id is not provided"); }
        return Fetch.send(`query ($id: Int) { Character (id: $id) { id name { first last native } image { large medium }
        description isFavourite siteUrl media { edges { id } } } }`, { id: id });
    },
    staff: function(id) {
        if (!id) { throw new Error("Person id is not provided"); }
        return Fetch.send(`query ($id: Int) { Staff(id: $id) { id name { first last native } language
            image { large medium } description isFavourite siteUrl
            staffMedia { edges { id } } characters { edges { id } } } }`, { id: id });
    }
};