/*
INTRO--
what is promise - 
ans 1 - promise is a obj which represents eventually creation of an async operation
ans 2 - promise is a obj which eventually gets filled with data after async operation

handling async using callback
1-using callback we got inversion of control problem kisi aur ko de diya
  solved- using promise object and that promise obj will be eventually filled with async operartion and we attach that with a callback function and whenever promised resolved
  the callback will be automatically called by promises
  --give gaurenti and trust in our transaction
  how  ? we resolve promise only once and it has three states and we can pass this wherever we want this object without caring about mutability


2-using callback problem comes callback hell
use promise chaining to handle this issue
it will help us code to grow vertically not 



@C - callback async
call back helps us to write code in asynchoronus way in js
asynchoronus exists because call back exists
*/
console.log("js");
setTimeout(function () {
  console.log("two ruk gya");
}, 5000);
console.log("three");
/*
in createorder first passed function jisme proceed payment as a callback chlega
fir proceed payment hokr he showOrderSummary ho toh hmne proceed k callback mai daldiya agla

problem -- unreadable and unmaintainable
but we end in this callback hell

TWO ISSUES-
1- callback hell -ek k andr ek
2- Inversion of control - command kisi aur ko, aur pta ni chlega yan nhi , kitni vaar
*/

//KNOWN AS PYRAMID OF DOOM
const items = ["ata", "alu"];
api.createOrder(items, function () {
  api.proceedPayment(function () {
    api.showOrderSummary(function () {
      api.updateWallet();
    });
  });
});

//INVERSION OF CONTROL-loose we contorl whne we use callback
//we blindly gave control to createorder api of call of our function back ie proceed payment
const i = ["ata", "alu"];
api.createOrder(i, function () {
  api.proceedPayment();
});

/*----------------------------------------------------
@C- promise
solution--
promise will hold the data then as soon as promise filled will data 
it will automatically call the callback function


const i = ["ata", "alu"];
api.createOrder(i, function () {
  api.proceedPayment();
});

here above callback is passed to some other function ,
   toh wo chle na chle , 
    kb chle , kitne bar chle ,
       what is written inside that code we dont know


here below attaching a call back function to promise objec
so as soon as promise mai kuch ayega our .then code will run , adn will run only once guarantee by js


*/

const cart = ["ata", "alu"];
const promise = api.createOrder(cart); //YOU CANNOT ADD ANYTHING IN PROMISE NOW < MUTATE NHI HO SKTA HAI
promise.then(function (orderId) {
  api.proceedPayment(orderId);
});

// returning promise , then attaching a callback promise to it

/*
@C-FETCH- is an api given by browser to us to make external call

SEE IN DEBUGGER
Promise have two things one is 
  promisestate = pending ----initially rhegi jaise he data 4-5 sec mai aya toh state change
  promiseresult = undefined --- jb tk data ata ni jaise he aya 
  promiseresult = response

Promise states- pending.fullfiled,rejected  THIS BRINGS TRUST IN TRANSACTION

              IT IS RESOLVE ONCE _ YEH PRO HAI -either fullfilled ,pending or failed -----------------------
              Unmutatable -----------------------
              can be passsed anywhere-----------------------
*/
const api = "usdhsdf";
const user = fetch(api); //as soon as this is fetch fun is called a promise obj is going to be returned inside user
console.log(user); //CANNOT MUTATE THIS DATA

user.then(function (data) {
  console.log(data);
});

// ---------------------
//THIS IS PROMISE CHAINING - help krti hai jb hmare pass bahut sare callback ho jo hme attwch krne hain

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
/*
@C-  promise chaining - helps us to solve callback hell problem
always return

One of the powerful features of Promises is the ability to chain them together, which allows you to execute a sequence of asynchronous operations in a specific order.

To chain Promises in JavaScript, you can use the .then() method. This method is called on a Promise object and takes a callback function as its argument. The callback function takes the result of the previous Promise as its argument and returns a new Promise. Here is an example:


In this example, we are making a request to an API to get some data. The fetch function returns a Promise that resolves with a Response object. We then call the .json() method on the Response object to extract the JSON data from the response.

The second .then() method takes the data from the previous Promise as its argument and logs it to the console. This .then() method also returns a new Promise that resolves with undefined.

Finally, we have a .catch() method that catches any errors that occur during the Promise chain.

You can chain as many .then() methods as you need, but remember to always end with a .catch() method to handle any errors that may occur in the chain.
*/

/////////////////////////////////////////////////////////////////////////////
/* CREATE A PROMISE */
