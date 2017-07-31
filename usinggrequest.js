var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')

       .on('error', function (err) {
         console.log('error:', error);
       })
       .on('response', function(response){
        console.log('Downloading image...')
       })
       .on('response', function (response) {
         console.log(response.statusCode, response.statusMessage, response.headers['content-type']);
       })
       .pipe(fs.createWriteStream('./future.jpg'));

       console.log('Download complete.');