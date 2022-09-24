// A flag is any variable having a default value
// and then changed to a different value under
// certain conditions.

let matchesFound = false;
const numbers = [8, 5, 6, 4, 0, 2, 7]
const numOfIndexes = numbers.length; // Number of indexes in the array (ie. 7)

for (var i = 0; i <= numOfIndexes; i++) {
  if (0 === numbers[i]) {
    matchesFound = true;
    break; // Using break to exit the loop if a match is found
  }
}

if (matchesFound > 0) {
  console.log('Match found!');
} else {
  console.log('No matches found');
}