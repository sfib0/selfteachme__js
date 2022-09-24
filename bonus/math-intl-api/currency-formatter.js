// Currency Formatter
const currencyFormatter = Intl.NumberFormat(
  'en',
  { style: 'currency', currency: 'USD', notation: 'compact' }
);
console.log(currencyFormatter.format(1_200_000));