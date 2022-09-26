const dayOfWk = "Sat";

if (dayOfWk === "Sat" || dayOfWk === "Sun") {
  console.log("Whoopee!");
}
else if (dayOfWk === "Fri") {
  console.log("TGIF");
}
else {
  console.log("Shoot me now!")
}

// The above code can be more readable and consice by 
// using switch statement.

switch (dayOfWk) {
  case "Sat":
    console.log("Whoopee");
    break;
  case "Sun":
    console.log("Whoopee");
    break;
  case "Fri":
    console.log("TGIF!");
    break;
  default:
    console.log("Shoot me now!");
  // no break statement needed
}