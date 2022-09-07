// Math.round()
const cost = 24.99;
const tax = 0.07;
const shipping = 2.00;
let total = cost + (cost * tax) + shipping;

console.log(total); // 28.7393

total = Math.round(total);
console.log(total); // 29

// Math.ceil() can round up to the nearest whole number.
total = total + 0.01; // 29.01
total = Math.ceil(total);
console.log(total); // 30

// Math.floor() can round down to the nearest whole number.
total = total - 0.01; // 29.99
total = Math.floor(total);
console.log(total); // 29