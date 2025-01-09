var express=require("express");
var app=express(); 
// check connect of mysql2 
var mysql2=require('mysql2'); 
var con=mysql2.createConnection({
    host:"localhost", 
    user:"root", 
    password:"root"
});
// check connection via conditions 
con.connect(function(err){
  if(err)
    { 
        throw err;
    }
   else 
   {
    console.log('connected successfully');
    // create a database con.query();
    con.query('create database restapidb',function(err,result){

        if(err) 
        {
          throw err;
        }
        else 
        {
          console.log('Database successfully  created');
        }

    });

   }
  
});

app.listen(7000);
console.log('http://localhost:7000');