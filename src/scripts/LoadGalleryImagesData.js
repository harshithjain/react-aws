var AWS = require('aws-sdk');
var fs = require('fs');

AWS.config.update({
    region: "us-east-1"
});

console.log("Writing into GalleryImages Table");

var dynamodb = new AWS.DynamoDB.DocumentClient();
var galleryImagesData = JSON.parse(fs.readFileSync('../data/gallery_images.json'));

galleryImagesData.forEach((images) => {
    var className = images.className
    if(className.trim() == "") className = "no_class"; //DynamoDb do not allow empty values
    var params = {
        TableName: "GalleryImages",
        Item: {
            "src": images.src,
            "alt": images.alt,
            "className": className
        }
    };

    dynamodb.put(params, function(err, data) {
        if (err) {
            console.error("Unable to insert data into GalleryImages for", images.alt, "Error:", JSON.stringify(err, null, 2))
        } else {
            console.log("Added :-", images.alt, "into GalleryImages table")
        }
    });
});