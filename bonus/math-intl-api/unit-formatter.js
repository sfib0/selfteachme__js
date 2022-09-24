// Unit Formatter:
const kmFormatter = Intl.NumberFormat(
  'en',
  { style: 'unit', unit: 'kilometer-per-hour' }
);
console.log(kmFormatter.format(100));