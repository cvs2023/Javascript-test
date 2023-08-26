//defination
// these are used to define or change the context of this
// https://www.youtube.com/watch?v=TQLX_hpG6jk
function getName() {
  console.log(this);
  console.log(this.name);
}

let pers = {
  name: "sofia",
};

getName.call(pers);
/**
 * Function is called, with the 'this' pointing to the supplied
 * object 'obj'.
 * NO NEW FUNCTION IS CREATED
 * THE 'this' IS NOT PERMANENTLY MODIFIED
 *
 * call -> function args passed as normal args (starting from 2nd arg)
 * apply -> functino args are passed as a single array
 */

/* example 2 of Appply bind with gpt 

In JavaScript, `call`, `apply`, and `bind` are methods that allow you to -------control the execution context (the value of `this`) when calling a function. They are used to invoke functions in specific contexts or to create new functions with pre-defined contexts. Here are examples of each method:

1. **`call`**: The `call` method invokes a function with a specified `this` value and optional arguments provided individually.




In the example above, `call` is used to invoke the `greet` function of the `person` object with `anotherPerson` as the execution context.

*/
//1call
const obj0 = {
  name: "cv",
  write: function () {
    console.log("hi i ", this.name);
    return "returned";
  },
};

const obj01 = function () {
  this.write();
};
// obj01("cv") not linked
obj01.call(obj0, "cv ");
/////
const person = {
  name: "John",
  greet: function (message) {
    console.log(`${message}, ${this.name}!`);
  },
};

const anotherPerson = {
  name: "Jane",
};

person.greet.call(anotherPerson, "Hello"); // Output: Hello, Jane!

/* 2. **`apply`**: The `apply` method invokes a function with a specified `this` value and optional arguments provided as an array. */
//pehle spread ni tha toh apply laya gya
const person1 = {
  name: "John",
  greet: function (message) {
    console.log(`${message}, ${this.name}!`);
  },
};

const anotherPerson1 = {
  name: "Jane",
};

person.greet.apply(anotherPerson1, ["Hello", "hi"]); // Output: Hello, Jane!
/* 
In this example, `apply` is used to invoke the `greet` function of the `person` object with `anotherPerson` as the execution context. The arguments are passed as an array. */

/* 3. **`bind`**: The `bind` method creates a new function that, when called, has a specified `this` value and optional arguments provided upfront.

 */
//return function
const person2 = {
  name: "John",
  greet: function (message) {
    console.log(`${message}, ${this.name}!`);
  },
};

const anotherPerson2 = {
  name3: "Jane",
};

const greetJane = person.greet.bind(anotherPerson2);
greetJane("Hello"); // Output: Hello, Jane!

// ex-2 bind ,call aplly next line kill ho jate the but bind se wo rehta hai
// bind creates the copy of the function which is binded to the object
const p = {
  name: "John",
  greet: function (message) {
    console.log(`${message}, ${this.name}!`);
  },
};

const anotherPerson22 = {
  name: "Jane",
  message: "hi",
};

// const greetJane2 = p.greet.bind(anotherPerson22, "Jammu", "hi"); //yehi se params
const greetJane2 = p.greet.bind(anotherPerson22); //just pass the object BEST WAY
greetJane2("Hello"); //
greetJane2("xyz"); //

// const greetJane2 = p.greet.bind(anotherPerson22, ["Jammu", "hi"]);

greetJane2("Hello"); //

/* 
In this example, `bind` is used to create a new function `greetJane` that will always have `anotherPerson` as its execution context. When `greetJane` is called, the output will be `Hello, Jane!`.

These methods are powerful for controlling the `this` value within JavaScript functions and are particularly useful -----------------------in scenarios where you need to invoke functions with different contexts or create new functions with pre-defined contexts.----------------------------

dont directly gets invoked
returns us #copy of  function
take list as well as single  values
func which can invoke later
*/

// @C- call and apply
let objOne = {
  name: "cv",
  age: 20,
  printMessage: function () {
    console.log(this.name + " " + this.age);
  },
};
// objOne.printMessage();

let objTwo = {
  name: "singh",
  age: 20,
};
//function borrowing
objOne.printMessage.call(objTwo);

// -----
// good way to write above separate
let objA = {
  name: "riya",
  age: 24,
};

function printMessage(location) {
  console.log(this.name + " " + this.age + " from " + location);
}
c;
printMessage.call(objA, "Delhi");

let objB = {
  name: "singh",
  age: 44,
};
//function borrowing
//  person2.greet.call(anotherPerson2, ["Jammu", "Katra", "hsdbhsdbf"]);
printMessage.call(objB, "Jammu", "Katra"); //direct called .invoked here

// in apply we can pass the rest arguments as list
printMessage.apply(objB, ["Jammu", "Katra"]); //direct called
// -----------------------------

// @C- bind ,
// dont directly gets invoked
//returns us #copy of  function
//take list as well as single  values
// func which can invoke later
let ans = printMessage.bind(objB, ["Jammu", "Katra"]);
ans();
