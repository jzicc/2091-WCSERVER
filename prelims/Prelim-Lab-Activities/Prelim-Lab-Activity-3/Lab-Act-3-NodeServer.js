//Task Name: Lab 3
//Author: John Zacqueo I. Carreon
//Section: WD - 201

//Use require() to support local module

var http = require('http'); // Import Node.js core module

var server = http.createServer(function (req, res) {
  // creating server

  //handle incoming requests here...

  if (req.url == '/') {
    //check the URL of the current request

    // set response header
    res.writeHead(200, { 'Content-Type': 'text/html' });
  } else if (req.url == '/root') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(
      '<html><body><p>Welcome to my Node.js Application.</p></body></html>'
    );
    res.write(
      '<html><body><p>Welcome Zac Carreon. This is an activity about basics of Node.js</p></body></html>'
    );
  } else if (req.url == '/about') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<html><body><p>This is the About Page.</p></body></html>');
    res.write(
      '<html><body><p>Hello Zac Carreon. This activity will teach on how to deal with a simple server and local modules in Node.js</p></body></html>'
    );
  } else if (req.url == '/contact') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<html><body><p>This is the Contact Page.</p></body></html>');
    res.write(
      '<html><body><p>Zac Carreon, if you want additional details about this activity go to this site: https://www.tutorialsteacher.com/node.js/node.js-tutorials</p></body></html>'
    );
  } else if (req.url == '/gallery') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<html><body><p>This is the Gallery Page.</p></body></html>');
  } else res.end('Invalid Request: ');
});

server.listen(5001);

console.log('Node.js web server at port 5001 is running..');
