const a = [];
const b = new Array(0);

const c = [1, 2, true, "a"];
//how possible because
// array able store all values ? everything is stored in object key value pair
c[99] = 1; //see magic now of undefined

//reference by value or reference ??/
//ONLY reference same memeory location
const d = c;
c = []; //stated pointing to new memory location thast why, reinitialize ho jaega isse
console.log(a);
console.log(b); //NOT EMPTY WHYyyyyyyyyyyyyyyyyyyyyyy

// if c.length = 0  isme dono 0 , coz we made memory locaiton empty

console.log(c == d); //true
console.log(c === d); //true

// ---------------------------------
const aa = [1, 2];
let bb = [1, 2];

console.log(aa == bb); //checks reference F
console.log(aa === bb); // content & type  F
//strict equality check that includes checking the type and content.

bb = aa;

console.log(aa == bb); //T
console.log(aa === bb); //T
console.log(JSON.stringify(a) === JSON.stringify(b)); // Output: true (compare contents as strings)
