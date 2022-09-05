// # If Statements
// - The user may response with something. But 
// - He also wants to have a response. The
// response will be based on the user's input.
// - If Statements can be used to send response
// based on the argument provided in it.
// - The if statements checks if the argument
// provided is true or false. If the argument
// is true, the code inside the if statement
// will be executed. If the argument is false,
// the code inside the if statement will be
// skipped.

// The if statement is written as follows:
const albertLastName = 'Einstein';
const answer = prompt('What is the last name of Albert Einstein?');

if (answer === albertLastName) {
  alert('Correct!');
}

alert('Wrong!');

// If the users answer is same as the value of the
// albertLastName variable, the code inside the if
// statement will be executed. If the users answer
// is not same as the value of the albertLastName
// variable, the code inside the if statement will
// be skipped and the alert('Wrong!'); function will be
// executed.
//
// The === is an operator used to check if the value of
// the left hand-side variable is same as the value of the
// right hand-side variable.
//
// Its following in our case:
// answer === albertLastName