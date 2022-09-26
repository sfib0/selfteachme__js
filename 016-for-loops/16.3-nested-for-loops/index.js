const cubs = [
  "dog cub",
  "cat cub",
  "bear cub",
  "lion cub",
  "tiger cub",
]

const mothers = [
  "dog",
  "cat",
  "bear",
  "lion",
  "tiger",
]

for (let i = 0; i < cubs.length; i++) {
  for (let j = 0; j < mothers.length; j++) {
    if (cubs[i] === mothers[j]) {
      console.log(cubs[i] + ' is a cub of ' + mothers[j]);
    }
  }
}

// In the above example, the inner loop runs 5
// times for each iteration of the outer loop.
// If the outer loop counter is i and the inner
// loop is j, j will run 5 times and then i will
// increment by 1 and j will again run 5 times.