// What if the user types in a word that is all 
// uppercase? Or all lowercase? Or a mix of both? 
// We can use the .toLowerCase() and .toUpperCase() 
// methods to make sure that the word is all 
// lowercase or all uppercase before we check it.

let userResponse = prompt("Enter 'orion', correctly!");
userResponse = userResponse.toLowerCase();
// In case the user types in 'ORION' or 'Orion' 
// or 'oRiOn'. .toLowerCase() will make it all 
// lowercase.
const nebulaNames = [
  'orion',
  'tadpole',
  'trifid',
  'canis Major Overdensity',
  'sagittarius Dwarf Elliptical',
  'ursa Minor II',
  'lagoon',
]

const numOfIndexes = numbers.length;

for (var i = 0; i <= numOfIndexes; i++) {
  if (userResponse === nebulaNames[i]) {
    console.log("You done it!");
    break;
  }
}

// Similarly, we can use .toUpperCase() to
// capitalize the first letter of a word.