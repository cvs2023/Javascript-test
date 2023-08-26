const arr = [1, 2, 10, 78, 3, 200];

console.log("Map---------------------------------------------------------");

function subtraction(a, b) {
  return a - b;
}

console.log(arr.map(subtraction));

console.log(
  arr.map(function subtraction(a, b) {
    return a - b;
  })
);

console.log(
  arr.map(function divide(e, i, arr) {
    return e / 2;
  })
);

console.log(arr.map((i) => i * 2));

console.log("Filter------------------------------------------------------");
//show grade > 90
const students = [
  { name: "Quincy", grade: 96 },
  { name: "Jason", grade: 84 },
  { name: "Alexis", grade: 100 },
  { name: "Sam", grade: 65 },
  { name: "Katie", grade: 90 },
];

console.log(students.filter((i) => i.grade >= 90));

console.log("Reduce------------------------------------------------------");

//direct simple function
function findSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log(findSum(arr));

//take ans in variable
const sum = function findSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};
console.log(sum(arr));

//write direct function in reduce
console.log(
  arr.reduce(function (result, item) {
    return result + item;
  }, 0)
);
//with arrow
console.log(arr.reduce((accumulate, currValue) => accumulate + currValue));

//find max
console.log(
  arr.reduce(function (result, item) {
    if (item > result) {
      result = item;
    }
    return result;
  }, 0)
);
console.log("-------------------------------------------------");

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
var pets = ["dog", "chicken", "cat", "dog", "chicken", "chicken", "rabbit"];

//print all and return last pets with help of reduce
// console.log(
//   pets.reduce(function (obj, pet) {
//     return pet; //return hmesha last final hoga
//     console.log(pet); //print all
//   })
// );

//WITH ARROw print all
// console.log(pets.reduce((acc, curr) => console.log(curr)));

//last value
// console.log(pets.reduce((acc, curr) => curr));

//return first value ,baki undefined hain see with console
// var petsA = pets.reduce(function (obj, pet) {
//   return obj;
// });
// console.log(petsA);

//print first rest undefined @@@@@@@@@@@@@@@@@@@
// var petsA = pets.reduce(function (obj, pet) {
//   console.log(obj);
// });
// console.log(petsA);

//obj print first rest undefined @@@@@@@@@@@@@@@@@@@
//pet mai dog he nhi aya- chicken se rabbit tk a gya -------because if we dont give first value toh intial first ho
// var petsA = pets.reduce(function (obj, pet) {
//   console.log(obj, "pet", pet);
// });
// console.log(petsA);

// print first value ka first index
// var petsA = pets.reduce(function (obj, pet) {
//   return obj[0];
// });
// console.log(petsA);

//print values in sentence- hence reduces arrays bracket also
// var petsA = pets.reduce(function (obj, pet) {
//   console.log(pet); //all prints
// });
// console.log(petsA);

// console.log(
//   pets.reduce(function (obj, pet) {
//     console.log(obj);
//   })
// );

// Que - print freq map

/* var petsName = ["dog", "chicken", "cat", "dog", "chicken", "chicken", "rabbit"];
const freqMap = petsName.reduce(function (obj, curr) {
  if (!obj[curr]) {
    obj[curr] = 1;
  } else {
    obj[curr] += 1;
  }
  return obj;
}, {}); //intiall value kya honi chahea {} empty obj
console.log(freqMap); */

//@@@@@@@@@@@@@@@@@@@
//upr wale k sath how obj[curr] doing
/* var petsA = pets.reduce(function (obj, pet) {
  console.log(obj[pet]);
});
console.log(petsA); */

/* 
// ANS ?
let stu = [
  { id: "001", name: "Anish", sports: "Cricket" },
  { id: "002", name: "Smriti", sports: "Basketball" },
  { id: "003", name: "Rahul", sports: "Cricket" },
  { id: "004", name: "Bakul", sports: "Basketball" },
  { id: "005", name: "Nikita", sports: "Hockey" },
];
const freqMap = stu.reduce(function (acc, curr) {
  if (!acc[curr.sports]) {
    acc[curr.sports] = 1;
  } else {
    // acc[curr.sports] = ++acc[curr.sports];
    acc[curr.sports] += 1;
  }
  return acc;
}); //intiall value kya honi chahea {} empty obj
console.log(freqMap); */

/* let stu = [
  { id: "001", name: "Anish", sports: "Cricket" },
  { id: "002", name: "Smriti", sports: "Basketball" },
  { id: "003", name: "Rahul", sports: "Cricket" },
  { id: "004", name: "Bakul", sports: "Basketball" },
  { id: "005", name: "Nikita", sports: "Hockey" },
];
const freqMap = stu.reduce(function (acc, curr) {
  if (!acc[curr.sports]) {
    acc[curr.sports] = 1;
  } else {
    // acc[curr.sports] = ++acc[curr.sports];
    acc[curr.sports] += 1;
  }
  return acc;
}{}); //intiall value kya honi chahea {} empty obj
console.log(freqMap);
 */
console.log("-------------------------------------------------");

/* const array = [10, 18, 30, 41, 60];
const myReducer = (returnValue,
	currentValue) => returnValue + currentValue;

// 10 + 18 + 30 + 41 + 60
console.log(array.reduce(myReducer));
// expected output: 159

// initialValue = 20
// 20 + 10 + 18 + 30 + 41 + 60
console.log(array.reduce(myReducer, 20));
	// expected output: 179
 */

/* Printing the name of students who play
basketball using filter and map method
simultaneously. */

/* let stu = [
  { id: "001", name: "Anish", sports: "Cricket" },
  { id: "002", name: "Smriti", sports: "Basketball" },
  { id: "003", name: "Rahul", sports: "Cricket" },
  { id: "004", name: "Bakul", sports: "Basketball" },
  { id: "005", name: "Nikita", sports: "Hockey" },
];

const basketball = stu
  .filter((i) => i.sports == "Basketball")
  .map((i) => i.name);

//prints strings
console.log(
  basketball.forEach(function (value, index, arr) {
    console.log(index + " " + value);
  })
);

//prints array
console.log(basketball); */

/* //do above with reduce
let stu = [
  { id: "001", name: "Anish", sports: "Cricket" },
  { id: "002", name: "Smriti", sports: "Basketball" },
  { id: "003", name: "Rahul", sports: "Cricket" },
  { id: "004", name: "Bakul", sports: "Basketball" },
  { id: "005", name: "Nikita", sports: "Hockey" },
];

const basketball = stu.reduce(function (acc, curr) {
  if (curr.sports == "Cricket") {
    acc.push(curr.name);
  }
  return acc;
}, []);

//prints array
console.log(basketball); */
