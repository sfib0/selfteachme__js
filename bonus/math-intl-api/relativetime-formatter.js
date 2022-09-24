// Relative Time Formatter
const relativeTimeFormatter = new Intl.RelativeTimeFormat('en');
// You can change language of the output, try passing 'ur' in the argument.

console.log(relativeTimeFormatter.format(-84, 'years')); // Past time
// 84 years ago

console.log(relativeTimeFormatter.format(84, "minutes")); // Future time
// in 84 minutes

const diff = new Date() - new Date("10/20/2004");
const x = relativeTimeFormatter.format(-diff / (1000 * 60 * 60 * 24), 'days');
console.log('I was born ' + x + '.');
// I was born xxxx.xx days age.