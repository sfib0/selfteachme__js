var i = 0;

while (i > 3) {
  console.log(i);
  i++;
}

do {
  console.log(i);
  i++;
  // For the very first time, both of 
  // the above lines will executed first 
  // and then the conditon line 13 will be executed.
} while (i > 3);

//
let o = 0;

do {
  console.log(i); // 1, 2, 3... 11
  i++
} while (i < 12)

let p = 10;
let tot = 0;

do {
  tot = tot + p;
  p--;
} while (p > 0)

console.log(p) // 0
console.log(tot) // 55

//
const animals = ["horse", "ox", "cow", "pig", "duck"];
let w = 0;

do {
  if (animals[w] === "pig") {
    console.log("Found it at the " + w + "rd" + " index!");
    // Found it at the 3rd index! 
    break;
  }
  w++;
} while (w < animals.length);

//
let count = 0;
do {
  console.log(count); // 0, 1, 2
  count++;
} while (count < 3);