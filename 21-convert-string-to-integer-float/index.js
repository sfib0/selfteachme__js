// In case if we have numbers in double quotes,
// We cannot perform mathematical operations on them.
// And if we dare to do so, we will get it concatenated.

console.log("43" + 1); // 431

// parseInt(string);
console.log(parseInt("43") + 1); // 44

const age = prompt("Enter your age: ");
console.log('Your age will some be ' + parseInt(age) + 1 + '.');

// In case if the number is in decimal form,
const percentage = prompt("Enter your percentage: ");
console.log('More readable percentage is ' + parseFloat(percentage) + '%.');
