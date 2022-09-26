// replace() method is a one liner to replace
// a segment of a string with another string.

var username = "My name is <user-name>.";
username.replace("<user-name>", "John");
console.log(username); // My name is John.

// If you have multiple segments to replace, you
// can use regular expressions to do so.

var usernames = "My name is <user-name>. His name is <user-name>.";
usernames.replace(/<user-name>/g, "John");
console.log(usernames); // My name is John. His name is John.