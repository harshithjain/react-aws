var AWS = require('aws-sdk');
var fs = require('fs');

AWS.config.update({
    region: "us-east-1"
});

console.log("Writing into Accessibility Table");

var dynamodb = new AWS.DynamoDB.DocumentClient();
var accessibilityData = JSON.parse(fs.readFileSync('../data/accessibility.json'));

accessibilityData.forEach((accessibility) => {
    var params = {
        TableName: "Accessibility",
        Item: {
            "name": accessibility.name
        }
    };

    dynamodb.put(params, function(err, data) {
        if (err) {
            console.error("Unable to insert data into accessibility for", accessibility.name, "Error:", JSON.stringify(err, null, 2))
        } else {
            console.log("Added :-", accessibility.name, "into Accessibility table")
        }
    });
});