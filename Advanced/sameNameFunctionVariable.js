//https://www.reddit.com/r/react/comments/15iz450/hoisting_with_same_variable_and_function_name/?rdt=35671#:~:text=The%201st%20Creation%20phase%20of,the%20variable%20with%20some%20value.&text=I%20modified%20the%20example%20to,to%20see%20what%20is%20happening.
console.log(typeof add); // Output: function
var add = 5;
function add() {}
console.log(typeof add); // Output: number

/* function a() {
  return 1;
}
//coz
console.log(a()); //1

var a = function a() {
  return 2;
};
console.log(a()); //2 */

function a() {
  return 1;
}
console.log(a()); //2
var a = function () {
  return 2;
};
console.log(a()); //2

/*
function a() {
  return 1;
}

var a = function() {
  return 2;
};
console.log(a());//2

*/

function foo() {
  var bar = 10;

  function bar() {
    return "Hello from bar!";
  }
  return bar; //number
  return bar(); //bar not function

  function bar() {
    return "Hello again from bar!";
  }
}
console.log(typeof foo); //function
console.log(typeof foo()); //number

console.log("Welcome to Programiz!");
function foo() {
  var bar = 10; //
  return bar; //number

  function bar() {
    return "Hello from bar!";
  }
  function bar() {
    return "Hello again from bar!";
  }
}
console.log(typeof foo); //function
console.log(typeof foo()); //number

function foo() {
  return bar; //function
  //   return bar();//string

  function bar() {
    return "Hello from bar!";
  }
  function bar() {
    return "Hello again from bar!";
  }
}
console.log(typeof foo); //function
console.log(typeof foo()); //string
/* // Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Welcome to Programiz!");
// var a = 1;
// function b (){
//     a = 10 ;
//     return ;
//     function a(){}
// }

// b();
// console.log(a)


function bar() {
  return foo;
  var foo;
  function foo() {}
  var foo = '11';//ek bar value a gie
  function foo() {}
  return foo;
}
console.log(typeof bar());

// function bar() {
// //   return foo;
//   var foo;
//   function foo() {}
//   var foo = '11';//ek bar value a gie
//   function foo() {}
//   return foo;
// }
// console.log(typeof bar());


// function bar() {
// //   return foo;
//   var foo;
//   function foo() {}
//   var foo = '11'; //agar value mil gie toh yehi hoga
//   return foo;
// }
// console.log(typeof bar());


// function bar() {
// //   return foo;
//   var foo ;
//   function foo() {}
//   return foo();
//   var foo = '11';
// }
// console.log(typeof bar());
// function bar() {
// //   return foo;
// // var foo ; // function
// //   var foo = 10; //number
//   function foo() {}
//   var foo = 10; //number
//   return foo;
// //   var foo = '11';
// }
// console.log(typeof bar()); */

function a() {
  console.log("A");
}
var a;
console.log(a);

var x = 10;
function y() {
  x = 100;
  console.log(x);
  return;

  function x() {}
}
y();
console.log(x);

function foo() {
  //var bar = 10; // function
  return bar();

  function bar() {
    return "Hello from bar!";
  }
  function bar() {
    return "Hello again from bar!";
  }
}
console.log(typeof foo); //function */

function foo1() {
  var bar = 10;
  return bar(); //

  function bar() {
    return "Hello from bar!";
  }
  function bar() {
    return "Hello again from bar!";
  }
}
console.log(foo1()); // What's the output? bar is not a function */

function foo1() {
  var bar = 10;
  return bar; //

  function bar() {
    return "Hello from bar!";
  }
  function bar() {
    return "Hello again from bar!";
  }
}
console.log(foo1());

function a() {
  return 1;
}
console.log(a());

var a = function () {
  return 2;
};

console.log(a());

var x = 10;
function foo2() {
  console.log(x);
}
(function () {
  var x = 20;
  foo2(); // 20
})();

var x1 = 1;
if (function x1() {}) {
  x1 += typeof x1;
}
console.log(x1);
/* 1number */
