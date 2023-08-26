/* 
https://www.w3schools.com/js/js_regexp.asp
https://www.geeksforgeeks.org/javascript-regexpregular-expression/
https://www.programiz.com/javascript/regex

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions


The search() method searches a string for a specified value and returns the position of the match:

Example
Use a string to do a search for "W3schools" in a string:

let text = "Visit W3Schools!";
let n = text.search("W3Schools"); */
/* 
case-insensitive search for "w3schools" in a string:

let text = "Visit W3Schools";
let n = text.search(/w3schools/i);
The result in n will be:

6


*/
let string = "abc123xyz a a";
/*  1- */
// const regex = new RegExp(/^a...s$/);
/* 2- */

// regex = /abc/; //find exact  consective pattern

/* 
        MetaCharacters
        Metacharacters are characters that are interpreted in a special way by a RegEx engine. Here's a list of metacharacters:
        [] . ^ $ * + ? {} () \ |
 */
// 1 = []
string = "axc";
regex = /a.c/; //a _ c , hoga check isse
regex = /a..c/; //a _ _ c , hoga check isse

string = "aa";
regex = /[bc]/; //is string k letter us string mai = false
regex = /[a]/; //true

string = "a"; //true a se e tk toh true
string = "f"; //fasle
regex = /[a-e]/; //[a-e] is the same as [abcde].

string = "12345"; //true 1 se 5 tk toh true
regex = /[1-5]/; //true
regex = /[6]/; //false
// regex = /[6-10]/; //???
regex = /[6-9]/; //false

string = 1239;
regex = /[1-10]/; //false

string = 5; //false
string = 9; //true
regex = /[^2-6]/; //23456 ko chod kr koi aur hai ?

string = "abc"; //true
string = "123"; //false
string = 0123; //0 ko chod koi aur hai
string = 0; //0 ko chod koi aur hai
regex = /[^0]/;

/* 
    . ( Period

        A period matches any single character (except newline '\n').

        Expression	String	Matched?
        ..	a	No match
            ac	1 match
            acd	1 match
            acde	2 matches (contains 4 characters)
 */
string = "a"; //false
string = "ab"; //true
regex = /../;
regex = /./;

// 2 = ^ = we can define pattern here
/* The caret symbol ^ is used to check if a string starts with a certain character. */
string = "bc"; //f start kisse ho rhe ?
string = "bac"; //
regex = /^a/;
string = "abac"; //t
string = "baac"; //f
regex = /^ab/;

/* 
$ - Dollar
The dollar symbol $ is used to check if a string ends with a certain character. 

Expression	String	Matched?
a$	a	1 match
    formula	1 match
    cab	No match
*/

/* 

* - Star
The star symbol * matches zero or more occurrences of the pattern left to it.

Expression	String	Matched?

ma*n	mn	1 match
        man	1 match
        mann	1 match
        main	No match (a is not followed by n)
        woman	1 match
*/

/* const regex = /ab*c/;
const text1 = 'ac';      // Matches: "ac" (zero occurrences of 'b')
const text2 = 'abc';     // Matches: "abc" (one occurrence of 'b')
const text3 = 'abbc';    // Matches: "abbc" (two occurrences of 'b')
const text4 = 'abbbbc';  // Matches: "abbbbc" (multiple occurrences of 'b')

console.log(regex.test(text1));   // Output: true
console.log(regex.test(text2));   // Output: true
console.log(regex.test(text3));   // Output: true
console.log(regex.test(text4));   // Output: true */
string = "maannn"; //t
string = "man"; //t
string = "mn"; //t
string = "ma"; //f
string = "an"; //f
string = "maan"; //t
string = "maaaaaan"; //t
string = "amn"; //t
regex = /ma*n/;

/* 
+ - Plus

The plus symbol + matches one or more occurrences of the pattern left to it.

Expression	String	Matched?
ma+n	mn	No match (no a character)
man	1 match
mann	1 match
main	No match (a is not followed by n)
woman	1 match
*/

/* 
? - Question Mark

The question mark symbol ? matches zero or one occurrence of the pattern left to it.

Expression	String	Matched?
ma?n	mn	1 match
man	1 match
maan	No match (more than one a character)
main	No match (a is not followed by n)
woman	1 match


*/

/* 
{} - Braces

Consider this code: {n,m}. This means at least n, and at most m repetitions of the pattern left to it.

Expression	String	Matched?
a{2,3}	abc dat	No match
abc daat	1 match (at daat)
aabc daaat	2 matches (at aabc and daaat)
aabc daaaat	2 matches (at aabc and daaaat)
*/

// string =   abc@gmail.com
// regex = /[a-z,0-9][@][gmail][.][com]/
// regex = /abc/; //find exact  consective pattern
// regex = /abc/; //find exact  consective pattern
// regex = /abc/; //find exact  consective pattern

let ans = regex.test(string);
console.log(ans);
