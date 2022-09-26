//
var x;// available everywhere

addNumbers(); // You can invoke function anywhere
function addNumbers() {
  x = 2 + 2;
  return x;
}


//
subNumbers();
function subNumbers() {
  var y;// Only available inside the function
  y = 12 - 6;
  return console.log(y)
}

// console.log(y); // 'y' is not defined

//
var z = 20; // Its a variable available globally.
console.log(z); // 20

multiNumbers();
function multiNumbers() {
  var z = 2 * 8; // Its a new variable only available in this function.
  return console.log(z) // 16;
}

console.log(z); // 20

//
var u = divideNumbers();

function divideNumbers() {
  var u = 6 / 2;
  return u; // The return value assigned to the above global variable
}

console.log(u); // 3
