//Task Name: Lab 3
//Author: John Zacqueo I. Carreon
//Section: WD - 201

//Use require() to support local module

//

var http = require('http');
var server = http.createServer(function (req, res) {
  //root

  response.end('Welcome to my Node.js Application\n');

  //about

  response.end('This is the about page \n');

  //contact

  response.end(
    'Zac Carreon, if you want additional details about this activity go to this site: https://www.tutorialsteacher.com/node.js/node.js-tutorials \n'
  );

  //gallery

  response.end('This is the gallery page\n');

  //non-existing route

  response.end('Invalid Request \n');


  
});
server.listen(5000);

console.log('Server running at http://127.0.0.1:5000/');
