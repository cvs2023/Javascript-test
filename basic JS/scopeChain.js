/*
@C- Scope chain
SCOPE is dependent on th lexical environment
first b will check in its scope if not found then search in outer scope
*/
function a() {
  var d = 10;
  console.log(b + " " + d);
  c();
  function c() {
    console.log(b + " " + d);
  }
}
a();
var b = 20;
// a();

console.log(a); // ?

/* function a(b=30) {
  var d = 10;
  console.log(b + " " + d);
  c();
  function c() {
    console.log(b + " " + d);
  }
}
a();
var b = 20;
// a();

console.log(a); // ?
 */
