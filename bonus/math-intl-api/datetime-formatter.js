
// Date Formatter:
const dateFormatter = Intl.DateTimeFormat(
  'en',
  { dateStyle: 'full' }
);
console.log(dateFormatter.format(new Date()));
// Thurday, September 8, 2022

// Time Formatter:
const timeFormatter = Intl.DateTimeFormat(
  'en',
  { timeStyle: 'short' }
);
console.log(timeFormatter.format(new Date()));

// Date and Time Formatter:
const dateTimeFormatter = Intl.DateTimeFormat(
  'en',
  { dateStyle: 'full', timeStyle: 'short' }
);
console.log(dateTimeFormatter.format(new Date()));
// Thurday, September 8, 2022 at 8:41 AM