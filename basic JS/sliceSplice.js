//dont modify the original array
//method returns a new array that contains a shallow copy
const arr = [1, 2, 3, 4, 5];
const slicedarr = arr.slice(1, 4); // Returns [2, 3, 4]
console.log(arr);

// change the contents of an array by removing, replacing, or adding elements.
//sap modify the original insaan
//It takes three or more arguments:
//--------the starting index,
//--------the number of elements to remove, and
//--------optional new elements to insert at that position
const array = [1, 2, 3, 4, 5];
// const removedElements = array.splice(-1); //last se ek remove  [1, 2, 3, 4]
const removedElements = array.splice(-2); // last se do remove [1, 2, 3]

// const removedElements = array.splice(1, 2, 98); // [1, 98, 4, 5]
// 1 se 2 elements remove kro and 98 ko add krdo

// const removedElements = array.splice(-3, 1, 98); //IMPORTANT @IMP-SPICE [1, 2, 98, 4, 5]

//both are same -2 or 0 = 0 remove krdo, but here first value -1 define last se kidrseshuru krna hai add delete
// const removedElements = array.splice(-1, 0, 98); //IMPORTANT @IMP-SPICE [1, 2, 3, 4, 98 , 5]
// const removedElements = array.splice(-1, -2, 98); //IMPORTANT @IMP-SPICE [1, 2, 3, 4, 98 , 5]

//-2 se ek hta do and 98 daldo
// const removedElements = array.splice(-2, 1, 98); // -2 treated as zero, so -1 last se [1, 2, 3, 98, 5]

//-2 se 2 hta do and 98 daldo
// const removedElements = array.splice(-2, 0, 98); // -2 treated as zero, so -1 last se [1, 2, 3, 98, 4, 5]

console.log(array);
console.log(removedElements);

/* WHY IN SLICE SHALLOW COPY IS MADE */

//IN SLICE - changes in the new array wil reflect in OA
const originalArray = [{ name: "Alice" }, { name: "Bob" }, { name: "Charlie" }];
// Using slice to create a new array containing a shallow copy of the elements
const newArray = originalArray.slice();
// Modifying an object's property in the new array
newArray[0].name = "Eve";
console.log(originalArray[0].name); // Outputs: "Eve" (because the objects are shared)
