const fetch = require('node-fetch');

module.exports = class fetcher {
    constructor () { };

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
            if (json.data.Media) { return json.data.Media; }
            else if (json.data.Character) { return json.data.Character; }
            else if (json.data.Staff) { return json.data.Staff; }
            else if (json.data.Page) { return json.data.Page; }
            else if (json.data.Studio) { return json.data.Studio; }
            else if (json.data.User) { 
                if (json.data.User.stats) { return json.data.User.stats; }
                else { return json.data.User; }
            }
            else { return json.data; }
        }
        else { return console.log("New error found. Console log original object for more information"); }
    };
};