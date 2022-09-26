// It would be more readable if do nested if
// statements.

const marks = prompt('What is your marks?');

if (marks > 50) {
  if (marks > 75) {
    console.log('You are a good student!');
  }
  else if (marks > 65) {
    console.log('You are an average student!');
  }
  else {
    console.log('You are a bad student!');
  }
} else {
  console.log('You are FAIL!');
}

// The first if statement have three blocks of code which
// will be executed if the condition of the first
// if statement is true (i.e. marks > 50). If
// marks > 50 is false then none of the blocks
// of code inside the first if statement will be
// executed. Curly braces from line 8 to 18
// is telling JavaScript that all of the code
// between it is nested code and runs under
// a condition (second-level).

// If there is simple set of tests and outcomes
// then it is better to use nested if statements.
// But if things get complicated then to use
// multiple if statements is good.