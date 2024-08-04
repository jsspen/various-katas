// https://www.codewars.com/kata/55911ef14065454c75000062/

// Multiply two numbers! Simple!
//     The arguments are passed as strings.
//     The numbers may be way very large
//     Answer should be returned as a string
//     The returned "number" should not start with zeros e.g. 0123 is invalid
//     Usage of BigInt is disallowed

// console.log(multiply("2", "3"), "= 6?", multiply("2", "3") === "6");
// console.log(multiply("30", "69"), "= 2070?", multiply("30", "69") === "2070");
// console.log(multiply("11", "85"), "= 935?", multiply("11", "85") === "935");
// console.log(
//   multiply("1009", "03"),
//   "= 3027?",
//   multiply("1009", "03") === "3027"
// );
console.log(
  multiply("98765", "56894"),
  "= 5619135910?",
  multiply("98765", "56894") === "5619135910"
);

function multiply(a, b) {
  arrayA = a.split("");
  arrayB = b.split("");
  let results = [];
  let sum = "0";
  top = arrayA.length >= arrayB.length ? arrayA : arrayB;
  bottom = arrayB.length <= arrayA.length ? arrayB : arrayA;
  diff = top.length - bottom.length;
  bottom.unshift(...new Array(diff).fill("0"));

  for (let x = bottom.length - 1; x >= 0; x--) {
    let carried = 0;
    let remainder = 0;
    let line = [];
    if (results.length > 0) {
      line.unshift(...new Array(results.length).fill("0"));
    }
    for (let y = top.length - 1; y >= 0; y--) {
      let result = bottom[x] * top[y] + carried;
      if (result > 10 && y !== 0) {
        carried = Math.floor(result / 10);
        remainder = result % 10;
        line.unshift(remainder.toString());
      } else {
        line.unshift(result.toString());
        carried = 0;
      }
      if (y === 0) {
        results.unshift(line);
      }
    }
  }
  if (results.length > 1) {
    for (let z = 0; z + 1 < results.length; z++) {
      sum = add(sum, results[z].join(""));
    }
  } else if (results.length === 1) {
    sum = results.join("");
  }
  while (sum.charAt(0) === "0") {
    sum = sum.substring(1);
  }
  return sum ? sum : "0";
}

function add(a, b) {
  arrayA = a.split("");
  arrayB = b.split("");

  top = arrayA.length >= arrayB.length ? arrayA : arrayB;
  bottom = arrayB.length <= arrayA.length ? arrayB : arrayA;
  diff = top.length - bottom.length;
  bottom.unshift(...new Array(diff).fill("0"));

  let sum = "";
  let carried = 0;

  for (let x = top.length - 1; x >= 0; x--) {
    total = Number(top[x]) + Number(bottom[x]) + carried;
    if (total < 10) {
      sum = total + sum;
      carried = 0;
    }
    if (total >= 10) {
      sum = (total % 10) + sum;
      carried = 1;
    }
  }
  return carried === 1 ? 1 + sum : sum;
}
