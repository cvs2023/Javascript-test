/*
  Classical OOP 
  'this' ? -> reference to the current instance 
              cannot write in : 
                1. global scope (C++)
                2. static methods 
                3. in constructor, before 'super' call 
  JavaScript 
    - can use anywhere 
    - reference to current context where code is running
    - exception: in arrow functions, lexical this
    - exception: using bind/call we can re-direct this
*/

// -------------
// console.log(this); // the scope of current file
// console.log(this == globalThis);

function printThis() {
  console.log(this);
  console.log(globalThis);
  console.log(this == globalThis);
}

// printThis(); // function runs in 'global' context, in this way

// --------------
function checkScope() {
  console.log(this);
  console.log(globalThis);
  console.log(this == globalThis);
}
let obj = {
  a: 10,
  b: true,
  c: "asdsad",
  d: checkScope,
};

// obj.d(); //object scope this will give

let a = 10;
var c = 20;
// you can see here c = 20 in global obj but not a = 10

console.log(this);
console.log(window); //debugger runs in node so gives err here but in browser it will run
console.log(globalThis);
