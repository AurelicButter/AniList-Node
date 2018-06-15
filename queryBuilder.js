function queryBuilder(type) {
    switch (type) {
        case "manga":
            var query = `id idMal
                title { romaji english native userPreferred }
                type
                description
                format
                status
                startDate { year month day }
                endDate { year month day }
                volumes
                countryOfOrigin
                isLicensed
                updatedAt
                coverImage { large medium }
                bannerImage
                genres
                synonyms
                averageScore
                meanScore
                popularity
                trending
                tags { id }
                relations { edges { id } }
                characters { edges { id } }
                staff { edges { id } }
                isFavourite
                isAdult
                trends {
                    edges {
                        node {
                            averageScore
                            popularity
                            inProgress
                            episode
                        }
                    }
                }
                externalLinks { id }
                rankings { id }
                mediaListEntry { id }
                reviews { edges { node { id } } }
                siteUrl
                autoCreateForumThread
                modNotes`;
            break;
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