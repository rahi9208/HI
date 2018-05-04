let AWS = require('aws-sdk');
let other = require('./otherjs');
let myFile = require('./dir/myFile');
exports.handler = function (event, context, callback) {



	callback(null, 'Successfully executed');
}