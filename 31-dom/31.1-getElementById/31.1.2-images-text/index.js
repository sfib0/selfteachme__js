// #1
const sonic = document.getElementById("sonic");

function makeInvisible() {
  return sonic.className = "hidden";
}

// #2
const p = document.getElementById("p");

function increaseSize() {
  return p.className += " big";
}

// #3
const charac = document.getElementById("charac");
const characId = document.getElementById("charac-id").value;

function changePic() {
  const num = Math.floor(Math.random() * 5) + 1;
  if (characId === "" && characId > 6) {
    alert("Boom!")
    charac.src = characId.value + ".png";
  }
  charac.src = num + ".png"
}