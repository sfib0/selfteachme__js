// Function eleminates need of writing repetitve code

// Write the code once in the following syntax:
// function <functionName>() {
//  <code>
// }

function tellTime() {
  const now = new Date();
  const theHr = now.getHours();
  const theMin = now.getMinutes();
  console.log("Current time: " + theHr + ":" + theMin);
}

// Invoke it whenever you need.
tellTime();