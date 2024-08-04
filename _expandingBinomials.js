// https://www.codewars.com/kata/540d0fdd3b6532e5c3000b5b/
// Write a function that takes in an expression with a single, one character variable, and expands it.
// The expression is in the form (ax+b)^n where a and b are integers which may be positive or negative,
//     x is any single character variable, and n is a natural number.
// If a = 1, no coefficient will be placed in front of the variable.
// If a = -1, a "-" will be placed in front of the variable.
// The expanded form should be returned as a string in the form ax^b+cx^d+ex^f...
//     where a, c, and e are the coefficients of the term,
//     x is the original one character variable that was passed in the original expression
//     and b, d, and f, are the powers that x is being raised toin each term and are in decreasing order.
// If the coefficient of a term is zero, the term should not be included.
// If the coefficient of a term is one, the coefficient should not be included.
// If the coefficient of a term is -1, only the "-" should be included.
// If the power of the term is 0, only the coefficient should be included.
// If the power of the term is 1, the caret and power should be excluded.

console.log(expand("(x+1)^2"));
// console.log(expand("(p-1)^3"));

function expand(expr) {
  console.log("(x+1)^2");
  let splitInput = expr.replace(/[()]/g, "").split("^");
  let exponent = splitInput[splitInput.length - 1];
  let parts = splitInput[0].split("");
  console.log(parts);
  return null;
}
