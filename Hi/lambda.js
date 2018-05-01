let AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();
exports.handler = function (event, context, callback) {
	ddb.get({
		TableName: 'Calculator',
		Key: { 'ID': kl, 'Result': kl }
	}, function (err, data) {
		if (err) {
			//handle error
		} else {
			//your logic goes here
		}
	});

	console.log("Log from other region");

	callback(null, 'Successfully executed');
}