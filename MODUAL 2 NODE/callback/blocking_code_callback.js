/*Node.js blocking operations are synchronous methods that prevent the execution of additional
 JavaScript until a non-JavaScript operation is complete*/

 var fs=require("fs");
 //using fs we can resd file ! write on file ! remove a file using fs module file in node js

 var data=fs.readFileSync('input.txt');//each block of code read frominput .tex
 console.log(data.toString());