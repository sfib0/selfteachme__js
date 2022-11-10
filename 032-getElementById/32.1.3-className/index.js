// #1
function changeClass(id) {
  const link = document.getElementById(id);
  if (link.className === "") {
    console.log("Boom!");
    link.className = "link";
    link.text = "Reponsive";
  } else {
    link.className = "";
    link.text = "Unresponsive"
  }
}

// #2
const links = [
  "https://facebook.com",
  "https://instagram.com",
  "https://twitter.com",
  "https://youtube.com",
  "https://linkedin.com",
  "https://github.com",
  "https://stackoverflow.com",
  "https://jsfiddle.net",
  "https://codepen.io",
]

function changeLinkAndStyle(id) {
  const idx = Math.floor(Math.random() * links.length);
  const link = document.getElementById(id);
  const domain = links[idx].split("/")[2].split(".")[0];
  link.className = "link " + domain
  link.text = domain;
  link.href = links[idx];
}