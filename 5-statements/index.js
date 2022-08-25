/*
  # Statements
  - A computer program is a list of "instructions"
  to be "executed" by a computer.
  - These programming instructions are called 
  statements.
  - So a JavaScript program is a list of statements.
  - A statement may assign a value to a variable,
  call a function, or perform some other action.
  - Statement together tells what the script will do.
  - Statements are executed in order.
*/

var x = 1; // Statement 1
var y = 2; // Statement 2
var z = x + y; // Statement 3
console.log(z); // Statement 4
alert(z); // Statement 5

/*
  - Semicolons can be used to separate statements.
  - Statements are separated by semicolons.
  */

var x = 1;

//  - Multiple statements seperated by semicolons are allowed in one line.

var y = 2; console.log(2 + y); alert(2 + y);

/* 
  - Semi-colons are optional in JavaScript.
  - JavaScript assumes every new line as a new statement.
*/

var x = 1
var y = 2
var z = x + y
console.log(z)

/*
  - But if you put multiple statements on one line without seperating
  - them with semicolons, you will get an error.
*/

// var x = 1alert(2 + y) // SyntaxError: Unexpected token alert