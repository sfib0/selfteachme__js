// To use strings, use double or single quotes around text.
console.log('Hello World'); // Single quotes
console.log("Hello World"); // Double quotes
// console.log(Hello world) // Error because JavaScript started recognizing the word 'Hello World' as a keyword.

/*

  - Console.log outputs messages to the console.
  - Console window is a place where you can see all
  sorts of messages like errors, warnings, and messages.
  - When executing code in a Node environment, the console
  appears on the terminal just after you run the command.

  - Run this code by:
  ```bash
  node index.js
  ```

*/

const name = 'John';

console.log("Hello, %s ", name);
// %s is a placeholder for a string.");

console.log(`Hello, ${name}`);
// Template literals - use backticks instead of double or single quotes.
// Then enter ${} and enter the variable name inside of those curly brackets.