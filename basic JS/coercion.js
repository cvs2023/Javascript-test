/*
In JavaScript, there are several ways to perform type conversion:

Implicit Conversion:
JavaScript performs implicit type conversion automatically, which means it converts one data type to another without the programmer's intervention. 
For example, when you concatenate a string and a number using the "+" operator, JavaScript implicitly converts the number to a string.

Explicit Conversion:
Explicit type conversion involves using JavaScript's built-in methods or functions to convert one data type to another. Here are some examples:

String(): Converts a value to a string.
javascript
Copy code
var num = 123;
var str = String(num); // str = "123"
Number(): Converts a value to a number.
javascript
Copy code
var str = "123";
var num = Number(str); // num = 123
parseInt(): Converts a string to an integer.
javascript
Copy code
var str = "123";
var num = parseInt(str); // num = 123
parseFloat(): Converts a string to a floating-point number.
javascript
Copy code
var str = "3.14";
var num = parseFloat(str); // num = 3.14
Boolean(): Converts a value to a boolean.
csharp
Copy code
var num = 123;
var bool = Boolean(num); // bool = true
toString(): Converts a value to a string.
csharp
Copy code
var num = 123;
var str = num.toString(); // str = "123"




Type  :
Type coercion is a type of implicit conversion that occurs when JavaScript converts a value from one data type to another automatically. This happens when you use an operator that expects a certain data type but is given a different type.

For example, when you add a number and a string, JavaScript will automatically convert the number to a string and concatenate the two values.

    Copy code
var num = 123;
var str = "456";
var result = num + str; // result = "123456"
It's important to note that type coercion can sometimes lead to unexpected behavior, so it's generally recommended to use explicit type conversion to ensure the desired behavior.

Using the typeof operator:
The typeof operator returns the data type of a value as a string. You can use it to determine the data type of a variable and then convert it to a different data type if necessary.

javascript
Copy code
var num = "123";
if (typeof num === "string") {
  num = Number(num); // convert string to number
}
Overall, JavaScript provides several ways to perform type conversion. The choice of method will depend on the specific requirements of your application.

*/

//ORDER DOEST MATTER
console.log("abc" + 1); //implicit number to string conversion
console.log(1 + "abc"); //implicit number to string conversion
//IN +++++++++++
// WHENEVER THERE IS A NUMBER AND STRING WITH PLUS SIGN it WILL CONVERT THAT INTO STRING

console.log(1 + 2 + "abc"); //3abc ( string )
console.log("abc" + 1 + 2); //abc12 ( string )
console.log(+"1" + 2); //3
console.log(1 + "1" + 1); //111  number is converted into string (1 + '1'

//IN ---------------
// WHENEVER THERE IS A NUMBER AND STRING WITH PLUS SIGN it WILL CONVERT THAT INTO STRING

//CONCLUSION
//NUMBERIC CONVERIOSN - -, * , / , +
//String conversion jb koi ek string ho and when  +
