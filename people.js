const fetcher = require('./fetcher');
const Fetch = new fetcher();

module.exports = class people {
    constructor(accessKey) { this.accessKey = accessKey; }

    character(id) {
        if (!id) { throw new Error("Person id is not provided"); }
        return Fetch.send(`query ($id: Int) { Character (id: $id) { id name { first last native }
        image { large medium }
        description isFavourite siteUrl
        media { edges { id } } } }`, { id: id }, this.accessKey);
    };

    staff(id) {
        if (!id) { throw new Error("Person id is not provided"); }
        return Fetch.send(`query ($id: Int) { Staff(id: $id) {
            id name { first last native } language
            image { large medium }
            description isFavourite siteUrl
            staffMedia { edges { id } }
            characters { edges { id } } } }`, { id: id }, this.accessKey);
    };
};