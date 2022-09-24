//
function tellAgeToUser(age) {
  console.log("Maybe you don't know, your age is", age);
}

const age = 17;
tellAgeToUser(age); // Maybe you don't know, your age is 17

//
function milliSecToSec(millSec) {
  let sec = millSec / 1000;
  console.log('Seconds: ', sec);
}

const TwentyThousandMilliSec = 20000
milliSecToSec(TwentyThousandMilliSec); // Seconds: 20

//
function tellBirthday(month, date, year) {
  console.log('You were born in: ' + date + ' ' + month + ', ' + year);
}

const month = "October";
const date = 20;
const year = 2004;
tellBirthday(month, date, year); // You were born in: 20 October, 2004

//
const numA = 20;
const numB = 25
addNums(numA, numB); // 45

function addNums(numA, numB) {
  console.log(numA + numB);
}