/* aysnc history imp


JavaScript has always had support for asynchronous programming, but the mechanisms and techniques for handling asynchronous operations have evolved over time. 

In the early days of JavaScript, the language primarily focused on handling synchronous operations.
===========================================================================
However, with the introduction of technologies like @XMLHTTPRequest (XHR) in 1999, developers started utilizing asynchronous techniques more prominently.
==============
The XHR object allowed developers to send HTTP requests and receive responses asynchronously without blocking the user interface. This marked a significant shift towards asynchronous programming in JavaScript.

In recent years, JavaScript has seen further advancements in asynchronous programming with the introduction of  
---------------Promises in ECMAScript 6 (ES6) in 2015-------------.
 Promises provide a cleaner and more structured way to handle asynchronous operations, enabling developers to write code that is easier to read and maintain.

@@@@@@@@@@@@@@@@@@@@@@@@---------------Furthermore, ECMAScript 2017 introduced async/await------, which is built on top of Promises. async/await simplifies asynchronous programming even further by allowing developers to write asynchronous code that looks and behaves like synchronous code, making it easier to understand and reason about.

So, while JavaScript has supported asynchronous programming since the introduction of -------------XHR, the language has evolved to provide better tools and techniques for handling asynchronous operations, making it more efficient and developer-friendly.
*/

/*
===========================================================================
async/await is a feature in JavaScript that was introduced in ES2017 to simplify working with asynchronous code that uses promises.

The async keyword is used to define an asynchronous function, which returns a promise. 
Inside the function, the await keyword can be used to pause the execution of the function until a promise is resolved, returning the result of the resolved promise.

Here's an example of an async/await function:

javascript
Copy code
async function getUser() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const user = await response.json();
    console.log(user);
  } catch (error) {
    console.error(error);
  }
}
In this example, getUser() is an asynchronous function that uses the await keyword to pause execution until the fetch() promise is resolved with the JSON response from the API. The response.json() method is also awaited to convert the response to a JavaScript object.

The try/catch block is used to handle any errors that may occur during the execution of the function.

async/await can make code that uses promises easier to read and write, and can help avoid "callback hell" where multiple nested callbacks are required to handle asynchronous code.





User
creator of js ?
ChatGPT
Brendan Eich is the creator of JavaScript. He created the initial version of the language in just 10 days in May 1995 while working at Netscape Communications Corporation. The first version of JavaScript was originally called Mocha, then it was briefly renamed to LiveScript before finally being named JavaScript.

Since then, JavaScript has become one of the most widely used programming languages in the world, powering many of the interactive features on the web, as well as server-side applications, desktop applications, and even mobile applications.





User
creator of react ?
ChatGPT
React was created by Jordan Walke, a software engineer at Facebook. He first publicly announced React at the JSConf conference in May 2013. React was initially used internally at Facebook, but was later open-sourced in May 2013. Since then, it has become one of the most popular JavaScript libraries for building user interfaces, and is widely used by developers and companies around the world.
*/
