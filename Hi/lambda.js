let AWS = require('aws-sdk');
exports.handler = function(event, context, callback) {

	console.log("Log from other region");

	callback(null,'Successfully executed');
}