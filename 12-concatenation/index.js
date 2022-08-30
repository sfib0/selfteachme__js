console.log('Thanks for your input!');

// You may want to also show the username on the message
// You can do this like that:
console.log("Thanks, " + "Susan" + "!");

// You can also do it like that:
var userName = 'Susan';
console.log('Thanks, ' + userName + '!'); // Thanks, Susan!

// It would be good if we put both message and symbol 
// in a variable.
var message = 'Thanks, ';
var banger = '!';
console.log(message + userName + banger); // Thanks, Susan!

// Or you can also store complete message in a variable:
var thanking = message + userName + banger;
console.log(thanking); // Thanks, Susan!

// Puttong numbers having double or single quotes
// will be concatenated rather than being added:
console.log("2" + "2"); // 22

// If you mix string and numbers:
console.log("2 + 2 equals to " + 2 + 2);