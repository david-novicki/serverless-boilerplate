/*eslint no-console: ["error", { allow: ["warn", "error", "log"] }] */
'use strict';

module.exports.hello = async (event, context, callback) => {
	context.callbackWaitsForEmptyEventLoop = false;//defaults to true and will result in timeout
	let response = {
		isBase64Encoded: false,
		statusCode: 200,
		headers: null,
		body: null
	};
	callback(null, response);
};