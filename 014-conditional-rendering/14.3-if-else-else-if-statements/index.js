// if else and else if statements
// You may want to check if the answer is correct 
// then return a message, if the answer is incorrect then
// return a message and do something more.

const score = 0;
const userIQ = "Average";

if (question === 'Apple') {
  console.log('Correct!');
} else {
  score--;
  userIQ = "Problematic";
  console.log('Incorrect!');
}

// If the first condition question === 'Apple' is
// true then the code inside the if statement
// will be executed. If the first condition is
// false then the code inside the else statement
// will be executed.

// We can also use an `else if` statement to
// check multiple conditions.

if (question === 'Apple') {
  console.log('Correct!');
} else if (question === 'apple') {
  console.log('Correct!');
} else {
  console.log('Incorrect!');
}

// if statement checks if question is equal to
// 'Apple', then an `else if` statement checks
// if question is equal to 'apple', and
// an `else` statement executes if both
// conditions are false

// - If question is equal to 'Apple' then the code
// inside the if statement executes.
// - If question is equal to 'apple' then the code
// inside the else if statement executes.
// - If both conditions are false then the code
// inside the else statement executes.
