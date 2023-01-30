//Task Name: Lab 3
//Author: John Zacqueo I. Carreon
//Section: WD - 201

//Use require() to support local module

//

var http = require('http'); // 1 - Import Node.js core module

var server = http.createServer(function (req, res) {
  // 2 - creating server
  //handle incoming requests here...
});

server.listen(5000); //3 - listen for any incoming requests

console.log('Node.js web server at port 5000 is running..');
