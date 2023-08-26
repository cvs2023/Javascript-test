const x = {
  name: "John",
};
console.log(x.name);
var k = "name";
console.log(x.k); //undefined
console.log(x[k]); //jhon  = console.log(x["name"]); //jhon
//basic
//deepcopy
//shallowcopy
/* 





const person = {
  age: 30,
  name: "John",
  hairColor: "brown",
};

for (let i in names) {
  console.log( i )
}
for (let i of names) {
  console.log( i )
}


for (const key in obj) {
  console.log(key + "   key " );
  console.log(  obj[key] + "  value" )
}

console.log( Object.keys(person) );
console.log( Object.values(person) );
console.log( Object.entries(person) );

//add a key
const target = { name: 'John' };
const source = { age: 40 };
console.log( Object.assign(person , source) );
console.log( person.hasOwnProperty('name'))
console.log( person.hasOwnProperty('gender'))

//make object freeze
const obj = { name: 'John', age: 30 };
Object.freeze(obj);
obj.age = 40; // This assignment will be ignored in strict mode or throw an error in non-strict mode
console.log(obj); // Output: { name: 'John', age: 30 }


const obj3 = { name: 'John', age: 30 };
const clone1 = Object.assign({}, obj3);
console.log(clone1); // Output: { name: 'John', age: 30 }


const obj2 = { name: 'John', age: 30 };
const clone2 = { ...obj2 };
console.log(clone2); // Output: { name: 'John', age: 30 }

//deep clone
const obj4 = { name: 'John', age: 30 };
const clone3 = JSON.parse(JSON.stringify(obj4));
console.log(clone3); // Output: { name: 'John', age: 30 }


const uppercaseKeysPerson = Object.keys(person).map((key) => key.toUpperCase());

console.log(uppercaseKeysPerson); */

/*



const obj = {
  name: "John",
  age: 30,
  greet: function () {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  },
};
const funcs = obj.greet.bind(obj); //put in array
console.log(funcs); //this time see native array
funcs(); 


const obj = {
  name: "John",
  age: 30,
  greet: function () {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  },
};
const funcs = [obj.greet.bind(obj)]; //put in array
console.log(funcs); //this time see native array
funcs[0](); 



---------

@C- object
// get keys
const person = {
  name: "Lydia",
  age: 21,
};

//output
// name Lydia
// age 21
for (const item in person) {
  console.log(item + " " + person[item]);
}

//output
// [
//   ["name", "Lydia"],
//   ["age", 21],
// ];
const entries = Object.entries(person);
console.log(entries);

const e = Object.entries(person);
const [name, greet,age] = e;
console.log(greet);//second mai age he ayegi not greet
console.log(name + " valuww1");

// @C -destructuring
const e = Object.entries(person);
const [n, value] = e[0];
const [, v] = e[0];
console.log(value);
console.log(v);


// edit object
const o = { a: 10 };
o.b = 20;
console.log(o);

*/
/*
two ways to fetch values from object 

obj.name
obj["name" ]

var c = "name"
console.log( obj[c])
difference 
  -- one is dynamic
  -- one 
*/

/** */
var a = {},
  b = { key: "123" },
  c = { key: "456" }; //;

a[b] = 123;
a[c] = 456;
// a[d] = 356;
console.log(a[b]);
console.log({ key: "123" }.toString());
console.log(b.toString());
console.log([].toString());

console.log(a[b]); //it means console.log({ key: "123" }.toString());
a["[object Object]"] = 123; //same obj Obj changing evertime
a["[object Object]"] = 456;
console.log(a["[object Object]"]);

/*
@C- dynamic object
create dynamic object
  - new
  - const function
*/
