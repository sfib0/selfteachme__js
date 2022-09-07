// && - AND
// && is used if we want both conditions at the
// right and left side of the operator to be true.

const weight = prompt('What is your weight?');
const time = prompt('How long you take to run 40 yards?');
const age = prompt('How old are you?');
const gender = prompt('What is your gender?');

if (weight > 100 && time < 6) {
  console.log('You are a good runner!');
} else {
  console.log('You are not a good runner!');
}

// In the above code, we have an if statement
// which checks if weight is greater than 100 
// and time is less than 6, if both conditions
// are true then the code inside the if statement
// will be executed, if one of the conditions
// is false then the code inside the else
// statement will be executed.

// You can add as many conditions as you want:
if (weight > 100 && time < 6 && age > 17 && gender === "male") {
  console.log('You are a good runner!');
} else {
  console.log('You are not a good runner!');
}

// || - OR
// || is used if we want atleast one of the 
// conditions at the right and left side of
// the operator to be true.

if (weight > 100 || time < 6) {
  console.log('You are a good runner!');
} else {
  console.log('You are not a good runner!');
}

// If statement checks if weight is greater than 100
// or time is less than 6, if one of the
// conditions is true then the code inside
// the if statement will be executed, if
// both conditions are false then the code
// inside the else statement will be executed.

// A little extra complex example:
const res = prompt('What is your residency?');

if (age > 65 || age < 21 && res === "U.S.") {
  console.log('Thanks for your service!');
}

// If statement checks if age is greater than 65 
// `age < 65` or `||` age is less than 21 
// `age < 21` and `&&` res is equal to "U.S." 
// `res === "U.S."`, if one of the conditions 
// is true then the code inside the if statement 
// will be executed. 

// We can use parenthesis to overcome the 
// ambiguity of the above code:

// In the following code, if age is over 65
// or age is under 21 and residency is in the
// "U.S." then the code inside the if statement
// will be executed.

if ((age > 65 || age < 21) && res === "U.S.") {
  console.log('Thanks for your service!');
}

// In the following code, if age is over 65
// or age is under 21 and residency is in the
// "U.S." then the code inside the if statement 
// will be executed.

if (age > 65 || (age < 21 && res === "U.S.")) {
  console.log('Thanks for your service!');
}
