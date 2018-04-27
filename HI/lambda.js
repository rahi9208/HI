let AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();
let connectionManager = require('./ConnectionManager');
let $ = require('jquery');
exports.handler = function (event, context, callback) {
	console.error(event);
	ddb.get({
		TableName: 'jkjk',
		Key: { 'jkjk': 'kls ' }
	}, function (err, data) {
		if (err) {
			//handle error
		} else {
			//your logic goes here
		}
	});

	callback(null, "OKay Test Go eh2 okay");
}