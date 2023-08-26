/*
numbers.map( fun ) 
numbers -> hof
fun as param is callbackfun

Defination
Higher-order functions are functions that take one or more functions as arguments and/or return a function as their result. They are a fundamental concept in functional programming and can be used to create more modular and reusable code.

// 1-
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map((num) => num * num;); // map take a function as arg

console.log(squares); // [1, 4, 9, 16, 25]


Sure, I'd be happy to explain higher-order functions in JavaScript!

In JavaScript, a higher-order function is a function that takes one or more functions as arguments, or returns a function as its result. In other words, a higher-order function treats functions as first-class citizens.

One of the most common examples of a higher-order function in JavaScript is the Array.prototype.map() method. This method takes a function as an argument, and applies that function to each element of an array, returning a new array with the transformed values. Here's an example:

typescript
Copy code
const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map(function(number) {
  return number * 2;
});

console.log(doubledNumbers); // [2, 4, 6, 8, 10]
In this example, the map() method is the higher-order function, and the function passed to it (the anonymous function that multiplies each number by 2) is the callback function.

Another example of a higher-order function is the Array.prototype.filter() method. This method takes a function as an argument, and applies that function to each element of an array, returning a new array with only the elements that pass the filter. Here's an example:

typescript
Copy code
const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter(function(number) {
  return number % 2 === 0;
});

console.log(evenNumbers); // [2, 4]

In this example, the filter() method is the higher-order function, and the function passed to it (the anonymous function that checks if a number is even) is the callback function.

Higher-order functions are an important concept in functional programming, and are widely used in JavaScript. They allow you to write more modular and reusable code, and can make your code more concise and expressive.


-----------------
// 2-
const numbers = [1, 2, 3, 4, 5];
const isEven = (num) => num % 2 === 0;
const evens = numbers.filter(isEven);
console.log(evens); // [2, 4]

3-
const numbers = [1, 2, 3, 4, 5];
const sum = (accumulator, currentValue) => accumulator + currentValue;
const total = numbers.reduce(sum, 0);
console.log(total); // 15

4-
const numbers = [1, 2, 3, 4, 5];
const printNumber = (num) => console.log(num);
numbers.forEach(printNumber); // logs each number to the console


5-
const numbers = [4, 2, 8, 1, 9, 5];

// Sort the numbers in ascending order
const sortedNumbersAsc = numbers.sort((a, b) => a - b);
console.log(sortedNumbersAsc); // [1, 2, 4, 5, 8, 9]

// Sort the numbers in descending order
const sortedNumbersDesc = numbers.sort((a, b) => b - a);
console.log(sortedNumbersDesc); // [9, 8, 5, 4, 2, 1]
sort(): a function that takes an array and a function as arguments, applies the function to each pair of elements in the array, and returns a new sorted array.
The function passed as an argument to sort() should take two arguments that represent each pair of elements to be compared.
The function should return a negative value if the first element is less than the second, a positive value if the first element is greater than the second, and zero if they are equal.
If no function is passed as an argument to sort(), the elements will be converted to strings and sorted alphabetically.
The original array is modified in place, so be careful not to lose the original order of the elements if that is important.



// createGreeter is func Generator -- use in builder and factory design
function createGreeter(greeting) {
  function greet(name) {
    console.log(greeting + " " + name + "!");
  }

  return greet; //return fun defi
}

const gm = createGreeter("Good Morning");
console.log(gm);
const ge = createGreeter("Good Evening");

gm("Scaler");
ge("Scaler");
*/
