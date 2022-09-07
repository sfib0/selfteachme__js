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

const num = 10;
console.log(num, typeof num); // 10 'number'

const str = 'Hello World';
console.log(str, typeof str); // Hello World 'string'

const bool = true;
console.log(bool, typeof bool); // true 'boolean'

let undef;
console.log(undef, typeof undef); // undefined 'undefined'

const nul = null;
console.log(nul, typeof nul); // null 'object' - JavaScript consider type of null as object.

const sym = Symbol();
console.log(sym, typeof sym); // Symbol() 'symbol'

const bigInt = BigInt(10);
console.log(bigInt, typeof bigInt); // 10 'bigint'

// ## Complex Datatypes
const obj = { name: 'John Doe' };
console.log(obj, typeof obj); // { name: 'John Doe' } 'object'

const func = function () { };
console.log(func, typeof func); // [Function: func] 'function'




