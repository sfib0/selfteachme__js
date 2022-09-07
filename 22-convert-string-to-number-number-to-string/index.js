// Number Method can be used to can convert
// any numerical number written between 
// quotes to a number.

// Number(string);
console.log(Number("43") + 1); // 44

const age = "17";
console.log('Your age will some be ' + Number(age) + 1 + '.');

// In case if the number is in decimal form,
const percentage = "73.28";
console.log('More readable percentage is ' + Number(percentage) + '%.');


// .toString() method can be used to convert
// any number to a string.

// number.toString();

const birthAge = 17;
const birthYear = 2004;
console.log(birthYear.toString() + ' - the present year = ' + age.toString() + ' years.');