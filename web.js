var fs = require('fs');
var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var helloFile = new Buffer(256);
  helloFile = fs.readFileSync('index.html');
  response.send(helloFile.toString());
  console.log(helloFile.length + " bytes: " + helloFile.toString('utf8', 0, len));
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
