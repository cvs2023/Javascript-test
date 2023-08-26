/*
static/lexical(in JS ) and dynamic scoping ( c c++ )

FUNCTION ALONG WITH ITS LEXICAL SCOPE/ BUNDLE TOGETHER FORMS A CLOSURE


@C- closure returns fun and its lexical environment
A closure is created whenever a function accesses a variable that is declared outside of its own scope. 
The closure "closes over" the variable, meaning that it retains a reference to the variable even after 
the outer function has returned. Closures allow for persistent state in a function, which can be useful 
for implementing things like private variables or memoization.

A CLOSURE IS BUNDLE OF FUNCTIONA AND ITS LEXICAL SCOPE
FUN ALGO WITH ITS LEXICAL SCOPE FORMS A CLOSURE
CLOSURE GIVES US THE ACCESS TO ANOTHER FUN SCOPE FROM AN INNER FUN
IN JS IT IS CREATED EVERYTIME A FUN IS CREATED, AT FUN CREATION TIME

IT IS A'S REFERNCE -- IMPORTANT NOT THE VALUE
let a = "one";

function run() {
  let a = "two";
  {
    let a = "three";
    console.log(a);
  }
  console.log(a);

  let d = function inner() {
    console.log("i am saved even after function: " + a);
  };
  return d; //CLOSURE WAS RETURNED .sTILL REMEBER THE REF OF A
}

let res = run(); 
///run execution context is not longer in call stack environemnt
//have function defination pointis a toh destroy ho jana chahea tha after fun gets over
console.log(res); //fun def
res(); // got a value two
----------

//returs fun and its references of lexical environment
function run() {
  let a = "two";
  let d = function inner() {
    console.log("i am saved even after function: " + a);
  };
  a = "its magic"; //declared after still getting printed in a
  return d;
}
let ans = run();
ans();

----------
----------
----------
----------
----------


*/
//------------
function z() {
  let x = 200;
  function run() {
    let a = "two";
    {
      let a = "three";
      console.log(a);
    }
    console.log(a);

    let d = function inner() {
      console.log("i am saved even after function: " + a, x);
    };
    return d; //CLOSURE WAS RETURNED .sTILL REMEBER THE REF OF A
  }
}
const fn = z(2, 3);
///createCounter execution context is not longer in call stack
//everything is gone but
// they still maintain their scope
// they remeber where they were present and have reference of var

console.log(fn());
console.log(fn());
console.log(fn(5, 6)); //x y already hain usme so param dont work
// -----------
function createCounter(init, delta) {
  let x = init;
  let y = delta;

  function count() {
    x = x + y;

    return x;
  }

  return count;
}
//type fo c1 is function and c1() Number
//function return something so if you remove return count you will get undefined
const c1 = createCounter(10, 5);
console.log(c1()); //
const c2 = createCounter(15, 2);

console.log(c1(), c1(), c1());
// console.log(c2(), c2(), c2());
// console.log(c1(), c1(), c1());
