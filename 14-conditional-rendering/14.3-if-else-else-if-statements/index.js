// if else and else if statements
// Sometimes you may need to check multiple 
// conditions. For example, you may want to
// check if the answer is correct then return
// a message, if the answer is incorrect then
// return a message.

const question = prompt('What is the spelling of an Apple?');

if (question === 'Apple') {
  console.log('Correct!');
}

if (question !== 'Apple') {
  console.log('Incorrect!');
}

// In the above code, we have one const which
// ask for `question`, and an `if` statement which
// checks if the `question` value is equal to 'Apple',
// if it is true then it will print to the
// console 'Correct!'. And another `if` statement 
// which checks if the `question` is not equal to
// 'Apple', if it is true then it will print to
// the console 'Incorrect!'.

// The above code would be more readable if we
// use an `else` statement.

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

// - In the above code, we have an if statement
// which checks if question is equal to 'Apple',
// then an `else if` statement which checks if
// question is equal to 'apple', and an `else`
// statement which will be executed if both
// conditions are false

// - If question is equal to 'Apple' then the code
// inside the if statement will be executed.
// - If question is equal to 'apple' then the code
// inside the else if statement will be executed.
// - If both conditions are false then the code
// inside the else statement will be executed.
