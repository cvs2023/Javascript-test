console.log("Quiz.js");

/* console.log('👍'.length) */
/* 

JavaScript strings are represented using UTF-16 code units. Each code unit can be used to represent a code point in the [U+0000, U+FFFF] range – also known as the “basic multilingual plane” (BMP).

For code points beyond U+FFFF, you’d represent them as a surrogate pair. That is to say, two contiguous code units. For instance, the emoji '👍' code point is represented with the '\uD83D\uDC4D' contiguous code units.

String.length property returns the number of code units in the string. 
While this is usually the same as character length, using characters that are outside the BMP([U+0000, U+FFFF] range) can return a different length */

/* class A {
  static dev = "ABC";
  dev = "bigScale";
}

class B extends A {
  log() {
    console.log(this.dev);
  }

  static log() {
    console.log(this.dev);
  }
}

B.log();
new B().log();
 */

/* const a = 'ABC.dev'
if (!typeof a === 'string') {
  console.log('string')
} else {
  console.log('not a string')
} */

/* console.log(parseInt(" 1"));
console.log(parseInt(" 00001"));
console.log(parseInt(" 0100"));
console.log(parseInt(" 1e2 "));
console.log(parseInt(" 11e2 "));
console.log(parseInt(" 102e ")); */
/* The parseInt() function parses a string argument and returns an integer of the specified radix.
 Here, as a radix is not provided and the input string begins with a value other than 0x, the radix is assumed to be 10 (decimal). Before evaluating the number, all leading whitespaces are also trimmed.

The first three statements are straightforward.

However, although 1e2 technically encodes an integer i.e. 100 , here the result will be just 1. The reason for this is, when parseInt encounters a character that is not a numeral in the specified radix (example e is not a valid character), it ignores it and all succeeding characters and returns the integer value parsed up to that point. In this case, e2 part of string is ignored */

/* function A() {
  this.dev1 = "ABC";
  this.dev2 = "dev";
  return {
    dev1: "bigfrontend",
  };
}

const ab = new A();
console.log(ab);
console.log(ab.dev1);
console.log(ab.dev2); */

/* When a function is called with the new keyword, the function will be used as a constructor. This means, first a new object is created, that new object is prototype linked, and the new object is set as this binding.

Lastly, a copy of this object is returned if no explicit return is present.

However, in this case, since we are returning an object from A(), this return value becomes the result of the whole new expression. Hence, a.dev1 is actually bigfrontend and not ABC. Also, since returned object doesn't contain dev2 property, it logs undefined */

/*
const symbol = Symbol("ABC");

// console.log(symbol);

const a = {
  [symbol]: "ABCx",
  ABC: "ABCy",
};
console.log(a.ABC); //can access ?
console.log(symbol in a);
console.log("ABC" in a);
console.log(Object.keys(a).length);
*/
/* The in operator tests if a string or symbol property is present in an object or its prototype chain. In this example, in returns true for both keys.

The Object.keys() method returns an array of a given object's own enumerable string-keyed property names. 
-----This excludes symbols (presumably for backward compatibility since pre-es6 code might not be handling symbol keys). That's why, Object.keys(a) will only consider the key ABC, and length of the returned array will be 1 */

/* 
console.log(1);

const promise = new Promise((resolve) => {
  console.log(2);// this code runs synchronously
  resolve();
  console.log(3); // this code runs synchronously
});

console.log(4);

promise
  .then(() => {
    console.log(5);
  })
  .then(() => {
    console.log(6);
  });

console.log(7);

setTimeout(() => {
  console.log(8);
}, 10);

setTimeout(() => {
  console.log(9);
}, 0);
 */
/* The reason why the code in the promise's callback function runs synchronously is because the promise object is resolved immediately.
 The promise object is not resolved after the resolve() function is called, but it is resolved before the code in the callback function is run. */

var foo = 1;
(function () {
  console.log(foo);
  foo = 2;
  console.log(window.foo);
  console.log(foo);
  var foo = 3;
  console.log(foo);
  console.log(window.foo);
})();
