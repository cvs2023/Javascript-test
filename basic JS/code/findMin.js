
const numbers = [5, 2, 9, 1, 5, 6];

//with for
let min1 = numbers[0]; // Assuming the array is not empty

for (const num of numbers) {
  if (num < min1) {
    min1 = num;
  }
}

console.log("Minimum number:", min1);

//with apply
const min2 = Math.min.apply(null, numbers);
console.log("Minimum number:", min2);

//with spread operator
const min3 = Math.min(...numbers);
console.log("Minimum number:", min3);

//with reduce
const min4 = numbers.reduce((min, current) => {
  return Math.min(min, current);
}, Infinity);

console.log("Minimum number:", min4);
