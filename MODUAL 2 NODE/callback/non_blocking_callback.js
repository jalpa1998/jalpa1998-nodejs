/*Node.js non-blocking is a type of call that allows a program to execute multiple operations 
simultaneousl*/

var fs=require("fs");
//using fs we can read flie ! write on file ! remove a file using fs module file handeling in node js
fs.readFile('input.tex',function(err,data) //readfile()//each blcok of code read from input.tex
{
    if(err)return console.error(err);
    console.log(data.toString());
});