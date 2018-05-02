let AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();
ddb.get({
    TableName: 'kcontact_us',
    Key: {
        'name': ghgh
    }
}, function (err, data) {
    if (err) {
        //handle error
    } else {
        //your logic goes here
    }
});
