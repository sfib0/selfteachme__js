// # Extracting Parts of a String
// - But if we want the user response to be 
// title case, .toUpperCase() and .toLowerCase()
// won't work. We need to use a different method.

let userResponse = "orion";
const firstChar = userResponse.slice(0, 1);
// ^ The first character of the user's response.
const restOfWord = userResponse.slice(1);
// ^ The rest of the user's response.
userResponse = firstChar.toUpperCase() + restOfWord.toLowerCase();

const nebulaNames = [
  'orion',
  'tadpole',
  'trifid',
  'canis Major Overdensity',
  'sagittarius Dwarf Elliptical',
  'ursa Minor II',
  'lagoon',
]

const numOfIndexes = nebulaNames.length;

for (var i = 0; i <= numOfIndexes; i++) {
  if (userResponse === nebulaNames[i]) {
    console.log("You done it!");
    break;
  }
}

// # Measuring the Length of a String
// - We can also use the .length property to
// measure the length of a string.
// - We will use this to tranform month 
// full names into their abbreviations.

let month = "January";
let monthAbbreviation;
month = month.toLowerCase(); // january
const monthLength = month.length; // 7

if (monthLength > 3) {
  monthAbbreviation = month.slice(0, 3); // jan
}

console.log('Month abbreviation for ' + month + ' is ' + monthAbbreviation);
// Month abbreviation for january is jan

// Now using .length with for loop
var input = "De c e m b e r";

var inputLength = input.length; // 10

for (var i = 0; i <= inputLength; i++) {
  if (input[i] === " ") {
    console.log(i)
    input = input.slice(0, i) + input.slice(i + 1);
  }
}

console.log(input); // December

// In the above example, we are using the .length
// property to measure the length of the string
// and then using that length to determine how
// many times to run the for loop. We are also
// using the .slice() method to remove the spaces
// from the string.

// In line 58, we first use the .slice() method
// to extract the part of the string before the
// space. Then we use the .slice() method again
// to extract the part of the string after the
// space. We then use the + operator to concatenate
// the two parts of the string together.
