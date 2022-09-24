// Social Media Count:
const countFormatter = Intl.NumberFormat(
  'en',
  { notation: 'compact' }
);
console.log(countFormatter.format(1200000));