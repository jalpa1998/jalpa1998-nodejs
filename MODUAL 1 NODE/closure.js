/*. What is Closure? Give an example

A closure in JavaScript is a function that has access to the variables in its parent scope, even after the parent function has completed execution.*/

For example:

function makeCounter() 

let counter = makeCounter();

const a = 'hello';

console.log(a);

abc();

function abc(){

   //const a = 'world';

   console.log(a);

}


