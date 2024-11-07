/*3).THIRD_PARTY MODULE:-

-> Third-party modules are modules that are available online using the Node Package Manager(NPM). 
These modules can be installed in the project folder or globally. 

Example:

npm install express
npm install mongoose
npm install -g @angular/cli*/


//npm install express
//Create a Simple Express Server:

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

//node server.js
//When you navigate to http://localhost:3000 in your browser, you should see Hello World!.

//Exporting and Importing Modules

//1. Default Export:
//You can export a single function or object using module.exports:

// logger.js
module.exports = function log(message)
{
    console.log(message);
};

//2. Named Exports:
//You can export multiple functions or objects by attaching them to the exports object:

// math.js
exports.add = function (a, b) 
{
    return a + b;
};

exports.multiply = function (a, b) 
{
    return a * b;
};

