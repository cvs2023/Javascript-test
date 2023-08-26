console.log("a1" == 1); //false
console.log(typeof "1"); //s
console.log(typeof +"1"); //number
console.log(+"1"); //1
console.log(+"abc"); ////////////////////////NAN
console.log(typeof NaN); //////////////////number
console.log(+"abc" === +"def"); ////////////false
console.log(Infinity === Infinity); //true
console.log(Infinity === NaN); //false
console.log(null === null); //true
console.log(+"abc" === +"def"); //false
console.log(NaN === NaN); //false
//nan kisse bna we dont know , so nan === infinity,its considered as infinity
//
console.log("abc" + "def"); //abcdef
console.log("abc" - "def"); //NaN
console.log(+"abc" + "def"); //NaNdef
console.log("abc" + 1); //implicit number to string conversion
console.log(+"1" + 2); //3
console.log("1" - 1); //0
console.log(-"1" - 1); //-2
console.log(-"1" + 1); //0

console.log(!""); //!false
console.log(!" "); //!true
console.log(!"a"); //!true

console.log(!false);
console.log(!"false");
console.log(!false == !"false");
console.log(!false === !"false");

// empty console?
console.log(1 + -"1" + "2"); //02
console.log(1 + -"12" + "2"); //-112

console.log(typeof "0" + 1);
console.log(typeof 1 + "0");

const aa = +"1";
console.log(typeof aa);

console.log(0 || 1); //1 is truthy value
console.log(0 || 2 || 1);
console.log(0 || 1 || 2);
console.log("0" || "1");
console.log(false || true);
console.log(console.log("  "));
console.log(console.log("  "));

console.log(typeof null);
console.log(typeof typeof null);
console.log(typeof typeof undefined);

console.log(false == "0");
console.log(false === "0");

var dogs = ["Fido", "Odie", "Oscar"];
dogs.length = 1;
console.log(dogs);

var a = 1;
var b = "ac";
console.log(a == b);

console.log("" == 0); // true

console.log((0).toString()); //give 0 // -> '' not the case
console.log(Number("")); //give 0

// in complex only lvalue are compared that is addresses
let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];

let arr3 = arr1; //same reference

console.log(arr1 === arr2); // because lvalue is not same (no need to even check rvalue)
console.log(arr1 == arr2); //means first only left is checked here also

console.log(arr1 === arr3);

var c = 5;
console.log(5 + c); //10
let n = 6;
n = c + 6; //11
console.log(c - n);

var bar = null;

console.log(typeof bar === "object");
