

const countFormatter = Intl.NumberFormat(
  'en',
  { notation: 'compact' }
);
console.log(countFormatter.format(1200000));

const currencyFormatter = Intl.NumberFormat(
  'en',
  { style: 'currency', currency: 'USD', notation: 'compact' }
);
console.log(currencyFormatter.format(1_200_000));

const percentFormatter = Intl.NumberFormat(
  'en',
  { style: 'percent' }
);
console.log(percentFormatter.format(0.12));

// Date
const dateFormatter = Intl.DateTimeFormat(
  'en',
  { dateStyle: 'full' }
);
console.log(dateFormatter.format(new Date()));
// Thurday, September 8, 2022

// Time
const timeFormatter = Intl.DateTimeFormat(
  'en',
  { timeStyle: 'short' }
);
console.log(timeFormatter.format(new Date()));

// Date and Time
const dateTimeFormatter = Intl.DateTimeFormat(
  'en',
  { dateStyle: 'full', timeStyle: 'short' }
);
console.log(dateTimeFormatter.format(new Date()));
// Thurday, September 8, 2022 at 8:41 AM

// Unit
const kmFormatter = Intl.NumberFormat(
  'en',
  { style: 'unit', unit: 'kilometer-per-hour' }
);
console.log(kmFormatter.format(100));

// Plain
const numberFormatter = Intl.NumberFormat('en-IN', {
  maximumSignificantDigits: 3
});
console.log(numberFormatter.format(1234));

