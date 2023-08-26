/*====================================== convert array into object and vice versa ======================================*/
const arr = ["a", "b", "c"];

//1 for loop
const objFromArr1 = {};
for (let i = 0; i < 3; i++) {
  objFromArr1[i] = arr[i];
}
console.log(objFromArr1);

//2 foreach
const objFromArr2 = {};
arr.forEach((value, index) => {
  objFromArr2[index] = value;
});
console.log(objFromArr2);

//3 reduce hard
let obj = arr.reduce((acc, curr, i) => {
  return { ...acc, [i]: curr };
}, {});
console.log(obj);

//4 reduce  easy
const objFromArr3 = {};

const ans1 = arr.reduce((acc, curr, index) => {
  /* Either use acc or objFromArr3  */
  //   objFromArr3[index] = curr;
  //   return objFromArr3;
  acc[index] = curr;
  return acc;
}, {});
console.log(ans1);
/* 
...acc: This spreads the properties of the accumulator object into the new object being constructed. This step ensures that properties from previous iterations are preserved.

[i]: curr: -------This dynamically assigns a property to the new object using the index (i) as the property name and the current element (curr) as the property value.
At the beginning, the initial value of the accumulator is set to an empty object ({})--------.
*/

/* ====================================== obj to arr ======================================*/

//1 for in , obj have numeric indices here so its(for in here) valid here
const newArr = [];
for (const i in obj) {
  newArr.push(obj[i]);
}
console.log(newArr);

//HOW TO ITERATE ON OBJECTS
/* 1 */
const o = { a: 1, b: 2, c: 3 };

const key = Object.keys(o);
const value = Object.values(o);
const entry = Object.entries(o);
console.log(entry, key, value);

const valuesArray = [];
Object.keys(o).forEach((key, index) => {
  valuesArray.push(o[key]);
  valuesArray.push(key);
  console.log(key, " - ", o[key], "--------", index);
});
console.log(valuesArray);

/* 2 - map */
const valuesArrayMap = Object.keys(o).map((key) => o[key]);
console.log(valuesArrayMap);

/* If you have an array of key-value pairs, */
//1 for
const a = [
  ["0", "a"],
  ["1", "b"],
  ["2", "c"],
];
const obj111 = {};

for (const [key, value] of arr) {
  obj111[key] = value;
}

console.log(obj111);

//2
const obj11 = Object.fromEntries(a);
console.log("x-   ", obj11);

//3
const obj1111 = Object.assign(
  {},
  ...arr.map(([key, value]) => ({ [key]: value }))
);

console.log(obj1111);

/////////////////////////////////
//WRONG WAY For of only works on iterable obj like arrays
/* const newArr1 = [];
for (const i of obj) {
  newArr1.push(i);
}
console.log(newArr1); */

for (const [key, value] of Object.entries(obj)) {
  console.log(`Key: ${key}, Value: ${value}`);
}
//////////////////////////////////////////////
const obj33 = [
  {
    name: "John",
    address: {
      city: "delho",
    },
    write: function () {},
  },
];
const newObjWithFunc = {};
for (const key in obj3) {
  console.log(key);
}
console.log(newObjWithFunc);
