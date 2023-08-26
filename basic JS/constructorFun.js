/*
@C- constructor function  - old notation in new we can use Class
    Good to have name captial
Create Multiple Instances
*/
//D should be capital
//way to have class in js
function Dog(name, breed) {
  this.name = name;
  this.breed = breed;
}
var newDog2 = new Dog(" brave");
console.log(newDog1);
console.log(newDog2); //multiple constructor also handled

console.log(newDog1 == newDog2); //false
console.log(newDog1 === newDog2); //false
