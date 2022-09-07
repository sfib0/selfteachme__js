const pets = [];
pets[0] = "Dog";
pets[1] = "Cat";
pets[2] = "Fish";

// You can leave an index empty.
pets[4] = "Bird";

// The 3rd index will be undefined:
console.log(pets[3]); // undefined

// Similarly, if you console.log an unpresented index, it will be undefined:
console.log(pets[5]); // undefined
console.log(pets[6]); // undefined

pets[5] = "Rabbit";
pets[6] = "Hamter";

console.log(pets); // ["Dog", "Cat", "Fish", undefined, "Bird", "Rabbit", "Hamster"]

// I have mispelled the word "Hamster" and 
// Have one more pet to add, a "Turtle". 

pets.pop(); // Removes the last value of the array
pets.push("Hamster", "Turtle"); // Adds "Hamster" and "Turtle" to the end of the `pets` array
