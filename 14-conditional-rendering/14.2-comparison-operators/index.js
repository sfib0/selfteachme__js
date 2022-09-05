// # Comparison Operators
// - The very first comparison operator which
// you have heard in the previous step is 
// the === operator. 
// - The === operator is used to check if the 
// value of the left hand-side variable is same 
// as the value of the right hand-side variable. 
// Its called the equality operator.

const firstName = prompt('What is your first name?');
const lastName = prompt('What is your last name?');
const fullName = firstName + ' ' + lastName;

if (fullName === 'Albert' + ' ' + 'Einstein') {
  console.log('We were expecting you, Albert!');
}

// - In the above code, we have three const,
// one is firstName which ask for firstName
// and lastName which ask for lastName, and
// fullName which is the concatenation of
// firstName and lastName.
// - Then we have if statement which checks if
// the fullName is equal to the value
// 'Albert' followed by concatenation of
// space and 'Einstein', if it is true then
// it will print to the console 'We were
// expecting you, Albert!'.

// Its case-sensitive means that the
// value of the left hand-side variable must
// be same as the value of the right hand-side
// variable.

console.log("Rose" === "rose")  // false

// Another comparison operator is !== which
// is the opposite of === operator. It checks
// if the value of the left hand-side variable
// is not same as the value of the right hand-
// side variable.

const age = prompt('How old are you?');
if (age !== 18) {
  console.log('You are not 18 years old!');
}

// In the above code, we have one const
// which ask for age, and if statement which
// checks if the age is not equal to 18, if
// it is true then it will print to the
// console 'You are not 18 years old!'.

// This operator (!==) is also case-sensitive
// means value of the left hand-side variable 
// must not be same as the value of the right 
// hand-side variable.

// You can use '==' or '!=' operator. These
// operators don't require the type of the
// variables to be same. It converts the
// variables to the same type and then
// compare them. Its convention to use
// '===' and '!==' operator.

console.log("Rose" !== "rose")  // true

// There are 4 more comparison operators.
// >, <, >=, <=

// > is greater than,
// < is less than,
// >= is greater than or equal to,
// <= is less than or equal to.

console.log(5 > 3)  // true
console.log(5 < 3)  // false
console.log(5 >= 3)  // true
console.log(5 <= 3)  // false