console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]));

function moveZeros(arr) {
  let size = arr.length;
  let noZeros = arr.filter((x) => x !== 0);
  noZeros.push(...new Array(size - noZeros.length).fill(0));
  return noZeros;
}
