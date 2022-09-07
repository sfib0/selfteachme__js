// indexOf method can be used to find index of a segment of a string.
var text = "My name is <user-name>.";
var userName = text.indexOf("<user-name>");
console.log(userName) // 11
if (userName !== -1) {
  text = text.slice(0, userName) + "John" + text.slice(userName + 11);
}

console.log(text);

// The first text.slice extracts beginning of text
// value till index before <user-name>, concatenates
// John after it and second text.slice removes
// <user-name> from text value.

// Similarly, we can use .lastIndexOf() to start
// searching from the end of the string.
var alpha = "a b c d a b c d a b c d";

var a = alpha.lastIndexOf("a");
console.log(a); // 16