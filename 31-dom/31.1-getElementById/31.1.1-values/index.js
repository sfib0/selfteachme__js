// #1
function checkEmail(fieldId) {
  const val = document.getElementById(fieldId).value;
  if (val === "") {
    return alert("IT CANNOT BE EMPTY!!");
  }
}

// #2
function fillCity() {
  let cityName = "";
  const zipCode = document.getElementById("zip").value;
  switch (zipCode) {
    case "60608":
      cityName = "Chicago";
      break;
    case "68114":
      cityName = "Omaha";
      break;
    case "53212":
      cityName = "Milwaukoo";
      break;
  }
  document.getElementById("city").value = cityName;
}

// #3
function expandLorem() {
  const expandedLorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at blandit nisi. Integer at pulvinar massa. Nullam laoreet lacinia bibendum. Nullam blandit est at tortor porttitor, et cursus diam pharetra. Aenean feugiat dignissim tempus. Curabitur ut sapien quis nibh suscipit lobortis a id ex. Nam et pretium mauris, vel vulputate mi. Aenean eget tincidunt velit. Phasellus viverra felis at mi eleifend, ut feugiat elit tristique. Nullam in elit neque. In tincidunt metus justo, rhoncus placerat purus laoreet nec.";
  return document.getElementById("lorem").innerHTML = expandedLorem;
}