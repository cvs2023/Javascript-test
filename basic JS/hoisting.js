var a = 1;
function b() {
  a = 10;
  return;
  function a() {}
}

b();
console.log(a);

///

var b = 1;
function outer() {
  var b = 2;
  function inner() {
    b++;
    console.log(b); //NaN coz undefined++ hua

    var b = 3;
    console.log(b);
  }
  inner();
}
outer();
// @BIGHOW how ----------------
/* Hoisting refers to the process where the interpretor  appears to move the declartions of functions
 variable or classes to  the top of their scope,prior to the execution of the code */
/* var a = 9;
function hositing() {
  // console.log(a);
  console.log(a, b, c); // ?
  const c = 30;
  let b = 20;
  var a = 10;
}
hositing(); */

/* function abc() {
  for (var i = 0; i < 10; i++) {
    console.log(i);
  }
  console.log(i);

  function xyz() {
    console.log(i);
  }
  if (true) console.log(i);
  xyz();
}
console.log(abc()); */

/* below 
The output will be 'function'. This is due to hoisting and function expressions. The function foo is hoisted to the top of the bar function's scope. The assignment of foo to 10 and the variable declaration var foo = '11' are never executed because they come after the return statement. */
function bar() {
  return foo;
  foo = 10;
  function foo() {}
  var foo = "11";
}
console.log(typeof bar()); // What's the output?

/* // iife hositing
var name = "John";
(function () {
  console.log(name);
})(); // What's the output?

var name = "Johnny";
(function () {
  console.log(name);
  if (typeof name === "undefined") {
    var name = "Jane";
    console.log("Hello, " + name);
  } else {
    console.log("Hello, " + name);
  }
})(); // What's the output? */

/* HOISTING DEFINATIOn- memory allocation

Hoisting: 
When a js program runs it creates a execution context where all the
variables functions are hoisted at the top even before executing the code this is called memory execution and then code exection phase is done where we get proper declared values.
In JavaScript, variables and functions can be declared after they are used. This is because JavaScript "hoists" (or moves) variable and function declarations to the top of their respective scopes. However, only the declarations are hoisted, not the assignments. This means that variables declared with var or function can be used before they are actually declared.
*/

var a = 9;
function hositing() {
  console.log(a, "abc"); // ?
  var a;
  a = 10;
}
hositing();

// setTimeout(printMessage, 2000);

let message = "Hello";

function printMessage() {
  message = "Goodbye";
  console.log(message);
}

setTimeout(printMessage, 2000);

/*
// function hoisting

// arrow = arrow functions are treated as variable, so the function definition doesnt get hoisted

// output only depend on input
// output doesnot dpeend on this and cur state


From this code snippet, you can learn about function hoisting in JavaScript. Function hoisting is the behavior where function declarations are moved to the top of their scope and can be called before their actual declaration in the code.

In this example, the function h1() is a function declaration and is hoisted to the top of the scope. Therefore, it can be called before its declaration in the code.

The variables h2, h3, and h4 are defined as functions, but they are not function declarations. h2 is defined using the let keyword, h3 is defined using the var keyword, and h4 is defined using an arrow function. These variables are treated as variables and not function declarations, so they are not hoisted in the same way as function declarations.

When you try to call h2 before its definition, you get a ReferenceError because the variable is not yet initialized. When you try to call h3 before its definition, you get a TypeError because the variable is not a function. When you try to access h4 before its definition, you also get a TypeError because it is not yet initialized.

You can also see that the typeof operator returns "function" for all of the defined functions, including the arrow function h4, which is interesting because arrow functions are typically treated as variables and not function declarations. However, in this case, h4 is still treated as a function and is hoisted to the top of the scope.
*/

h1();

// not intialized yet , no defination here
// h2(); // ReferenceError: Cannot access 'h2' before initialization
// h3(); // TypeError: h3 is not a function
console.log(h4); // TypeError: h3 is not a function

// functions get hoisted with their definition
function h1() {
  console.log("hello function");
}

// they are not get hoisted with their definition because they are variables
let h2 = function () {
  console.log("hello let function");
};

var h3 = function () {
  console.log("hello var function");
};

const h4 = () => {
  console.log("hello arrow function");
};

console.log(typeof h1);
console.log(typeof h2); //let
console.log(typeof h3); //var
console.log(typeof h4); //arrow - fun but hoisted how ?

/*
Good question
que -  b++ ?
*/
function outer() {
  var v = 10;

  function inner() {
    // console.log(v);
    v++;
    // console.log(v);
    var v = 0;
    console.log(v);
  }
  inner();
}
outer();

/**good 2 */
console.log(undefined++);
console.log(undefined--);
undefined++;
undefined--;

/*
const a = 1
console.log(a)

var b
console.log(b)
b = 2

console.log(c)
var c = 3

console.log(d)
let d = 2 */

/* const func1 = () => console.log(1);

func1();

func2();

function func2() {
  console.log(2);
}

func3(); 

var func3 = function func4() {
  console.log(3);
};
 */

/*
var a = 1

function func() {
  a = 2
  console.log(a)
  var a
}

func()

console.log(a)

if (!('b' in window)) {
  var b = 1
}

console.log(b) */

// hard

/*

var a = 1
function a() {
}

console.log(typeof a)

var b
function b() {
}
b = 1

console.log(typeof b)

function c() {
}
var c = 1;

console.log(typeof c)

var d = 1;

(function(){
  d = '2'
  console.log(typeof d)
  function d() {
  }
})()

console.log(typeof d)

var e = 1
const f = function e() {}

console.log(typeof e) */
/* 
i think - Variable assignments take precedence over function declarations

Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables, or classes to the top of their scope, prior to execution of the code.

In this example, imagine all the function declarations moved to the top prior to the execution of code. So, all the initializations of a, b, and c to 1 happen after they are declared(or functions are declared). Hence, typeof returns "number"

Then we have an IIFE within which d='2' hence typeof inside the function prints "string". However, after IIFE is executed the scope gets destroyed and hence after that it logs "number" as d is 1

Lastly, e is a named function expression but this name is then local only to the function body (scope). Thus, outside the expression body e is still 1 i.e. "number" */

/* let foo = 10
function func1() {
    console.log(foo)
    var foo = 1
}
func1 ()


function func2() {
  console.log(foo)
  let foo = 1
}
func2 ()
 */

/* 
var foo = 1;
(function () {
  console.log(foo);
  foo = 2;
  console.log(window.foo);
  console.log(foo);
  var foo = 3;
  console.log(foo);
  console.log(window.foo)
})() 
*/
