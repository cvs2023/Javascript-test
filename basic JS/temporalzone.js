function temp() {
  console.log(apple); //temporal dead zone starts
}
let apple = "apple"; // temporal dead zone ends here

temp();
