console.log(add("888", "222"));

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
