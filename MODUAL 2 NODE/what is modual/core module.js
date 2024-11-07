/*1 CORE MODULE:

Core Modules:  Node.js comes with dozens of built-in modules. These built-in modules are sometimes
referred to as core modules. 

The module system is built around the require function. 

This function is used to load a module and get access to its contents. 

require is a global variable provided to all your Node.js scripts, so you can use it anywhere you like.

->These are built-in modules that come with Node.js and don't need to be installed separately. 
Some examples include:

1)fs. for file system operations 
2)http. for building HTTP servers and handling HTTP requests 
3)path. for working with file and directory paths 
4)os. for operating system-related utility methods and properties 
5)event.s for creating and handling events */

//Syntax for Importing Module: 

const module = require("name_of_modual");

Example: 

// Working code of fs module
const fs = require('fs'); // Import fs module
fs.writeFileSync('notes.txt', 'core modual testing');