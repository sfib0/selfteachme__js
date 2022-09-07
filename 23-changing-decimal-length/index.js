const price = 5.99;
const sale = 0.8;
const newPrice = price * sale;
let total = newPrice;

console.log(total); // 4.792000000000001
total = total.toFixed(2);
// number.toFixed(digits-after-decimal-point);
console.log(total); // 4.79

const income = 134.56;
const expense = 43.21;
const liabilities = 23.45;
let netIncome = income - expense - liabilities;

console.log(netIncome); // 67.89999999999999
netIncome = netIncome.toFixed(2);

console.log(netIncome);  // 67.90

let num = 123456789;
let str = num.toString();

if (str.charAt(str.length - 1) === '9') {
  str = str.slice(0, str.length - 1) + '0';
}

num = Number(str);
console.log(num); // 123.456780

// The above checks if the last digit is 9 or not.
// If it is 9, it replaces it with 0 and then
// converts it back to a number.