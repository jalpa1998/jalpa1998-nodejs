/*Q1  What is Node.js? Where can you use it?
Node.js is an open-source and cross-platform JavaScript runtime environment. 

It is a popular tool for almost any kind of project!

-> WHERE CAN YOU USE
Node.js runs the V8 JavaScript engine, the core of Google Chrome, outside of the browser. 

This allows Node.js to be very performant.

A Node.js app runs in a single process, without creating a new thread for every request.*/


//example Hello World of Node.js:

const { createServer } = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
