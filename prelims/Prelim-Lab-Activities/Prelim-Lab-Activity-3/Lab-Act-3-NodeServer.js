//Task Name: Lab 3
//Author: John Zacqueo I. Carreon
//Section: WD - 201

//Use require() to support local module

//

var http = require('http');
var server = http.createServer(function (req, res) {
  //root

  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.end('Welcome to my Node.js Application\n');

  //about
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.end('This is the about page \n');
});
server.listen(5000);

console.log('Server running at http://127.0.0.1:5000/');
