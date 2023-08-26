/* https://stackoverflow.com/questions/960866/how-can-i-convert-the-arguments-object-to-an-array-in-javascript */
function test() {
  console.log(arguments);
  console.log(typeof arguments); //object , type of  array not exactly array
  //   arguments.push(10) not a function
  var a = arguments.toArray(); //que convert to array
}
test(1, 2, 3);
