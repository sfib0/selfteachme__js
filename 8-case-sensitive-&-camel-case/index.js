// Case-sensitive
// The following variables are not same:
var apple = "🍎";
var Apple = "🍎";

console.log(apple);
console.log(Apple);

// # camelCase
// - When an application grows, then variable name
// needs to be more understandable.
// - For example, you may need to make a variable
// for Authentication Token.
// - It will be good if we name it like:
// `authenticationToken`
// - The camelCase helps you to make you easily 
// understand the variable containing two words
// by using captial letter for each new word.

var authenticationToken = 'xxxxx-xxxxx-xxxxx';
var totalUsers = 100;
var userOS = 'MacOS';