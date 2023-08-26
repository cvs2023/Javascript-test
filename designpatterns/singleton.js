console.log("WELCOME TO SINGLETON");

/* 
const singleton = (function () {
  let instance = null;

  function createInstance() {
    return {
      name: "cv",
      age: 25,
      score: Math.floor(Math.random() * 5),
    };
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
  //try this if else thing
  // return {
  //   getInstance: function () {
  //     if (!instance) {
  //       instance = createInstance();
  //     }else{
  //     return instance;  //else part
  // }
  //   },
  // };
})();

const i1 = singleton.getInstance(); //same obj
const i2 = singleton.getInstance(); //same obj
console.log(i1);
console.log(i2);

*/
/*
example 2-

function Process( state ){
    this.state = state;
}
const singleton = (function () {

  function processManager (){
    this.numProcess = 0;
  }

  function createInstance() {
    pManager = new processManager();
    return pManager;
  }

  let instance = null;
  return {
    getInstance: ()=> {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };

})();

const i1 = singleton.getInstance(); //same obj
const i2 = singleton.getInstance(); //same obj
console.log(i1);
console.log(i2);

*/
const Singleton = (function () {
  let instance;

  function createInstance() {
    // Private members and methods
    const privateVariable = "I am private";

    function privateMethod() {
      console.log("I am a private method");
    }

    return {
      // Public methods and properties

      publicMethod: function () {
        console.log("I am a public method");
      },

      publicVariable: "I am public",

      getPrivateVariable: function () {
        return privateVariable;
      },
    };
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

// Usage
const singletonInstance1 = Singleton.getInstance();
const singletonInstance2 = Singleton.getInstance();

console.log(singletonInstance1 === singletonInstance2); // Output: true

singletonInstance1.publicMethod(); // Output: I am a public method
console.log(singletonInstance1.publicVariable); // Output: I am public
console.log(singletonInstance1.getPrivateVariable()); // Output: I am private

/*
In this example, we create a closure using an immediately-invoked function expression (IIFE). Inside the IIFE, we define a private variable and a private method. These are accessible only within the createInstance function. The createInstance function returns an object with public methods and properties that can be accessed outside the closure.

The getInstance method is responsible for creating and returning the singleton instance. It checks if an instance already exists and only creates a new one if it doesn't. This ensures that there's only one instance throughout the application.

Now let's discuss the differences between implementing the Singleton pattern in JavaScript and Java:

Syntax: In Java, the Singleton pattern typically involves creating a class with a private constructor, a static method to retrieve the instance, and a static variable to hold the single instance. JavaScript, being a dynamic language, doesn't have strict access modifiers or static variables. 
--Therefore, we use closures and immediate functions to achieve encapsulation and emulate private variables and methods.

Class Inheritance: In Java, you can create a subclass of a Singleton class. The subclass can inherit the Singleton behavior and extend its functionality. 
--In JavaScript, you can't create subclasses of a Singleton instance because the instance is an object literal. However, you can still extend the functionality of the Singleton instance by adding new properties and methods to it.

Thread Safety: In Java, you can use the synchronized keyword to ensure thread safety when initializing the Singleton instance. 
-- //? In JavaScript, the Singleton pattern is inherently single-threaded because JavaScript is single-threaded by nature. Therefore, you don't need to worry about thread safety in JavaScript.

@-- //? It's worth noting that the Singleton pattern is often considered an anti-pattern in JavaScript, as it introduces global state and can make 
@ //TODO------testing and debugging more challenging. 
@-- //? It's generally recommended to favor dependency injection and modular design over the Singleton pattern in JavaScript applications.
*/

/* 

@ -- //?In JavaScript, it's generally recommended to use other patterns or techniques instead of the Singleton pattern, due to its potential drawbacks and limitations. Here are a few alternatives that you can consider:

@-- //TODO 1- Module pattern: The module pattern allows you to create encapsulated code and achieve similar benefits to the Singleton pattern without the global state. It involves using immediately-invoked function expressions (IIFE) to create private variables and methods, and returning only the necessary public interface. This pattern promotes modularity and encapsulation while avoiding global state.

@-- //TODO 2- Dependency Injection: Instead of relying on a global Singleton instance, you can pass dependencies explicitly to the functions or objects that require them. This promotes loose coupling and testability. Dependency Injection frameworks like InversifyJS or Angular's Dependency Injection can help manage dependencies in a more structured manner.

@-- //TODO 3- Revealing Module pattern: This pattern is an extension of the module pattern and allows selective exposure of public methods and properties, while keeping others private. It provides a clear interface for using the module.


 @ //? It encapsulates private variables and methods within a closure and exposes a public interface to interact with the singleton instance.However, it's worth noting that the module pattern is not a true Singleton pattern in JavaScript. While it provides encapsulation and restricts access to private members, it allows creating multiple instances of the module by invoking the module function again. 
*/

const module = (function () {
  // Private variables and methods
  let instance = null;
  function createInstance() {
    const privateVariable = "I am private";

    function privateMethod() {
      console.log("I am a private method");
    }

    // Public methods and properties
    function publicMethod() {
      console.log("I am a public method");
    }

    return {
      publicMethod: publicMethod,
      publicVariable: "I am public",
    };
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = module();
      }
      return instance;
    },
  };
})();

// Usage
module.publicMethod(); // Output: I am a public method
console.log(module.publicVariable); // Output: I am public

/*CONS OF MODULE SINGLETON
Not a true Singleton: The module pattern does not strictly enforce the Singleton pattern's rule of having only one instance throughout the application. It allows creating multiple instances by invoking the module function multiple times. This means that if you mistakenly create multiple instances, you lose the Singleton behavior.

Lack of strict encapsulation: While the module pattern provides encapsulation by keeping private variables and methods hidden from the outer scope, it doesn't provide true access control or encapsulation. JavaScript does not have native access modifiers like private or protected, so it's still possible for external code to access or modify private members if they have a reference to the module instance.

Difficulties with inheritance: The module pattern does not lend itself well to inheritance. In JavaScript, you cannot create subclasses or extend the functionality of a module instance. This can limit the flexibility and extensibility of your code if you require inheritance-related capabilities.

Harder to test: The module pattern can make unit testing more challenging. Since private variables and methods are not directly accessible from outside the module, it becomes more difficult to write isolated tests for them. You may need to rely on indirect testing through the public interface, which can be less precise and increase the risk of overlooking potential issues.

Tight coupling: When using the module pattern, the modules themselves often become tightly coupled to each other. If one module depends on another module's instance, it creates a direct dependency that can hinder code reusability and maintainability. In contrast, other patterns like dependency injection promote loose coupling by allowing dependencies to be injected from the outside.

*/

/*

Cons of the Singleton design implemented in the code you provided:

Global state: The Singleton pattern introduces a global state that is accessible from anywhere in the codebase. This can make the code harder to reason about and lead to potential issues with data consistency and synchronization.

Potential for misuse: The global accessibility of the Singleton instance can tempt developers to rely on it excessively, leading to tight coupling and decreased modularity. It may encourage a procedural programming style rather than a more modular and object-oriented approach.

Difficulties with testing: Singleton instances can make unit testing more challenging. Due to their global nature, they can create dependencies between tests and make it harder to isolate and mock their behavior. Testing may require additional setup or teardown to ensure consistent results.

Concurrency issues: In concurrent or multi-threaded environments, the Singleton pattern may introduce race conditions or synchronization problems. If multiple threads attempt to access or modify the Singleton instance simultaneously, unexpected behavior or data corruption may occur.

Comparison of the Singleton pattern with the Module pattern:

Module Pattern:

Pros:

Provides encapsulation and information hiding by defining private variables and methods.
Allows the creation of multiple instances, promoting modularity and reusability.
Supports loose coupling and dependency management through explicit parameter passing or dependency injection.
Cons:

Does not enforce the Singleton pattern's rule of having only one instance throughout the application.
Lack of true access control and encapsulation in JavaScript.
Difficulties with inheritance and extending module functionality.
Can make unit testing more challenging due to limited access to private members.
Modules can become tightly coupled when one module depends directly on another's instance.
Singleton Pattern:

Pros:

Provides a single point of access to an instance, ensuring that only one instance exists.
Offers a global state accessible from anywhere, which can be useful for certain scenarios.
Can be helpful for managing shared resources or maintaining a single source of truth.
Cons:

Introduces a global state, potentially leading to coupling and decreased modularity.
Testing can become more difficult due to the global accessibility and potential dependencies.
Concurrency issues can arise in multi-threaded environments.
Can promote procedural programming style and hinder separation of concerns.
It's important to carefully consider the drawbacks and use cases of the Singleton pattern and evaluate whether it's the most appropriate solution for your specific scenario. In general, it's recommended to favor patterns and techniques that promote modularity, loose coupling, and explicit dependency management.
*/
