// chartAt() method can be used to find
// character at a given index.

var exclamationPointCount = 0;
var text = "Hello, world!";

for (var i = 0; i < text.length; i++) {
  if (text.charAt(i) === "!") {
    exclamationPointCount++;
  }
}

console.log(exclamationPointCount); // 1