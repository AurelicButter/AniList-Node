/**
 * Build a query header for query/mutation queries with object
 * values.
 * @param {String} queryType - The type of query (ie: query or mutation)
 * @param {String} queryTarget - What query object is it? (SaveMediaListEntry or Media)
 * @param {Object} object - Object of input values to use in the header.
 */
const headerBuilder = function (queryType, queryTarget, object) {
	let query = `${queryType} { ${queryTarget} (`;

	const keys = Object.keys(object);
	const values = Object.values(object);

	keys.forEach((key, value) => {
		if (typeof values[value] == "object") {
			throw new Error("Provided object has a nested value!");
		}

		query += key + ": " + values[value];
		if (value + 1 != keys.length) {
			query += ", ";
		}
	});

	return query + ") {";
};

module.exports = headerBuilder;
