/* 
@C-Prototype--- proto just a pointer 
    prototype is object which is avail with all the constructor functions 
    avail in const function
    this obj is used for interitence

In js @C-inheritance  internally
-__proto__ property of an object points to another object that serves as
*/

var animal = {
  name: "",
  eats: true,
  sound: function () {
    console.log(`Animal ${this.name}`); //can make rabbit this
  },
};

var rabbit = {
  name: "rabbit",
  jumps: true, //added new feature
  __proto__: animal, //proto just a pointer
};
// console.log(rabbit); //animal comes under prototype cannot see directly
// console.log(rabbit.sound()); //sound ayegi

/* */
var a = {
  x: 10,
  calc: function (z) {
    return this.x + this.y + z;
  },
};

var b = {
  y: 30,
  __proto__: a,
};

var c = {
  z: 30,
  __proto__: c,
};
// console.log(b);
// console.log(b.calc(10)); //b  has x, y, z is passed

/** what if we write y in a also
 
  b will always prefer first its local scope
 */
var a = {
  x: 5,
  y: 30,
  calc: function (z) {
    return this.x + this.y + z;
  },
};

var b = {
  y: 6,
  __proto__: a,
};

var c = {
  z: 30,
  __proto__: b,
};
// console.log(c.calc(10)); //z is param,y mai jo hai chlega ,nhi toh a k pas jaegan
//agar a k pass x nhi hota toh Nan aata

/**que 3
 *
 *
 */
var car1 = {
  drive: "car1",
};
var car2 = {
  horn: "car2",
};
var car3 = {
  drive: "slow",
  __proto__: car2, //car2 becomes proto of car3
  car1, //car1 shows directly in obj and becomes key for it
};

// console.log(car3);
// ---------------
var car3 = {
  drive: "slow",
  __proto__: car1,
  car2,
};
// console.log(car3);
// ---------------GUESS THIS NOW
var car4 = {
  drive: "slow",
  __proto__: car1,
  car2,
  car3,
  a: 10,
};
console.log(car4);

/*
prototype is object which is avail with all the constructor functions 
    avail in const function
    this obj is used for interitence
*/
function Foo() {
  this.y = y;
}
//what do you see here that is obj ?
//dot notation in object and adding properties
Foo.prototype.x = 10;

Foo.prototype.calculate = function (z) {
  return this.x + this.y;
};
