/*
  # BODMAS
  Computer uses BODMAS rule to evaluate expressions involving more than one 
  operators.
*/

console.log(2 + 4 * (6 / 8) - 10); // -5

/*
  On the above expression:
  - First the values inside the brackets will be evaluated. (6 / 8) = 0.75
  - Then multiplication will be evaluated. 4 * 0.75 = 3
  - Then addition. 2 + 3 = 5
  - Then subtraction. 5 - 10 = -5
*/

/*
  # Precedence
  Consider the following expression where OP1 and OP2 are two different operators.
  a OP1 b OP2 c

  The combination above has two possible interpretations.
  (a OP1 b) OP2 c
  a OP1 (b OP2 c)

  Operator with highest precedence level gets first, no matter if an operator of low
  precedence is used before it.
*/

// In the following both expressions, addition gets first and then subtraction
console.log(3 + 10 - 2); // 11
console.log(3 - 10 + 2); // -5

// In the following both expressions, multiplication gets first and then addition
console.log(3 * 10 + 2); // 32
console.log(3 + 10 * 2); // 23

// The following both expression outputs different results because precedence of brackets are higher and gets first.
console.log(3 - (10 * 2)); // -17
console.log((3 - 10) * 2); // -14

/*
  # Associativity
  Within operators of the same precendency, JavaScript groups them by
  associativity, for example, left-to-right (a OP1 b) OP2 c and right
  to left a OP1 (b OP2 c)
  You can check precedency table from here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#table
*/