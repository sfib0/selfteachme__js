const bigDecimal = Math.random();
console.log(bigDecimal); // must be between 0 and 1.

// We want the number not to be between 0 and 1 and with 16 decimal places.
// To generate number between 1 and 6 and not decimal:

const improvedNum = (bigDecimal * 6) + 1;
console.log(improvedNum);
const improvedStars = Math.floor(improvedNum);
console.log(improvedStars);

// On line 7, we assign the bigDecimal variable
// and multiplying it by 6 and adding 1.
// This will give us a number between 1 and 6 in
// decimal form.
// Then on line 9, we use Math.floor() to round
// down to the nearest whole number.
