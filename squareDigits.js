function squareDigits(num) {
  let digits = num.toString().split("");
  let results = [];
  digits.forEach((x) => results.push(x * x));
  return Number(results.join(""));
}
