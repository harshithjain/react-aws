var AWS = require('aws-sdk');
var fs = require('fs');

AWS.config.update({
    region: "us-east-1"
});

console.log("Writing into Services Table");

var dynamodb = new AWS.DynamoDB.DocumentClient();
var servicesData = JSON.parse(fs.readFileSync('../data/Services.json'));

servicesData.forEach((services) => {
    var params = {
        TableName: "Services",
        Item: {
            "name": services.name
        }
    };

    dynamodb.put(params, function(err, data) {
        if (err) {
            console.error("Unable to insert data into Services for", services.name, "Error:", JSON.stringify(err, null, 2))
        } else {
            console.log("Added :-", services.name, "into Services table")
        }
    });
});