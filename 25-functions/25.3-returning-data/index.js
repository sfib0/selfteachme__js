//
function organismType(eatMeat, eatVeg) {
  let type = "";
  if (!eatMeat && !eatVeg) {
    console.log("No arguments was passed to the function!")
  }
  else if (eatMeat && eatVeg) {
    type = "Omnivores"
  }
  else if (!eatMeat && eatVeg) {
    type = "Herbivores"
  }
  else {
    type = "Carnivores"
  }
  return type;
}

const eatMeat = true;
const eatVeg = true;

function showTypeToUser(eatMeat, eatVeg) {
  return console.log("Your organism type is: " + organismType(eatMeat, eatVeg));
}

showTypeToUser(true, true); // Your organism type is: Omnivores

//
function findBirthYear(age) {
  let presentYear = new Date().getFullYear();
  let birthYear = presentYear - age;
  return birthYear;
}

function tellToUserBirthYear(month, day, age) {
  let fullBirthDate = month + " " + day + ", " + findBirthYear(age);
  return console.log(fullBirthDate);
}

const month = "October";
const day = 20;
const age = 18;
tellToUserBirthYear(month, day, age); // October 20, 2004