/* 
IIFE: immediately invoked function expression
IIFE is often used to create a local scope and prevent polluting the global scope with variables and functions.
 The function is immediately invoked by adding () at the end. This creates a self-contained scope where any variables or functions declared inside the IIFE are not accessible from the outside
*/

/* let a = 10;

(function () {
  //apna he scope hai iska
  let x;
  let y;

  console.log(a, "hello");
})();

x; // doesn't exist here
 */
/* (function () {
  // IIFE code goes here
  var message = "Hello, IIFE!";
  console.log(message);
})(); */

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
})(); // What's the output?

/* The primary benefits of using IIFEs are:

Encapsulation: The variables and functions defined inside the IIFE are local to that scope and do not interfere with other parts of the code. This helps prevent naming conflicts and keeps the global scope clean.

Data privacy: By enclosing variables and functions within an IIFE, you can control their visibility and prevent direct access from the outside. This can be useful when creating modules or libraries.

Here's another example that demonstrates the encapsulation and data privacy aspects: */

var counter = (function () {
  var count = 0;

  return {
    increment: function () {
      count++;
    },
    decrement: function () {
      count--;
    },
    getCount: function () {
      return count;
    },
  };
})();

console.log(counter.getCount()); // Output: 0

counter.increment();
counter.increment();
console.log(counter.getCount()); // Output: 2

counter.decrement();
console.log(counter.getCount()); // Output: 1

/* MORE--
Before the release of ES6 (ECMAScript 2015), JavaScript developers faced several challenges when writing code. Some of the major problems included:

Lack of block scoping: In pre-ES6 JavaScript, variables defined with the var keyword were function-scoped, which meant that they were accessible throughout the entire function, even if they were defined inside a block. This made it difficult to control the scope of variables and led to unexpected behavior.

No built-in module system: Pre-ES6 JavaScript did not have a built-in module system, which made it difficult to organize code into reusable modules. Developers had to rely on third-party libraries or use workarounds like immediately-invoked function expressions (IIFEs) to create private scopes.

Inconsistent handling of this: In pre-ES6 JavaScript, the value of this inside a function depended on how the function was called, which often led to confusion and errors. Developers had to use bind, call, or apply to manually bind this to the desired value.

Limited support for iteration: Pre-ES6 JavaScript had limited support for iterating over collections, which made it difficult to work with arrays and objects. Developers often had to use loops or custom iterators to iterate over data structures.

No built-in promises: Pre-ES6 JavaScript did not have a built-in way to handle asynchronous operations, which made it difficult to write maintainable and scalable code. Developers had to rely on callback functions or third-party libraries like jQuery to handle async operations.

Limited support for classes and inheritance: Pre-ES6 JavaScript had limited support for object-oriented programming, which made it difficult to create reusable code. Developers often had to use prototypal inheritance or constructor functions to create objects with shared behavior.

Overall, the lack of modern language features made it difficult to write maintainable, scalable, and efficient JavaScript code. The release of ES6 addressed many of these problems and introduced several new features that made JavaScript a more powerful and expressive language.



 */
/* Advance RND

IIFEs have several real-world use cases and are widely used in JavaScript development. While their usage has decreased with the introduction of modern JavaScript modules and module bundlers, IIFEs are still relevant and can be beneficial in certain scenarios. Here are a few examples of real use cases for IIFEs:

Encapsulating code: IIFEs provide a way to encapsulate code and prevent variable and function names from polluting the global scope. This is especially useful when you have multiple scripts or libraries on a page that need to coexist without conflicts.

Avoiding naming collisions: When working with third-party scripts or multiple developers, there is a risk of naming collisions between variables and functions. By wrapping your code in an IIFE, you create a private scope that helps mitigate this issue.

Creating modules: IIFEs can be used to create modular code structures. You can define private variables and expose a public interface through a returned object or function. This allows you to maintain encapsulation and control the accessibility of your code.

Implementing private variables and data privacy: JavaScript does not have built-in support for private variables. However, using IIFEs, you can achieve data privacy by defining variables within the IIFE scope that are inaccessible from the outside. This is particularly useful when you want to expose a limited set of methods or properties while keeping the internal state hidden.

While IIFEs have been widely used, it's worth noting that with the advancements in JavaScript, their usage has decreased in favor of other module systems like CommonJS, AMD, and, more recently, ES modules. These module systems provide better support for dependency management, code organization, and code sharing across different files.

However, IIFEs can still be useful in scenarios where you don't have access to a module system or when you want to create a self-contained unit of code without the need for external dependencies or build tools.

Ultimately, whether to use IIFEs or not depends on the specific requirements and constraints of your project. It's recommended to consider modern module systems and bundlers if available, but IIFEs remain a valid tool in certain situations where encapsulation and scope isolation are necessary.
*/
