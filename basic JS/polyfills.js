/* //MAP--------------------
const arr = [1, 2, 10, 78, 3, 200];

// Array.map((num , i , arr )=> {} )
//map return new arr
//takes callback function
//map can take 3 params ele, index,arr
Array.prototype.myMap = function (cb) {
  let temp = [];

  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }

  return temp;
};

console.log(
  arr.myMap((i, index, arr) => {
    console.log(index, i * 2, arr);
  })
); */

/* //FILTER--------------------
const arr3 = [1, 2, 10, 78, 3, 200];

// Array.Filter((num , i , arr )=> {} )
//return new arr
//Filter return new only obj with filtered values
//takes callback function
//Filter can take 3 params ele, index,arr
Array.prototype.myFilter = function (cb) {
  let temp = [];

  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      temp.push(this[i]);
    }
  }

  return temp;
};

console.log(arr3.myFilter((i, index, arr) => i > 2)); */
/* 
//REDUCE---------------------
const arr2 = [1, 2, 10, 78, 3, 200];

// Array.Reduce(( acc, curr, index, arr )=> {} , initialValue )
//return just value
//takes callback function and intial value --corner case here
//Reduce can take 3 params ele, index,arr
Array.prototype.myReduce = function (cb, intialValue) {
  let acc = intialValue;

  for (let i = 0; i < this.length; i++) {
    acc = acc ? cb(acc, this[i], i, this) : this[i];
    //agar no intialvalue given , 0 iteration pr acc mai arr[0] a jaega
  }

  // let accumulator = intialValue;
  // for (let i = 0; i < this.length; i++) {
  //   if (accumulator) { 
  //     accumulator = callback.call(undefined, 
  //     accumulator, this[i], i, this);
  //   }
  //   else {
  //     accumulator = this[i];
  //   }
  // }
  return acc;
};

console.log(
  arr2.myReduce((acc, curr) => acc + curr),
  0
); */

const arr = [1, 2, 3];

const mapResult = arr.map((i) => i + 2);
const forEachResult = arr.forEach((i) => {
  return i + 6;
});

console.log(mapResult, forEachResult, arr);

console.log(arr.forEach((i) => i + 4));

//polyfill for flat
//flat
/* import React, { useEffect } from "react";
import "./styles.css";

export default function App() {
  Array.prototype.flat = null;

  if (!Array.prototype.flat) {
    Array.prototype.flat = function (depth = 1) {
      const flattenedArray = [];

      const flatten = (arr, currDepth) => {
        for (let i = 0; i < arr.length; i++) {
          if (Array.isArray(arr[i]) && currDepth > 0) {
            // console.log( arr[i])
            flatten(arr[i], currDepth - 1);
          } else {
            // console.log( arr[i])
            flattenedArray.push(arr[i]);
          }
        }
      };

      flatten(this, depth);

      return flattenedArray;
    };
  }
  useEffect(() => {
    const arr = [1, 2, [3, 4, [5, 6]]];
    let ans = arr.flat(2);
    console.log(ans); // Output: [1, 2, 3, 4, [5, 6]]
    // console.log(arr.flat(1)); // Output: [1, 2, 3, 4, [5, 6]]
    // console.log(arr.flat(2)); // Output: [1, 2, 3, 4, 5, 6]
  }, []);

  return <div className="App">hi</div>;
} */

/* 
///flatten not flat 

import React, { useEffect } from "react";
import "./styles.css";

export default function App() {
  const flatArray = (arr, depth = 1) => {
    const flattenedArray = [];

    const flatten = (arr, currDepth) => {
      for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i]) && currDepth > 0) {
          flatten(arr[i], currDepth - 1);
        } else {
          flattenedArray.push(arr[i]);
        }
      }
    };
    flatten(arr, depth);
    return flattenedArray;
  };
  useEffect(() => {
    const arr = [1, 2, [3, 4, [5, 6]]];
    let ans = flatArray(arr);
    console.log(ans);
    console.log(arr.flat(2));
  }, []);

  return <div className="App">hi</div>;
}

*/
