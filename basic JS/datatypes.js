console.log("Welcome to Programiz!");
console.log("a1" == 1); //false
console.log(typeof "1"); //s
console.log(typeof +"1"); //number
console.log(+"1"); //1
console.log(+"abc"); //NAN

console.log(typeof 10);
console.log(typeof "abcd");
console.log(typeof true);
console.log(typeof 9.5); // no separate float type
console.log(typeof undefined);
console.log(typeof null); //obj

let a = { a: 10, b: "asdasd" };
let b = [1, 2, 3];
let c = BigInt(4576474376765756756); // for > 2^53
let d = Symbol("x");

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);

console.log("==============================");

let i = 10;
let i2 = Number(10);
let i3 = new Number(10); // never do this

console.log(typeof i);
console.log(typeof i2);
console.log(typeof i3);

// == losely equal ( convert and compare )
// === strictly equal ( compare data type)

console.log(1 == "1"); // true
console.log(1 === "1"); // false

console.log("" == 0); // true

console.log((0).toString()); // -> '' not the case
console.log(Number(""));

// ------------ for complex objects ----------------
console.log("-------------------------------");

let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];
let arr3 = arr1;

console.log(arr1 === arr2); // because lvalue is not same (no need to even check rvalue)
console.log(arr1 == arr2);
console.log(arr1 === arr3); // true because they are same object (lvalue same)

// --------------------------------------------
// Primitive data types
let name = "John"; // String
let age = 30; // Number
let isStudent = true; // Boolean
let job = undefined; // Undefined
let score = null; // Null
let symbol = Symbol(); // Symbol

// Reference data types
let person = {
  // Object
  firstName: "Jane",
  lastName: "Doe",
};
let numbers = [1, 2, 3]; // Array
function greet() {
  // Function
  console.log("Hello!");
}
let currentDate = new Date(); // Date
let pattern = /abc/; // RegExp
let numberMap = new Map(); // Map
let uniqueValues = new Set(); // Set

// Special data type
let bigInteger = 123456789012345678901234567890n; // BigInt
