// 'while' loop is an alternative for 
// 'for' loop

let i = 0;
while (i <= 3) {
  console.log(i); // 0, 1, 2, 3
  i++
}

//
let total = 0;
let j = 0;

while (j <= 99) {
  total = total + j
  j++;
}

console.log(j); // 100
console.log(total); // 4950

let tot = 0;
let k = 10;

while (k > 0) {
  tot = tot + k;
  k--;
}

console.log(tot); // 55
console.log(k); // 0


//
let x = 0;

while (x < 10) {
  x++;
}

console.log(x); // 10


//
const animals = ["horse", "ox", "cow", "pig", "duck"];
let w = 0;

while(w < animals.length) {
  if (animals[w] === "pig") {
    console.log("Found it at the " + w + "rd" + " index!"); // Found it at the 3rd index! 
    break;
  }
  w++;
}

//
let count = 0;
while(count < 3) {
  console.log(count); // 0, 1, 2
  count++;
}