// Maybe you may need to work with more than
// 10 names of US Presidents. In this case,

const FirstPresident = "George Washington";
const SecondPresident = "John Adams";
const ThirdPresident = "Thomas Jefferson";
const FourthPresident = "James Madison";
const FifthPresident = "James Monroe";
const SixthPresident = "John Quincy Adams";
const SeventhPresident = "Andrew Jackson";
const EighthPresident = "Martin Van Buren";
const NinthPresident = "William Henry Harrison";
const TenthPresident = "John Tyler";

// Now imagine, working with 10 different variables.
// Like if we want to print every president's name
// to the console, we would have to write 10 console.log
// statements.

// An alternative to this is to use an array.
const TenUSPresidents = [
  "George Washington",
  "John Adams",
  "Thomas Jefferson",
  "James Madison",
  "James Monroe",
  "John Quincy Adams",
  "Andrew Jackson",
  "Martin Van Buren",
  "William Henry Harrison",
  "John Tyler"
];

// - An array can have multiple values of different
// data types. In the above example, we have an 
// array named TenUSPresidents which has 10 values.

// - You can access the values of an array by using
// the index of the value. The index of an array
// starts from 0. So the first value of an array
// will have an index of 0, the second value will
// have an index of 1, and so on.

// To access first index of the TenUSPresidents array:
console.log('First US president: ' + TenUSPresidents[0] + '(1789-1797)');

// Now access the last index of the TenUSPresidents array:
console.log('Last US president: ' + TenUSPresidents[9] + '(1841-1845)');

// - We can mix different data types in an array.
const MixedArray = [
  "Hello",
  1,
  true,
  2.5,
  false,
  "World"
];

// - To assign a value to an array, we can first 
// type the array name, then the index of the
// value we want to assign, then the value we
// want to assign. If we forget to type the index
// of the value we want to assign, then the array
// will become a normal variable.

// Wrong way:
// TenUSPresidents = "James K. Polk";

// Right way:
TenUSPresidents[10] = "James K. Polk";
// TenUSPresidents now has 11 values.

