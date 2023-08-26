//https://www.youtube.com/watch?v=csvioBvJB-k&list=PLsuIm95J7LcqdTcnN3I1pE8b1Ey4NwhSw&index=3

////////////////////////////////////////////normal copy, accepts fun

const obj0 = {
  name: "cv",
  write: function () {},
};

const obj01 = obj0;
obj0.name = "changed";
console.log(obj01, "---", obj0); //t

console.log(obj01 == obj0); //t
console.log(obj01 === obj0); //t

////////////////////////////////////////////shallow copy,, accepts fun
//problem  object k andr object hua toh problem a jaati hai
const obj1 = {
  name: "cv",
  address: {
    city: "delho",
  },
  write: function () {},
};

const obj2 = { ...obj1 };
obj1.name = "changed"; //changed correctly only in obj1
obj1.address.city = "changed"; // BUT NOT Changed correctly in obj1

console.log(obj2, "---", obj1); //t

console.log(obj2 == obj1); //f
console.log(obj2 === obj1); //f

////////////////////////////////////////////deep clone., not accept fun
const obj3 = {
  name: "John",
  address: {
    city: "delho",
  },
  write: function () {},
};
const clone3 = JSON.parse(JSON.stringify(obj3)); //time issue also in this
obj3.name = "changed";
obj3.address.city = "changed";
console.log(obj3, "---", clone3); //problem with this deep copy is it dont acccept function while copying

///////////////////////////////////////////for loop desi method to solve this
const obj33 = [
  {
    name: "John",
    address: {
      city: "delho",
    },
    write: function () {},
  },
  {
    name: "cv",
    address: {
      city: "delho",
    },
    write: function () {},
  },
];
const newObjWithFunc = {};
Object.keys(obj33).map((i) => {
  newObjWithFunc[i] = obj33[i];
});
console.log(newObjWithFunc);

///////////////////////////////////////////ONE MORE SOLUTION IS loadash
/* npm i loadash  */
const c = _.cloneDeep(obj3); //time issue also in this

/*

 //deepcopy
//shallowcopy

const person = [
  {
    age: 30,
    name: "John",
    hairColor: "brown",
  },
];

for (let i in person) {
  console.log(i); //index 0
}
for (let i of person) {
  console.log(i); //whole obj
}

for (const key in obj) {
  console.log(key + "   key ");
  console.log(obj[key] + "  value");
}

console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));

//add a key
const target = { name: "John" };
const source = { age: 40 };
console.log(Object.assign(person, source));
console.log(person.hasOwnProperty("name"));
console.log(person.hasOwnProperty("gender"));

//make object freeze
const obj = { name: "John", age: 30 };
Object.freeze(obj);
obj.age = 40; // This assignment will be ignored in strict mode or throw an error in non-strict mode
console.log(obj); // Output: { name: 'John', age: 30 }

const obj3 = { name: "John", age: 30 };
const clone1 = Object.assign({}, obj3);
console.log(clone1); // Output: { name: 'John', age: 30 }

const obj2 = { name: "John", age: 30 };
const clone2 = { ...obj2 };
console.log(clone2); // Output: { name: 'John', age: 30 }

//deep clone
const obj4 = { name: "John", age: 30 };
const clone3 = JSON.parse(JSON.stringify(obj4));
console.log(clone3); // Output: { name: 'John', age: 30 }

const uppercaseKeysPerson = Object.keys(person).map((key) => key.toUpperCase());

console.log(uppercaseKeysPerson);
 */
