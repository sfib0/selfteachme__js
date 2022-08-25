/*
  JavaScript is dynamically typed language.
  Whenever you reassign a value with a different type, JavaScript automatically detect its type.
  You are not required to declare the type of a variable.
*/

// To check type of a function, use typeof operator.

var a = 1;
console.log(typeof a); // number
a = "a";
console.log(typeof a); // string
a = false;
console.log(typeof a); // boolean
a = null;
console.log(typeof a); // object - JavaScript consider type of null as object.

/* 
  # Datatypes
  Datatypes defines the type of data that is stored in a variable.
*/

// ## Primitive Datatypes

// Number
// Any numerical information is stored as a number.
const num = 10;
console.log(num, typeof num); // 10 'number'

// String
// Any textual information is stored as a string.
const str = 'Hello World';
console.log(str, typeof str); // Hello World 'string'

// Boolean
// Any true or false information is stored as a boolean.
const bool = true;
console.log(bool, typeof bool); // true 'boolean'

// Undefined
// An uninitialized variable is assigned the value undefined.
let undef;
console.log(undef, typeof undef); // undefined 'undefined'

// Null
// No value.
const nul = null;
console.log(nul, typeof nul); // null 'object' - JavaScript consider type of null as object.

// Symbol
// A unique object.
const sym = Symbol();
console.log(sym, typeof sym); // Symbol() 'symbol'

// BigInt
// A large integer.
const bigInt = BigInt(10);
console.log(bigInt, typeof bigInt); // 10 'bigint'

// ## Complex Datatypes
// Object
// Objects are used to store data in key-value pairs.
const obj = { name: 'John Doe' };
console.log(obj, typeof obj); // { name: 'John Doe' } 'object'

// Function
// A function is a callable block of code. It lies under the object datatype.
const func = function () { };
console.log(func, typeof func); // [Function: func] 'function'




