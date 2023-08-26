/*
for prim we have constructor functions( used to create obj)
- js internal have this CF like array string boolean date object
*/
var a = new Array();
var a = [];

//possible coz everthing stored as an object ( key value ) so
//key    0  1    2
var a = [1, 2, "hello", function () {}];
console.log(typeof a); //obj

/*
----------------
 Que - How to empty array 
----------------
*/
var a = [1, 2];
var b = a;
// a-> [ 1 2 ] <- b
a = []; /// a-> [] points to new memory now
// [ 1 2 ] <- b still pointing to same

console.log(a);
console.log(b);

var a = [1, 2];
a = [];
console.log(a);

/*
----------------
 Que - How to empty array 
----------------
*/
var a = [1, 2];
var b = a; // a-> [ 1 2 ] <- b
a.length = 0; //  a-> [ ] <- b
a.length = 10;
a.length = -1;

console.log(a);
console.log(b);
