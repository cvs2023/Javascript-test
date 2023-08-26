//arrays
const a = [1, 2, , 3];
a[10] = 10;
console.log(a.length);
console.log(a);
a.length = 1;
console.log(a);

//comma operator
// The comma operator is typically used for specific cases where you want to evaluate multiple expressions in a single statement and only the value of the last expression matters

/* 
let a = (1, 2, 3, 5);
console.log(a);

// let a  = ( 1 , 2 ,3 ,"5",(()=>{
//     return 7
// })())
// let a  = ( 1 , 2 ,3 ,"5",()=>{
//     return 7
// })()

let a  = ( 1 , 2 ,3 ,"5",()=>{
    console.log("hi")
    return "heloo";
})()
console.log(a);

//use
let a = 0, b = 0, c = 0;

for (let i = 0; i < 5; i++) {
  a += i, b += i * 2, c += i * 3;
}

console.log(a); // 10 (0 + 1 + 2 + 3 + 4)
console.log(b); // 20 (0 + 2 + 4 + 6 + 8)
console.log(c); // 30 (0 + 3 + 6 + 9 + 12)
 */

const obj = {
  first: "1",
  "first-second": "cv",
};
console.log(obj.first);
console.log(obj["first-second"]);
console.log(obj.first - second); // second is not defined
var second = 10;
console.log(obj.first - second); //avoid - notation ,not able to use dot
console.log(obj.first - 1); //reason - is subtraction signn here

/* console.log(1 + -"1" + "2"); //02
console.log(1 + -"12" + "2"); //-112

console.log(typeof "0" + 1)
console.log(typeof 1 + "0")

const a = +"1"
console.log(typeof a )
 */

/* function foo() {
  //var bar = 10; // function
  return bar();

  function bar() {
    return "Hello from bar!";
  }
  function bar() {
    return "Hello again from bar!";
  }
}
console.log(typeof foo); //function */
/* function foo() {
  //var bar = 10;
  return bar();

  function bar() {
    return "Hello from bar!";
  }
  function bar() {
    return "Hello again from bar!";
  }
}
console.log(foo()); // What's the output? 2 */

/* The output will be 'Hello again from bar!'. In JavaScript, when there are multiple function declarations with the same name within the same scope, the last declaration "wins." 
In this case, both bar function declarations are within the scope of the foo function.
----- The second bar declaration overwrites the first one, and when foo is called, it returns the result of the second bar function, which is 'Hello again from bar!' */

/* var x = 10;
function foo() {
  console.log(x);
}
(function () {
  var x = 20;
  foo(); // 20
})();
 */

/* 
function a() {
  console.log("A");
}
var a;
console.log(a); //return function defination

Explanation: The variable a is declared as a function and then re-declared as a variable. Variable declarations are hoisted to the top of their scope, so when console.log(a) is executed, it refers to the function declaration of a.
*/

function f() {
  return f;
}
console.log(new f() instanceof f);
/* Explanation: The f function returns itself. When creating a new instance with new f(), the result is the f function itself, not an instance of f. Therefore, the instanceof check returns false. */

function yikes() {
  return Array(5).map(function () {
    return "Hi";
  });
}
console.log(yikes());
/* Explanation: The Array(5) constructor creates an array with five empty slots. The map function only works on defined elements, so it doesn't execute the inner function. The result is an array with five undefined elements. */

function foo() {
  return 1;
}
var bar = new foo();
console.log(bar);
/* The foo function is defined to return 1.
The new keyword is used to create a new instance of the foo function, as if it were a constructor.
When an object is created using the new keyword, it inherits the properties and methods from the function's prototype. In this case, the prototype of the foo function is an empty object (foo.prototype is an object).
The variable bar now holds an instance of the foo function, which is essentially an object. This instance inherits the properties of the function's prototype.
The console.log(bar); statement prints the value of the bar variable, which is the instance of the foo function.
Since the prototype of foo is an empty object, you see foo {} printed to the console. The instance of the foo function is an object, and the output reflects this fact.
 */
var x = 0;
function fooo() {
  this.x = x;
  return 1;
}
var bar = new fooo();
console.log(bar); // foo { x : 1}

var x = 0;
function foox() {
  x++;
  this.x = x;
  return foox;
}
var bar = new new foox()();
console.log(bar.x); //undefined
/* Explanation: The new foo creates a new instance of foo, and new creates a new empty object. The this inside foo refers to this new object. However, bar is assigned the result of new foo, and it doesn't have a property x, resulting in bar.x being undefined. 

First new foox() creates an instance of the foox function. This instance inherits the x property from the foox.prototype object. The global variable x is incremented, and the x property of the instance is set to 1.

Second new ...() uses the previously created instance as a constructor. This creates another instance, but this time the x property is not being modified since the x incrementation and property assignment happened in the previous step.

Finally, the variable bar holds the second instance created in the previous step.

The bar object has an x property inherited from the first instance, and it remains 1. Therefore, the output of console.log(bar.x); will be:

==================The critical point to understand here is that the chaining of ------new operators creates nested instances with inheritance, but the internal state modifications (incrementing x and assigning it to the x property) occur only in the first instance, which influences the property value of the final instance.

*/

var arr = [0];
var arr = [false];
if ([0]) {
  console.log("1");
  console.log(arr == true); //arr not coerced to boolena
} else {
  console.log(arr == false);
}
/* Explanation: The condition in the if statement evaluates to true because arrays are truthy values. However, the comparison arr == true results in false because arrays are not coerced to boolean true. */

var x = 10;
function y() {
  x = 100;
  console.log(x);
  return;

  function x() {}
}
y();
console.log(x);
/* Explanation: The function x inside y has no effect on the outer variable x since it's a different scope. After calling y(), the value of the global x remains 10. */

console.log(
  (function f(n) {
    return n > 1 ? n * f(n - 1) : n;
  })(3)
);
/* 
This code calculates the factorial of 10 using a recursive function. */

var x = 1;
if (function f() {}) {
  x += typeof f;
}
console.log(x);
/* Output: 1undefined

Explanation: The function f() {} is evaluated as truthy. typeof f results in 'undefined', and thus, x becomes 1undefined. */

/* function sum(...args) {
  function add(...newArgs) {
    return sum(...args, ...newArgs);
  }

  add.toString = function () {
    return args.reduce((total, num) => total + num, 0);
  };

  return add;
}

console.log(+sum(7)(6)(7)(4)); */

/* function sum(...args) {
  const add = function(...newArgs) {
    return sum(...args, ...newArgs);
  };

  add.valueOf = function() {
    return args.reduce((total, num) => total + num, 0);
  };

  return add;
}

console.log(+sum(7)(6)(7)(4)); // Output: 24
 */

/* function sum(...args) {
  function add(...newArgs) {
    return sum(...args, ...newArgs);
  }

  add.toString = function () {
    return args.reduce((total, num) => total + num, 0);
  };

  return add;
}

console.log(sum(7)(6)(7)(4).toString());  */
