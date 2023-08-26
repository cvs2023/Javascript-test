//
//@C - pass by value
// so js is both pass-by-value and pass-by-reference,
// depending on the type of data being passed.

/* let a = 10;
function change(b) {
  b = 2;
}
change(a);
console.log(a); // proof pass by value

let x = [1, 2, 3];
function changeArr(y) {
  //y is pointer to that array
  y.push(4);
}
changeArr(x); //x is passed by reference to the function,
console.log(x); // proof pass by value (i.e. lvalue)
// This demonstrates pass-by-reference. */

// ---
/*



--------
var a = 1;
var b = "ac";

// convert string into number and matches
console.log(a == b);

console.log("" == 0); // true
// js convert "" into 0 so its true

console.log((0).toString()); //give 0 // -> '' not the case
console.log(Number("")); //give 0
--------
// in complex only lvalue are compared that is addresses
let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];

let arr3 = arr1; //same reference

console.log(arr1 === arr2); // because lvalue is not same (no need to even check rvalue)
console.log(arr1 == arr2); //means first only left is checked here also

console.log(arr1 === arr3);
-------
  let counter;
  console.log(counter);
  function secondFun() {
    let counter;
    console.log(counter);

    function innerFun() {
      // console.log("before" + counter);
      counter = 6;
      console.log("after = 6" + counter);
    }

    counter = 2;
    innerFun(); //important
  }

  function firstFun() {
    console.log(counter); //imp global se value idr a skti hai outer inner function concept
    counter = 2;
  }

  counter = 3;

  firstFun();
  secondFun();
  console.log(counter);
---------



var c = 5;
console.log(5 + c);//10
let n = 6;
n = c + 6;//11
console.log( c - n );
---------

console.log(counterOne);
var counterOne = 1;
console.log(counterTwo);
let counterTwo = 2;
-------

var num = 10;
console.log(num);

function fun() {
  console.log(num);
  var num = 20; //as we declared num here that is same name so above will become undefined now
  num++;
  console.log(num);

  if (num) {
    var n = 50; //new var , so this will get finished here
    n++;
    console.log("if 1 : " + n);
  }

  if (1) {
    var num = 30;
    num++;
    console.log("if 2 : " + num);
  }

  console.log(num); //num updated because same var updated inside if
}

fun();

console.log(num);
---------

//how
const str = "Aman";
// console.log(typeof str);
// console.log(typeof str == "string");
// console.log(typeof str === "string");
console.log(!typeof str === "object"); // ?
console.log(!typeof str === "string");  // ?
---------


//how
function foo() {
  if (true) {
    var my_var = "Hello, World";
  }

  console.log(my_var);
}

foo();
---------

function foo() {
    console.log(my_var);
    var my_var = "Hello, World";  
}

foo();
---------

function foo() {
    if (true) {
        let my_var = "Hello, World";
    }    
    console.log(my_var);
}

foo();
---------

function foo() {
    console.log(my_var);
    let my_var = "Hello, World";  
}

foo();
---------

var bar = null;

console.log(typeof bar === "object");
---------


let arr = [1,2,3,4,5];

const arr2 = arr;

arr = [];

console.log(arr2);
---------


let arr = [2, 3, 4, 5, 6];

function fun(arr) {
  arr.unshift(1);
  console.log(arr); //till here change in original array

  let newArr = [7, 8, 9];
  arr = newArr;
  console.log(arr); //[7, 8, 9]
}

console.log(arr);
fun(arr); //
// arr = fun(arr);// ?
console.log(arr);
---------

let arr = [2, 3, 4, 5, 6];

function fun(arr) {
  arr.unshift(1);
  console.log(arr);
  let newArr = [7, 8, 9];
  arr = newArr;
  console.log(arr); 

  return arr;
}

console.log(arr); 
arr = fun(arr);
console.log(arr); 
---------

@C ==== funcs[5]()
const funcs = [   //[ see
  function () {
    console.log("Function 0");
  },
  function () {
    console.log("Function 1");
  },
  function () {
    console.log("Function 2");
  },
];

funcs[1](); // calls "Function 5" from the funcs array
funcs[5](); //funcs[5] is not a function
---------

//@C - destructuring 
function greet(name) {
  console.log(`Hello, ${name}!`);
}

function bye(name) {
  console.log(`Goodbye, ${name}!`);
}

const funcs = [greet, bye];
funcs[0]("John"); // calls greet function with "John" as the argument
---------
var nums = [];
for (var i = 0; i < 10; i++) {
  nums[i] = i;
}
console.log(nums);
console.log(nums[7]);
console.log(nums[1]());
console.log(nums[9]());
console.log(nums[10]());
---------

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

const mathFuncs = [add, subtract];

const result = mathFuncs[1](10, 5); // calls subtract function with arguments 10 and 5

console.log(result); // logs 5 to the console
---------
var nums = [];
for (var i = 0; i < 10; i++) {
  nums[i] = function () {
    return i;
  };
}
console.log(nums); //have fun definations why
console.log(nums[7]);
console.log(nums[1]());
console.log(nums[9]());
console.log(nums[10]());
---------

//HOW
function constfuncs() {
  var funcs = []; //goes global

  //var i is function scoped not block scoped so after this i = 10
  for (var i = 0; i < 10; i++)
    funcs[i] = function () {
      return i;
    };
  return funcs;
}
var funcs = constfuncs(); // 0 1 2 3 4 5 6 7 8 9
funcs[5]();
// a = funcs[5]();
// console.log(a); //10
---------





const nums = [1, 2, 3, 4, 5];
const funcs = [
  function () {
    console.log(nums[0]);
  },
  function () {
    console.log(nums[1]);
  },
  function () {
    console.log(nums[2]);
  },
  function () {
    console.log(nums[3]);
  },
  function () {
    console.log(nums[4]);
  },
];

funcs[3](); // calls function that logs 4 to the console
---------



// @C - object
//how
// Overall, this code demonstrates how to store a function as a property of an object and how to add that function to an array for later use. It also shows how to call a function that is stored in an array
const obj = {
  name: "John",
  age: 30,
  greet: function () {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  },
};
console.log(obj.greet); //console complete function
const funcs = [obj.greet]; //put in array
console.log(funcs); //see the array
funcs[0](); // calls greet function from the obj object
--------


// The reason why you are seeing undefined for both this.name and this.age is because the value of this inside the greet method depends on how it is called.
// In this case, when you call funcs[0](), the greet method is invoked as a regular function, not as a method of the obj object. As a result, the this keyword inside the greet method no longer refers to the obj object, but instead to the global object (in a browser environment, this would be the window object).
// To fix this issue, you can use the bind() method to explicitly bind the this keyword to the obj object:

const obj = {
  name: "John",
  age: 30,
  greet: function () {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  },
};
const funcs = [obj.greet.bind(obj)]; //put in array
console.log(funcs); //this time see native array
funcs[0](); 

---------

@C- object
// get keys
const person = {
  name: "Lydia",
  age: 21,
};

//output
// name Lydia
// age 21
for (const item in person) {
  console.log(item + " " + person[item]);
}

//output
// [
//   ["name", "Lydia"],
//   ["age", 21],
// ];
const entries = Object.entries(person);
console.log(entries);

// @C -destructuring
const e = Object.entries(person);
const [n, value] = e[0];
const [, v] = e[0];
console.log(value);
console.log(v);
---------


// destructuring
const arr = [10, 20, 30];
const [a, b = 2, c, d = null, e = -1] = arr; //jo pehle se hai wo kyun leh

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

---------

//@C - Hashmap
var pets = ["dog", "chicken", "cat", "dog", "chicken", "chicken", "rabbit"];

var petCounts = pets.reduce(function (obj, pet) {
  if (!obj[pet]) {
    obj[pet] = 1;
  } else {
    obj[pet]++;
  }
  return obj;
}, {});

console.log(petCounts);
---------

// which method modifies the original array
const arr = [1, 2, 3];

arr.map((x) => x * 10);
arr.filter((x) => x % 2 !== 0);
arr.find((x) => x !== 2);
arr.reduce((acc, cur) => acc + cur);
arr.slice(1, 2);
arr.splice(1, 2);
---------


const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr[5]);//5
arr.length = 0;
console.log(arr);//
console.log(arr[0]);//un
---------

const arr = [0, 1, 2, 3, 4, 5];
arr[10] = 10;
console.log(arr);
console.log(arr[7]);
console.log(arr.length);
console.log(arr[11]);
---------

// @C- arrow functions . arguments object
//1- the arguments object is not a true array, so it does not have all the same methods as an array. In modern JavaScript, it's generally recommended to use the rest parameter syntax ...args to capture all arguments passed to a function as a real array, rather than using the arguments object.

// 2-Arrow functions and lexical scoping: In this code, an arrow function is defined inside another function. Arrow functions have lexical scoping, which means they inherit the this and arguments objects from their parent scope. In this case, innerFun() inherits the arguments object from outerFun(), which can cause confusion if you're not aware of this behavior.
function outerFun() {
  console.log(arguments);

  let innerFun0 = () => {
    console.log("inner :: is also giving the same argument object why ");
    console.log(arguments);
  };
  innerFun0("Hello", "Coder");

  function innerFun1() {
    console.log("without arrow function ");
    console.log(arguments);
  }
  innerFun1("abc");

  let innerFun2 = (...args) => {
    console.log(args);
  };
  innerFun2("hi", "hello");
}
outerFun("Welcome", "to", "Scaler", "Academy");
---------
@C- params
const add = (x) => x + x;

function myFunc(num = 2, value = add(num)) {
  console.log(num, value);
}

// num, undefined Nan  myFunc();
myFunc();
myFunc(3);
myFunc(3, 10);
myFunc(3, 10, 11);
---------



---------

=========================================================*/

// function outerMost(x) {
//   return function outer(y) {
//     return function inner(z) {
//       return x + y + z;
//     };
//   };
// }

// let firstCall = outerMost(20);
// let secondCall = firstCall(30);
// console.log(secondCall());

// const funcs = [
//   function() { console.log("Function 0") },
//   function() { console.log("Function 1") },
//   function() { console.log("Function 2") },
//   function() { console.log("Function 3") },
//   function() { console.log("Function 4") },
//   function() {
//     const nums = [1, 2, 3, 4, 5];
//     const sum = nums.reduce((acc, curr) => acc + curr);
//     console.log(`The sum of the numbers is ${sum}`);
//   }
// ];
// funcs[5](); // calls function that calculates the sum of numbers

// function getDistance(x1, y1, x2, y2) {
//   return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
// }

// const point1 = [0, 0];
// const point2 = [3, 4];

// const funcs = [
//   function() { console.log(getDistance(point1[0], point1[1], point2[0], point2[1])) },
//   function() { console.log(getDistance(point2[0], point2[1], point1[0], point1[1])) }
// ];

// funcs[1](); // calls function that calculates the distance from point2 to point1

// const nums = [1, 2, 3, 4, 5];

// const funcs = [
//   function() { console.log(nums.map(num => num * 2)) },
//   function() { console.log(nums.filter(num => num % 2 === 0)) }
// ];

// funcs[0](); // calls function that doubles each number in the nums array

// function capitalize(word) {
//   return word.charAt(0).toUpperCase() + word.slice(1);
// }

// const sentence = "the quick brown fox jumps over the lazy dog";

// const funcs = [
//   function() { console.log(sentence.split(" ").map(word => capitalize(word)).join(" ")) },
//   function() { console.log(sentence.split("").reverse().join("")) }
// ];

// funcs[1](); // calls function that reverses the sentence

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const arr3 = [7, 8, 9];

// const funcs = [
//   function() { console.log([...arr1, ...arr2, ...arr3]) },
//   function() { console.log([...arr3, ...arr1, ...arr2]) }
// ];

// funcs[0](); // calls function that concatenates the arrays in a specific order

function sum(arr, n) {
  if (n <= 0) {
    return 0;
  } else {
    return sum(arr, n - 1) + arr[n - 1];
  }
}

console.log(sum([1], 0)); // 0
console.log(sum([2, 3, 4], 1)); // 2 equals 2
console.log(sum([2, 3, 4], 2)); // 5 equals 2 + 3
console.log(sum([2, 3, 4], 3)); // 9 equals 2 + 3 + 4

/*
sum( arr, 3 ) + 3
  sum( arr, 2 ) + 3
    sum( arr, 1 ) + 2

sum( arr, 3 ) + 4
  sum( arr, 2 ) + 3
    sum( arr, 1 ) + 2
*/
console.log("index.js");
