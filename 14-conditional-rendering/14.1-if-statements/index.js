// # If Statements
// - If Statements can be used to send response
// based on the argument provided in it.

// The if statement is written as follows:
const albertLastName = 'Einstein';
const answer = prompt('What is the last name of Albert Einstein?');

if (answer === albertLastName) {
  alert('Correct!');
}

alert('Wrong!');

// If the users is same as the value of
// albertLastName variable, the code inside the if
// statement will be executed. If the users not
// equal to the albertLastName value, the code
// inside the if statement will
// be skipped and the alert('Wrong!'); function will be
// executed.
//
// The === is an operator used to check if the value of
// the left hand-side variable is same as the value of the
// right hand-side variable.
//
// Its following in our case:
// answer === albertLastName