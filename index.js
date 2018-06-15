const fetch = require('node-fetch');
const User = require('./user');

var body = new User("Butterstroke").profile(),
url = 'https://graphql.anilist.co',
options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify({ query: body[0], variables: body[1] })
};

fetch(url, options).then(handleResponse).then(handleData).catch(handleError);

function handleResponse(response) {
    return response.json().then(function (json) {
        return response.ok ? json : Promise.reject(json);
    });
}

function handleData(data) {
    console.log(data.data);
}

function handleError(error) {
    console.error(error);
    console.log(error.errors[0].locations)
}