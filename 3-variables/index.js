// # Variables

/*
  - Variables are used for storing data values.
  - They can be identified by a name which is called an identifier.
  - They can be used to store any type of data.
*/

var name = 'John Doe';
console.log(name);

/* 
  - `var` is a keyword used to declare a variable.
  - Keyword which is after the `var` keyword is called an identifier.
  - Then we have `=` operator to assign some value to it.
  - Then we have its value `John Doe`.
*/

// More examples:
var age = 25;
var isMarried = true;
var hair = 'black';
console.log(age, isMarried, hair);

/*
  ## Declaration & Initialization
  - Declaration is to make a variable but not to assign a value to it.
  - Initialization is to assign a value to a variable.
  - You can either do declaration & initialization in one line or in multiline.
*/

// ### Declaration & Initialization in multiline:
var x;  // Declaration
x = 'Hello World';  // Initialization
console.log(x);

// ### Declaration & Initialization in one line:
var y = 'Hello World';  // Declaration & Initialization
console.log(y);

// - Only declaration will leave the value undefined.
var z;
console.log(z); // undefined