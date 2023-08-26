/*
Currying is a technique used in JavaScript and other programming languages to transform a function that takes multiple arguments into a series of functions that each take a single argument.

The advantage of currying is that it can make it easier to create new functions that are variations of existing functions. By creating a series of functions that each take a single argument, you can combine them in different ways to create new functions that have different behavior. This can be especially useful in functional programming, where functions are ---------treated as first-class citizens and can be passed around as values.


two ways to do this currying



*/

/* 1-bind
create copy of a method, create more methods from it by presetting some arguments inside the function */

let multiply = function (x, y) {
  console.log(x * y);
};
const multiplyBy2 = multiply.bind(this, 2);
multiplyBy2(2);

const multiplyBy3 = multiply.bind(this, 2);
multiplyBy2(3);

//--------------------------------

function outer(x) {
  function inner(y) {
    console.log(x * y);
  }
  return inner;
}
let a = outer.bind(this, 5); //first param sent
console.log(a);
a(6)(5); //second param is 5 not 6
a()(5);
//------------------------------------

/* 2- closurej. */

/* 1 */

let mul = function (x) {
  return function (y) {
    console.log(x * y);
  };
};
const mulBy2 = mul(2);
mulBy2(2);
///----------------------------------
//-----------------------------------
function outer(x) {
  return function inner(y) {
    console.log(x * y);
  };
}
let ab = outer(5);
ab(6);

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, cur) => acc + cur, 0);
console.log(sum); // Output: 15

//interview
// infinte currying
function add(a) {
  return function (b) {
    if (b) return add(a + b);
    return a;
  };
}
console.log(add(5)(4)());

console.log(add(5)());
console.log(add(5));
console.log(add(5)(8));
