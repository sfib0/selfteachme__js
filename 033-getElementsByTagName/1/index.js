const fruitDiv = document.getElementById("fruits");

const fruits = fruitDiv.getElementsByTagName("p");

for (let i = 0; i < fruits.length; i++) {
  fruits[i].style.fontFamily = "Segoe UI";
}

const table = document.getElementById("table");

const cells = table.getElementsByTagName("tr");

for (let i = 0; i < cells.length; i++) {
  if (i % 2 !== 0) {
    cells[i].style.backgroundColor = "#dddddd";
  }
}