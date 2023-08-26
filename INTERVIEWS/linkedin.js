// let vo = "aeiou".toArray(); // TYpe err : "aeiou".toArray is not a function
// let vo = Array.of("aeiou"); // [ 'aeiou' ]

// let vo = {"a","e"} // WRONG unexpected string

let v = { a: "e" };
console.log("8 - ", v);

let vv = "aeiou";
console.log("8 - ", vv);

for (let i = 0; i < vv.length; i++) {
  console.log(vv[i]);
}
console.log(vo);

class Animal {
  static belly = [];

  eat() {
    name: "cv";
    Animal.belly.push("food");
  }
}
let a = new Animal();

a.eat();

console.log(a);
console.log(a.belly[0]);
