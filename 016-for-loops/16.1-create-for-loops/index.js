const user = prompt("Enter your role:");
const userRoles = [
  "admin",
  "manager",
  "user",
  "guest",
  "banned"
];

// Checking if the `user` value matches with 
// atleast one of the index of `userRoles` array.
if (user === userRoles[0]) {
  console.log('Welcome admin');
} else if (user === userRoles[1]) {
  console.log('Welcome manager');
} else if (user === userRoles[2]) {
  console.log('Welcome user');
} else {
  console.log('Welcome guest');
}

// The following is more readable, maintainable and concise:

for (let i = 0; i <= 4; i++) {
  // for (variable; condition; increment/decrement) {
  //    code to be executed
  // }
  if (user === userRoles[i]) {
    console.log(`Welcome ${user}`);
  }
}

// variable: Variable to be used in the loop and
// is executed before the loop starts (i = 0). Variable
// starts from 0 but you can start from any number.

// condition: Loop will run as long as the condition is true (i < userRoles.length).

// increment/decrement: Increases a variable
// (i.e. i) by 1 (i++). In our case, i increments
// by 1 until it reaches 4. The loops runs 5 times.
// The i variable increments by 1 and checks the index
// of the array one by one. You can also decrement
// by 1 (i--) or any number (i += 2) depending on
// your needs.
