// Plain Number Formatter:
const numberFormatter = Intl.NumberFormat('en-IN', {
  maximumSignificantDigits: 3
});
console.log(numberFormatter.format(1234));
