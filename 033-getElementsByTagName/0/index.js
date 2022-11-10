const par = document.getElementsByTagName("p");

par[1].innerHTML = "Plum";

for (let i = 0; i < par.length; i++) {
  par[i].style.fontFamily = "Montserrat"
}

const divs = document.getElementsByTagName("div");

const imgs = document.getElementsByTagName("img");

const ulists = document.getElementsByTagName("ul");

console.log(divs);
console.log(imgs);
console.log(ulists);