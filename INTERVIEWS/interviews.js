//implement sum(5)(6)();
/* function sum(n) {
  return function (m) {
    if (m) {
      return sum(n + m);
    }
    return n;
  };
}
console.log(sum(7)(6)()); */

/* //---------------------------------------
//without () sol 1 not optimal
function sum(...args) {
  function add(...newArgs) {
    return sum(...args, ...newArgs);
  }

  add.toString = function () {
    return args.reduce((total, num) => total + num, 0);
  };

  return add;
}

console.log(+sum(7)(6)(7)(4)); // Output: 24 */

/* 

function sum(...args) {
  const add = function(...newArgs) {
    return sum(...args, ...newArgs);
  };

  add.valueOf = function() {
    return args.reduce((total, num) => total + num, 0);
  };

  return add;
}

console.log(+sum(7)(6)(7)(4)); // Output: 24
 */

/* The implementation provided in the previous response creates a new function for each argument, which could potentially lead to a large number of nested functions. This could impact memory usage and performance, especially for a large number of arguments. */
//---------------------------------------

//optimal
function sum(...args) {
  const add = function (...newArgs) {
    return sum(...args, ...newArgs);
  };

  add.valueOf = function () {
    return args.reduce((total, num) => total + num, 0);
  };

  return add;
}

console.log(+sum(7)(6)(7)(4)); // Output: 24
/* A more optimal and efficient solution might involve using a single function that accumulates the arguments and returns a result when needed. Here's a more optimized version of the currying function: */

//---------------------------------------
/* const str = ["arielle", "are", "you", "there"];
const capitalizedstr = [];

for (let i = 0; i < str.length; i += 1) {
  const string = str[i];
  capitalizedstr.push(str.toUpperCase());
}

console.log(capitalizedStrings);

const strings = ["arielle", "are", "you", "there"];
const capitalizedStrings = [];

strings.forEach(function (string) {
  capitalizedStrings.push(string.toUpperCase());
});

console.log(capitalizedStrings); */

/* const desert = { type: "pie" };
desert.type = "abc";
console.log(desert);

class X {
  get Y() {
    return 42;
  }
}
const x = new X();
console.log(x.Y); */

//rpoblem
/* var a;
var b = (a = 10) ? true : false;
console.log(a, b); */

/* // let vowels = "aeiou".toArray();
// let vowels = "aeiou";
let vowels = Array.of("aeiou");
// let vowels = { "a ", "e","i","o","u"};

for (var i = 0; i < vowels.length; i++) {
  console.log(vowels[i]);
}
 */

const person = {
  age: 30,
  name: "John",
  hairColor: "brown",
};

const uppercaseKeysPerson = Object.keys(person).map((key) => key.toUpperCase());

console.log(uppercaseKeysPerson);

/* let a = ["dog", "salmon"];
  let key = (a) => a == "salmon";

  if (a.some(key)) {
    console.log("hi");
  }
  //every//filter
  //some(key).elngth ==1 */

/* if (true) {
  var a = 10;
  const b = 20;
  let c = 24;
}
console.log(a + b + c); */

/* const fun = () => {
  const bbb = 1;
  return () => console.log(bbb);
};
const bbb = 10;

const test = fun();
test();
 */

/* var s = "a";
var b = { sound: "c" };
function roar() {
  console.log(this.sound);
}
roar.apply(b);
// b[roar]();
// roar.bind(b); bind bot working why@@@@@@@@@@@@@@@@@ */

/* const arr = ["a", "b"];
arr.shift();
// console.log(a.pop());
console.log(arr.pop());

const socket = new WebSocket("example.org");
function a(event) {
  console.log(event.data);
}
 */
for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    fn(i);
  }, 0);
}
for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    fn(i);
  }, 0);
}

const [, , animal] = ["a", "b", "c"];
console.log(animal);

//objects Arrays
const names = [
  { id: 20, name: "Shishir" },
  { id: 20, name: "Ram" },
  { id: 22, name: "Prateek" },
  { id: 23, name: "Rishav" },
];
// reduce method
const objAns = names.reduce((acc, curr) => {
  if (curr.id in acc) {
    acc[curr.id].push(curr);
  } else {
    acc[curr.id] = [curr];
  }
  return acc;
}, {});
console.log(objAns);

const obj = {};
for (let i of names) {
  if (i.id in obj) {
    obj[i.id].push(i);
  } else {
    obj[i.id] = [i];
  }
}
console.log(obj);

const objXXX = {};
names.map((items) => {
  objXXX[items.id] = names.filter((f) => f.id === items.id);
});

console.log(objXXX);

// Output format
// const name_object = {
//   20: [
//     {id:20, name: 'Shishir'},
//     {id:20, name: 'Ram'},
//   ],
//   22: [
//     {id:22, name: 'Prateek'},
//   ],
//   23: [
//     {id:23, name: 'Rishav'},
//   ],
// }
