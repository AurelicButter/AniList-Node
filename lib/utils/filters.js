const filterTypes = require("../types/mediaFilterTypes");

/**
 * Validates the filter object for searching.
 * @private
 * @param {Object} filterObj A key/value paired filter object.
 * @returns Will throw an error if the filter object is bad (ie: Non-existant key or incorrect value type).
 * Returns nothing upon success.
 */
const validateFilters = function(filterObj) {
    const filterKeys = Object.keys(filterObj);
    for (let x = 0; x < filterKeys.length; x++) {
        let myKey = filterKeys[x];
        let myValue = filterObj[myKey];
        let filterType = filterTypes[myKey];

        if (!filterType) { throw new Error(`Filter key not recognized. Bad key: ${myKey}.`); }

        if (myValue instanceof Array) {
            let typeDef = typeof filterType[0];
            myValue.forEach(value => {
                if (typeof value !== typeDef) {
                    throw new Error("Value type does not match filter type!"); 
                }
            });

            continue;
        } 
        
        if (typeof myValue !== filterType) {
            throw new Error("Value type does not match filter type!");
        }        
    }
};

/**
 * Generate a query header with filter options.
 * @private
 * @param {String} searchType The search type to build the query with
 * @param {Object} filterObj A simple key-value pair object for setting filters.
 * @returns {String} Returns the query header if the filter is valid. Else, it will throw an error.
 */
const filterBuilder = function(searchType, filterObj=null) {
    if (filterObj) { validateFilters(filterObj); }

    let baseQuery = `query ($page: Int, $perPage: Int, $search: String) {
        Page (page: $page, perPage: $perPage) { pageInfo { total currentPage lastPage hasNextPage perPage } `;

    if (searchType === "activity") {
        baseQuery += "activities (search: $search";
    }
    if (searchType === "anime") {
        baseQuery += "media (type: ANIME, search: $search";
    }
    if (searchType === "manga") {
        baseQuery += "media (type: MANGA, search: $search";
    }

    if (filterObj) {
        let filterKeys = Object.keys(filterObj);
    
        for (let x = 0; x < filterKeys.length; x++) {
            let filterValue = filterObj[filterKeys[x]];

            if (filterValue instanceof Array) {
                filterValue = `[${filterValue.join(", ")}]`;
            }

            baseQuery += `, ${filterKeys[x]}: ${filterValue}`; 
        }
    }

    return `${baseQuery}) {`;
};

module.exports = filterBuilder;