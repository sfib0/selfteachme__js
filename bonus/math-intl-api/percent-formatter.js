// Percent Formatter:
const percentFormatter = Intl.NumberFormat(
  'en',
  { style: 'percent' }
);
console.log(percentFormatter.format(0.12));
