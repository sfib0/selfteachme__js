// Arithmetic Operators

var a = 12;
var b = 3;

// Addition
var c = a + b; // Add two numbers together.

// Subtraction
var d = a - b; // Subtract the right number from the left.

// Multiplication
var e = a * b; // Multiplies two number together.

// Division
var f = a / b; // Divides the left number by the right.

// Modulos
var g = a % b; // Divides the left number by the right and return the remainder.

// Exponent
var h = a ** b;
// Raises a base number to the exponent power means the base number multiplied by itself, exponent times. e.g {base} ** {exponent}

console.log('Addition: ', c); // Addition: 15
console.log('Subtractions: ', d); // Subtraction: 9
console.log('Multiplication: ', e); // Multiplication: 36
console.log('Division: ', f); // Division: 4
console.log('Modulos (Remainder): ', g); // Modulos (Remainder): 0
console.log('Exponentiation: ', h) // Exponentiation: 1728

// Assignment Operator
// Assignment Operator is used to assign a value to a variable.

let x = 3;
const y = 6;

console.log(x); // 3
console.log(x = x + y); // 9
console.log(x = x * y); // 18

// Arithmetic Assignment Operators (Shorthand to assignment operators):
console.log(x += y); // 60
console.log(x -= y); // 54
console.log(x /= y); // 9
console.log(x *= y); // 54
console.log(x %= y); // 0
console.log(x **= y); // 0