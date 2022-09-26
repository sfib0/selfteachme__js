/*
  Prompts is a built-in function that allows
  you to recieve some input response form
  the user. The first argument is a question
  to be asked and the second argument is a
  default answer to the question, the second
  argument is optional.
*/

const name = prompt('What is your name?', 'John Doe');

console.log(name); // John Doe OR The user's input

// If the user did not enter anything, the
// default answer will be used.

// For ease, you can assign the provided arguments
// to a seperate variable and the use them inside
// the prompt function.
const genderQuestion = 'What is your gender?';
const genderDefaultAnswer = 'Male';
const gender = prompt(genderQuestion, genderDefaultAnswer);
console.log(gender); // Male OR The user's input

// Even if the user inputs number, JavaScript
// will still recognize it as string.
const ageQuestion = 'What is your gender?';
const ageDefaultAnswer = 30;
const age = prompt(ageQuestion, ageDefaultAnswer);
console.log(typeof age, age); // string 30 OR The user's input

// The values from the prompt cannot be used 
// to add to an existing value of a variable.
// And If you do this, JavaScript will concatenate
// the values instead of adding them.

const childrenQuestion = 'How many children do you have?';
const childrenDefaultAnswer = 2;
let totalChildren = 0;

const children = prompt(childrenQuestion, childrenDefaultAnswer);

console.log(typeof children, children); // string 2 OR The user's input
totalChildren = totalChildren + children; // It will concatenate the values

console.log(totalChildren); // 02

// You can also use prompt as the following because
// Its a function that runs on a window.
const weight = window.prompt('What is your weight?');