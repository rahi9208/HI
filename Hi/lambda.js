let AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();
exports.handler = function (event, context, callback) {
	ddb.get({
		TableName: 'Calculatory',
		Key: { 'ID': "hi", 'Result': "hix" }
	}, function (err, data) {
		if (err) {
			//handle error
		} else {
			//your logic goes here
		}
	});

	console.log("Log from other regions");

	callback(null, 'Successfully executed');
}