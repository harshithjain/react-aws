var AWS = require('aws-sdk');
var fs = require('fs');

AWS.config.update({
    region: "us-east-1"
});

console.log("Writing into FooterImages Table");

var dynamodb = new AWS.DynamoDB.DocumentClient();
var FooterImagesData = JSON.parse(fs.readFileSync('../data/footer_images.json'));

FooterImagesData.forEach((images) => {
    var params = {
        TableName: "FooterImages",
        Item: {
            "src": images.src,
            "alt": images.alt,
            "className": images.className
        }
    };

    dynamodb.put(params, function(err, data) {
        if (err) {
            console.error("Unable to insert data into FooterImages for", images.alt, "Error:", JSON.stringify(err, null, 2))
        } else {
            console.log("Added :-", images.alt, "into FooterImages table")
        }
    });
});