var AWS = require('aws-sdk');
var fs = require('fs');

AWS.config.update({
    region: "us-east-1"
});

console.log("Writing into MenuLinks Table");

var dynamodb = new AWS.DynamoDB.DocumentClient();
var galleryImagesData = JSON.parse(fs.readFileSync('../data/menu_links.json'));

galleryImagesData.forEach((links) => {
    var params = {
        TableName: "MenuLinks",
        Item: {
            "class": links.class,
            "href": links.href,
            "text": links.text
        }
    };

    dynamodb.put(params, (err, data) => {
        if (err) {
            console.error("Unable to insert data into MenuLinks for", links.text, "Error:", JSON.stringify(err, null, 2))
        } else {
            console.log("Added :-", links.text, "into MenuLinks table")
        }
    });
});