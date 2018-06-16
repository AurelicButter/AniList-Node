function queryBuilder(type) {
    switch (type) {
        case "character":
            var query = `id
                name { first last native }
                image { large medium }
                description
                isFavourite
                siteUrl
                media { edges { id } }`;
            break;
        case "staff":
            var query = `id
            name { first last native }
            language
            image { large medium }
            description
            isFavourite
            siteUrl
            staffMedia { edges { id } }
            characters { edges { id } }`;
            break;
        default: 
            var query = "Query type not found. Please try again.";
            break;
    }

    return query;
};

module.exports = queryBuilder;