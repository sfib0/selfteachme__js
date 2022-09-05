// Let's define an empty array:
const pets = [];

// Now let's add some values to the array:
pets[0] = "Dog";
pets[1] = "Cat";
pets[2] = "Fish";

// You can leave an index empty but its not recommended:
pets[4] = "Bird";

// The 3rd index will be undefined:
console.log(pets[3]); // undefined

// Similarly, if you console.log an index which is
// not defined, it will be undefined:
console.log(pets[5]); // undefined
console.log(pets[6]); // undefined

// Let's assign more values to the `pets` array:
pets[5] = "Rabbit";
pets[6] = "Hamter";

// Now the pets array has 7 values:
console.log(pets); // ["Dog", "Cat", "Fish", undefined, "Bird", "Rabbit", "Hamster"]

// I just found I have mispelled the word "Hamster" and 
// I also have one more pet to add, a "Turtle". 
// let's fix it:
pets.pop(); // Removes the last value of the array
pets.push("Hamster", "Turtle"); // Adds "Hamster" and "Turtle" to the end of the `pets` array
