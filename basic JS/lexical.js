/*
@C- LEXICAL SCOPE 
@- lexical environment - whenever a execution context is created on invoking a function a lexical environment also created.
its local memory along with the lexical environment of its parent 


Lexical scoping and lexical environment are related concepts, but they are not exactly the same thing in JavaScript.

Lexical scoping refers to the way that the scope of a variable or function is determined by its location in the source code at the time of compilation. 
In other words, the scope of a variable is determined by the static structure of the code.

On the other hand, a lexical environment is the internal data structure that JavaScript uses to keep track of identifiers (such as variable and function names) and their corresponding values. 
Each function invocation creates a new lexical environment, which contains a reference to the outer lexical environment (i.e., the environment of the function that contains the current function).

So while lexical scoping determines the visibility of variables and functions, 
lexical environments are the actual data structures that hold the values of those variables and functions.

In summary, lexical scoping and lexical environments are related but distinct concepts in JavaScript.



The concept of lexical scoping means that the availability of variables is determined by their location in the source code during the lexical analysis phase. In this example, `innerFunction` has access to variables defined in its parent scope (`outerFunction`) because it was lexically defined within that scope.

The lexical environment is a data structure that holds variable and function declarations within a specific scope. It allows variables to be resolved and accessed during runtime. In this example, both `outerFunction` and `innerFunction` have their own lexical environments, which hold their respective variable declarations (`outerVariable` and `innerVariable`).

*/

/* 

function outerFunction() {
  var outerVariable = 'I am outside!';

  function innerFunction() {
    var innerVariable = 'I am inside!';
    console.log(outerVariable); // Access outerVariable from the outer scope
    console.log(innerVariable); // Access innerVariable from the inner scope
  }

  innerFunction(); // Call the inner function
}

outerFunction(); // Call the outer function


In this example, we have two nested functions: `outerFunction` and `innerFunction`. The `innerFunction` is defined inside the `outerFunction`. 

Here's what happens during execution:

1. When `outerFunction` is called, a new execution context is created for it. The lexical environment for `outerFunction` is created, which includes the `outerVariable` declaration.

2. Inside `outerFunction`, `innerFunction` is defined. The `innerFunction` has its own lexical environment, which includes the `innerVariable` declaration.

3. When `innerFunction` is called, a new execution context is created for it. The lexical environment for `innerFunction` is created, and it has access to the variables in its own lexical scope (i.e., `innerVariable`) as well as the variables in its outer lexical scope (i.e., `outerVariable`).

4. Inside `innerFunction`, we log the values of `outerVariable` and `innerVariable`. Since `innerFunction` has access to its outer lexical scope, it can access the value of `outerVariable` defined in `outerFunction`.

The concept of lexical scoping means that the availability of variables is determined by their location in the source code during the lexical analysis phase. In this example, `innerFunction` has access to variables defined in its parent scope (`outerFunction`) because it was lexically defined within that scope.

The lexical environment is a data structure that holds variable and function declarations within a specific scope. It allows variables to be resolved and accessed during runtime. In this example, both `outerFunction` and `innerFunction` have their own lexical environments, which hold their respective variable declarations (`outerVariable` and `innerVariable`).
*/
