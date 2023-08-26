// higher-order functions and closures are related concepts in JavaScript, and often go hand-in-hand when writing functional-style code.
function createCounter() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
}

const counter = createCounter();

counter(); // logs 1
counter(); // logs 2
counter(); // logs 3
/**
 A closure is created whenever a function accesses a variable that is declared outside of its own scope. The closure "closes over" the variable, meaning that it retains a reference to the variable even after the outer function has returned. Closures allow for persistent state in a function, which can be useful for implementing things like private variables or memoization.

Higher-order functions often involve closures, because they often involve passing a function as an argument to another function. When a function is passed as an argument to another function, it can create a closure over any variables that are declared in the outer scope of the function. This can be useful for implementing things like callbacks or currying.

*/

const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter(function (number) {
  return number % 2 === 0;
});

console.log(evenNumbers); // [2, 4]
/*
In this example, the filter() method is the higher-order function, and the function passed to it (the anonymous function that checks if a number is even) is the callback function.

Higher-order functions are an important concept in functional programming, and are widely used in JavaScript. They allow you to write more modular and reusable code, and can make your code more concise and expressive.
 */

/*---------------------------------------------
@C- LEXICAL SCOPE 
Lexical scoping- refer to scope of var based ki kidr define hai
- determined at compile time
- it does not change based on how or where the function is called


@- lexical environment - whenever a execution context is created on invoking a function a lexical environment also created.
its --------local memory along with the lexical environment of its parent  --------


Lexical environment-is a data structure that stores identifier-variable bindings and maintains a reference to the outer or parent lexical environment.
It's a runtime concept that holds information about variables, their values, and their relationships within a specific scope.
When a function is executed, a new lexical environment is created for that function's scope. This environment holds the function's variables and any references to outer environments.
This allows for the concept of closures, where a function retains access to variables from its outer scope even after the outer function has finished executing.


*/
function outer() {
  var outerVar = "I am from outer";

  function inner() {
    var innerVar = "I am from inner";
    console.log(outerVar); // inner can access outerVar
  }

  return inner;
}

var closureFunc = outer();
closureFunc(); // This will log 'I am from outer'

/*
Here's what happens during execution:

1. When `outerFunction` is called, a new execution context is created for it. The lexical environment for `outerFunction` is created, which includes the `outerVariable` declaration.

2. Inside `outerFunction`, `innerFunction` is defined. The `innerFunction` has its own lexical environment, which includes the `innerVariable` declaration.

3. When `innerFunction` is called, a new execution context is created for it. The lexical environment for `innerFunction` is created, and it has access to the variables in its own lexical scope (i.e., `innerVariable`) as well as the variables in its outer lexical scope (i.e., `outerVariable`).

4. Inside `innerFunction`, we log the values of `outerVariable` and `innerVariable`. Since `innerFunction` has access to its outer lexical scope, it can access the value of `outerVariable` defined in `outerFunction`.

The concept of lexical scoping means that the availability of variables is determined by their location in the source code during the lexical analysis phase. In this example, `innerFunction` has access to variables defined in its parent scope (`outerFunction`) because it was lexically defined within that scope.

The lexical environment is a data structure that holds variable and function declarations within a specific scope. It allows variables to be resolved and accessed during runtime. In this example, both `outerFunction` and `innerFunction` have their own lexical environments, which hold their respective variable declarations (`outerVariable` and `innerVariable`).
---------------------------------------------
*/

/* Execution Context:

An execution context represents the environment in which JavaScript code is executed. It includes the current scope, the value of the this keyword, and other contextual information.
Each time a function is invoked, a new execution context is created.
The execution context manages the flow of code execution, tracks variable values, and maintains the call stack (the order in which functions are called).







A lexical environment is a data structure that holds variable and function declarations. It also includes a reference to the outer (parent) lexical environment, which creates a chain of environments.
Lexical environments are used to resolve variable names and determine where variables are located in the scope chain.
When a function is invoked, a new lexical environment is created to hold its local variables and function declarations. This environment has a connection to its parent lexical environment (the environment where the function was defined).
In summary, an execution context is a broader concept that encompasses the environment in which code is executed, including both the lexical environment and additional execution-related information. The lexical environment is a component of the execution context that specifically deals with variables, their values, and their relationships within a certain scope.

Think of it this way: An execution context is like a room where you're doing something, and the lexical environment is like a shelf in that room where you keep your things (variables). The room itself includes the environment, but the shelf (lexical environment) is where you focus on organizing and accessing your stuff (variables).
*/
