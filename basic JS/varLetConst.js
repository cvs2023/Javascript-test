x = 10;
console.log(x);
{
  var x;
  console.log(x);
}
/*
@C- Global Scope
In JavaScript, there are two main types of scope:

Global Scope:
Variables declared outside of any function have global scope. These variables can be accessed from anywhere in the code, including inside functions. Variables declared in global scope are often used for configuration settings or for variables that need to be accessed by multiple functions.
Example:

javascript
Copy code
var greeting = "Hello, world!";

function sayGreeting() {
  console.log(greeting);
}

sayGreeting(); // logs "Hello, world!"

Local Scope:
Variables declared inside a function have local scope. These variables can only be accessed from within the function where they are declared. Local scope is often used for variables that are specific to a particular function and are not needed elsewhere in the code.
Example:

javascript
Copy code
function sayGreeting() {
  var greeting = "Hello, world!";
  console.log(greeting);
}

sayGreeting(); // logs "Hello, world!"
console.log(greeting); // ReferenceError: greeting is not defined
It's important to understand how scope works in JavaScript because it can affect the behavior of your code and how it interacts with other parts of your program.





@C- functional and block scope  ?
Functional and block scope are two additional types of scopes in JavaScript.

Functional Scope:
Functional scope is the scope created by functions. In JavaScript, variables declared inside a function have functional scope, which means they can only be accessed within that function or by functions nested within it. Variables declared outside of a function have global scope, as mentioned earlier.
Example:

javascript
Copy code
function greet() {
  var message = "Hello, world!";
  console.log(message);
}

greet(); // logs "Hello, world!"
console.log(message); // ReferenceError: message is not defined
In this example, the variable message is declared inside the greet function and has functional scope. It cannot be accessed outside of the function.

Block Scope:
Block scope is the scope created by curly braces {}. In JavaScript, variables declared inside a block (e.g. an if statement, for loop, or block statement) have block scope and can only be accessed within that block.
Example:

function isPositive(num) {
  if (num > 0) {
    if (num > 1) {
      if (num > 2) {
        if (num == 5) {
          var message = "Positive";
        }
      }
    }
  } else {
    var message = "Not positive";
  }
  console.log(message);
}

isPositive(5); // logs "Positive"
isPositive(-5); // logs "Not positive"
console.log(message); // ReferenceError: message is not defined

In this example, the variable message is declared inside two different blocks (the if and else statements) and has block scope. It cannot be accessed outside of those blocks.

Note: Starting from ES6, you can also declare variables with let and const keywords, which have block scope rather than functional scope, allowing for more fine-grained control of variable scoping.



// var - dont have block scope and not passed as param
var x = 10;
console.log(x);

function change() {
  console.log(x);
  var x = 20; 
  if (true) {
    console.log(x);
    var x = 30; 
    console.log(x);
  }
  console.log(x);
}
change();
console.log(x);



// let have block leveel scope so if wala udr he chlega
let x = 10;
console.log(x);
function change() {
  console.log(x);
  let x = 20;
  console.log(x);
  if (true) {
  console.log(x);

    let x1 = 30;
    console.log(x, x1);
  }
  console.log(x);
}
change();
console.log(x);



let x = 10;
console.log(x);

function change() {
  console.log(x);
  if (true) {
    let x1 = 30;
    console.log(x, x1);
  }
  console.log(x);
}
change();
console.log(x);
--------

@C - shadowing
@C- let
where the inner variable x shadows the outer variable x 
within the scope of the foo function

let x = 10;
function foo() {
  let x = 20;
  console.log(x);

  console.log(window.x); 
  //want to access x = 10 here ? how to do this
}
foo();
console.log(x);

RUN IN CONSOLE-------------------------------@imp

var y = 10;

function foo() {
  var y = 20;
  console.log( y );
  
//@thinkque - if window is browser object then how we are accessing 
console.log(window);

  console.log(window.y); 
}
 
foo();
console.log(y); 

RUN IN CONSOLE-------------------------------@imp
let x = 10;

function foo() {
  let x = 20;
  console.log( x );
  
//@thinkque - if window is browser object then how we are accessing 
console.log(window);

  console.log(window.x); 
}
 
foo();
console.log(x); 
--------


Questons 5hard que based on Shadowing

- What is the scope chain in JavaScript, and how does it relate to variable shadowing?
The scope chain in JavaScript refers to the hierarchy of scopes that are nested within each other, with the global scope at the top.
- When a variable is referenced in a particular scope, JavaScript looks for the variable first in that scope, and if it's not found, it continues up the scope chain until it finds the variable or reaches the global scope. 
 Variable shadowing occurs when a variable declared within a certain scope has the same name as a variable declared in an outer scope, causing the inner variable to "shadow" the outer variable within that scope.




- How can you access the outer variable that is being shadowed within an inner scope in JavaScript?

//not worked
let x = 10;
function foo() {
  let x = 20;
  console.log(x); // outputs 20
  console.log(window.x);
}

foo();
console.log(x); // outputs 10

// 2- use different naming convention
ONLY WAY TO DO IS THIS
let x = 10;

function foo() {
  let y = x;
  let x = 20;
  console.log(x); // outputs 20
  console.log(y); // outputs 10
}

foo();
console.log(x); // outputs 10

3- may be not worked
with closure ?how

//basic we write for 20 NOT WORKED
not worked but will this work ?????????///
let x = 10;

function foo() {
  let x = 20;

  let bar = function () {
    console.log(x); // outputs 10
  };
  bar();
}

let baz = foo();



- How does variable shadowing affect the behavior of closures in JavaScript?
- How can you avoid variable shadowing in JavaScript, and what are some best practices for naming variables to avoid shadowing?
- What is the difference between variable shadowing and variable hoisting in JavaScript, and how do they affect the behavior of code?

above three ans

Variable shadowing affects the behavior of closures in JavaScript because closures capture the values of variables at the time the closure is created, not at the time it is called. If a variable is shadowed within an inner scope, and a closure is created within that scope, the closure will capture the value of the shadowed variable, not the value of the outer variable. To access the outer variable from within the closure, you can capture its value in a separate variable before the shadowing occurs.

To avoid variable shadowing in JavaScript, you can use unique and descriptive names for your variables that are unlikely to clash with existing names. Some best practices include using camelCase or snake_case naming conventions, prefixing variable names with relevant context or scope, and avoiding common keywords or reserved words. You can also use tools like linters or code analysis to identify potential shadowing issues in your code.

Variable shadowing and variable hoisting are related but distinct concepts in JavaScript. Variable hoisting refers to the behavior of moving variable declarations to the top of their scope, so that they are accessible before they are actually declared in code. Variable shadowing occurs when an inner variable declaration has the same name as an outer variable declaration, effectively hiding the outer variable from the inner scope. Hoisting can lead to unexpected behavior if variables are not properly initialized or if they are redeclared later in the code. Shadowing can also lead to unexpected behavior if closures or functions rely on the outer variable and are unaware of the inner variable. To avoid these issues, it is important to use clear and consistent naming conventions for your variables, and to be mindful of scope and context when declaring and using variables in your code.

--------
--------
--------
--------
--------
--------

*/
