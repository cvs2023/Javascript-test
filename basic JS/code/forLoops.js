//for
for (let i = 0; i < 5; i++) {
  console.log(i);
}

const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Carol", age: 28 },
];

for (let i = 0; i < people.length; i++) {
  console.log(`${people[i].name} is ${people[i].age} years old.`);
}
//foreach
//forEach loop does not create a new array;
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (number, indexOptional, arrayOptional) {
  console.log(number);
});

//for of
const fruits = ["apple", "banana", "orange"];

for (const fruit of fruits) {
  console.log(fruit);
}

const students = [
  { name: "Alex", grade: "A" },
  { name: "Eva", grade: "B" },
  { name: "Daniel", grade: "C" },
];

for (const student of students) {
  console.log(`${student.name} received a grade of ${student.grade}.`);
}

//for in
const person = {
  name: "John",
  age: 30,
  job: "developer",
};

for (const key in person) {
  console.log(key + ": " + person[key]);
}

const employee = {
  name: "John",
  job: "Developer",
  contact: {
    email: "john@example.com",
    phone: "123-456-7890",
  },
};

for (const key in employee) {
  if (typeof employee[key] === "object") {
    for (const subKey in employee[key]) {
      console.log(`${key}.${subKey}: ${employee[key][subKey]}`);
    }
  } else {
    console.log(`${key}: ${employee[key]}`);
  }
}

//for with break
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break; // Exit the loop when i equals 5
  }
  console.log(i);
}
//for with continue
for (let i = 0; i < 5; i++) {
  if (i === 2) {
    continue; // Skip the iteration when i equals 2
  }
  console.log(i);
}

/* difference in of */
const s = [
  { name: "Alex", grade: "A" },
  { name: "Eva", grade: "B" },
  { name: "Daniel", grade: "C" },
];

for (const i in s) {
  //i is index
  console.log(i, " ", s[i].name);
}

for (const i of s) {
  // i is one object
  console.log(i.name);
}
