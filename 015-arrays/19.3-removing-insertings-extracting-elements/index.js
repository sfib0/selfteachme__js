// Let's define an empty array:
const pets = [];

// Now let's add some values to the array:
pets[0] = "Dog";
pets[1] = "Cat";
pets[2] = "Fish";
pets[3] = "Lion";
pets[4] = "Tiger";
pets[5] = "Bear";

// # unshift method
// Add elements to the beginning of the array, 
// use the `unshift` method:

pets.unshift("Bird", "Rabbit");

// # splice method
// Add elements anywhere as well as remove some 
// elements, we can use the `splice`
// method:

// ## Adding as well as removing elements

pets.splice(2, 2, "Hamster", "Turtle", "Dinosaur");

// In the above code, the first argument is the
// index where we want to start adding or removing
// elements. The second argument is the number of
// elements we want to remove. And all the other
// arguments are the elements we want to add.

// Now the `pets` array will be:
console.log(pets); // ["Bird", "Rabbit", "Hamster", "Turtle", "Dinosaur", "Lion", "Tiger", "Bear"]

// ## Only adding elements

// We could add elements without removing existing
// elements by passing 0 as the second argument:
pets.splice(2, 0, "Fish", "Lion");

// Now the `pets` array will be:
console.log(pets); // ["Bird", "Rabbit", "Fish", "Lion", "Hamster", "Turtle", "Dinosaur", "Lion", "Tiger", "Bear"]

// ## Only removing elements

// We could remove elements without adding new
// elements by not passing the third argument:
pets.splice(2, 2);

// Now the `pets` array will be:
console.log(pets); // ["Bird", "Rabbit", "Hamster", "Turtle", "Dinosaur", "Lion", "Tiger", "Bear"]

// # slice method

// - If we want to extract elements from an array,
// we can use the `slice` method. The following
// code will extract the elements from index 2
// to index 4 and store them in a new array called
// `twoPets` leaving the original `pets` array
// unchanged:
const twoPets = pets.slice(2, 4);
console.log(twoPets); // ["Hamster", "Turtle"]

// - The first argument of the `slice` method is the index
// where we want to start extracting elements.
// - The second argument is the index before which we
// want to stop extracting elements which means
// that in the above code, the index 2 and 3 gets
// copies to a new `twoPets` `const`.

// - If we don't pass the second argument, it will extract all
// the elements from the first argument index to
// the end of the array.

// - If you did not assign the extracted elements
// to a new variable, the `slice` method will
// reduce the original array to the extracted
// elements.