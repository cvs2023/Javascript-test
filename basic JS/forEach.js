/* 
1	The forEach() method does not returns a  new array based on the given array.It @--Changes DONT the original array	

const arr = [1, 2, 3];

arr.forEach(function (e, i, arr) {
  e * 2;
});
console.log(arr);


The map() method returns an entirely new array.
2	The forEach() method @-----returns “undefined“.	
The map() method returns the newly created array according to the provided callback function.
3	The forEach() method doesn’t return anything hence the @-----method chaining technique cannot be applied here. 	
With the map() method, we can chain other methods like, reduce(),sort() etc.

4.	It is not executed for empty elements.	
It does not change the original array.
 */

const mapResult = arr.map((i) => i + 2);
const forEachResult = arr.forEach((i) => i + 4);

console.log(mapResult, forEachResult, arr);

console.log(arr.forEach((i) => i + 4));

const arr = [1, 2, 3];

// const mapResult = arr.map((i) => i + 2);
// const forEachResult = arr.forEach((i) => i + 4);

// console.log(mapResult, forEachResult, arr);

// console.log(arr.forEach((i) => i + 4));

/* const arr = [1, 2, 3];
const newArr = arr.map(function (e) {
  return e * 2;
});

console.log(newArr); // [2, 4, 6]
console.log(arr); // [1, 2, 3] */

/* normal forloop and foreach 
foreach -
The forEach function can be used to make this code more succinct. This is an array method that “automatically” loops through the list. In other words, it handles the details of initializing and incrementing a counter.

Instead of the above, where you manually index into strings, you can call forEach and receive the next string on every iteration. The updated version would look something like this:
This is very close to the initial function. But it removes the need for the i counter, making your code more readable.

This also introduces a major pattern you’ll see time and time again. Namely: it’s best to use methods on Array.prototype that abstract away details like initializing and incrementing counters. That way, you can focus on the important logic.
 There are several other array methods that this article will discuss. Moving forward, you will be using encryption and decryption to fully demonstrate what these methods can do.
*/
const array1 = ["a", "b", "c"];

array1.forEach((element) => console.log(element));

// Expected output: "a"
// Expected output: "b"
// Expected output: "c"

/* const arraySparse = [1, 3 , empty , , 7];
let numCallbackRuns = 0;

arraySparse.forEach((element) => {
  console.log({ element });
  numCallbackRuns++;
});

console.log({ numCallbackRuns });

// { element: 1 }
// { element: 3 }
// { element: 7 }
// { numCallbackRuns: 3 } */

/* const ratings = [5, 4, 5];
let sum = 0;

const sumFunction = async (a, b) => a + b;

ratings.forEach(async (rating) => {
  sum = await sumFunction(sum, rating);
});

console.log(sum);
// Naively expected output: 14
// Actual output: 0 */
