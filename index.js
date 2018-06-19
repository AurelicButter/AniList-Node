const User = require('./user');
const media = require('./media');
const extra = require('./extras');
const people = require('./people');

module.exports = class AniList {
    constructor () { 
        this.user = new User();
        
        this.media = new media();

        this.extra = new extra();

        this.people = new people();
    };
};