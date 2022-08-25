/*  
  # Increment Decrement
  There are special operators for incrementing and decrementing, ++ and --.
  ++ increases a variable by 1 and -- decreases a variable by 1.
*/

var a = 4;
a++;
console.log(a); // 5

var b = 4;
b--;
console.log(b); // 3

// You CANNOT use these operators directly with numbers. Doing this will output a SyntaxError.
// 5++ // SyntaxError

/*
  The operators -- and ++ can be placed after or before the variable name. 
  Using ++/-- after variable is called postfix form.
  Using ++/-- before variable is called prefix form.
*/

// Increment-Prefix Form - It increases the value of the variable and returns the new value.
let f = 1;
let d = ++f;
console.log(d); // 2

// Increment-Postfix Form - It increases the value of the variable and returns the old value.
let g = 1;
let e = g++;
console.log(e); // 1

// Decrement-Prefix Form - It decreases the value of the variable and returns the new value.
let h = 1;
let i = --h;
console.log(i); // 2

// Decrement-Postfix Form - It decreases the value of the variable and returns the old value.
let j = 1;
let k = j--;
console.log(k); // 1

var num1 = 2;
var num2 = 4;
var num3 = 6;
console.log(++num1 - --num2 + --num3) // 5
// 3 - 3 + 5 = 5