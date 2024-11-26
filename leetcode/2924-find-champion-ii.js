/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var findChampion = function (n, edges) {
  if (n == 1) {
    return 0;
  }
  if (edges.length == 1 && n < 3) {
    return edges[0][0];
  }
  if (edges.length == 0 || (n > 2 && edges.length < n / 2)) {
    return -1;
  }

  let tops = [];
  let bottoms = [];
  for (let x = 0; x < edges.length; x++) {
    if (!tops.includes(edges[x][0])) {
      tops.push(edges[x][0]);
    }
    if (!bottoms.includes(edges[x][1])) {
      bottoms.push(edges[x][1]);
    }
  }
  let finals = tops.filter((top) => !bottoms.includes(top));
  if (bottoms.length + finals.length != n) {
    return -1;
  }

  return finals.length == 1 ? finals[0] : -1;
};

console.log(
  findChampion(3, [
    [0, 1],
    [1, 2],
  ]) == 0
);

console.log(findChampion(3, [[0, 1]]) == -1);

console.log(
  findChampion(3, [
    [0, 2],
    [0, 1],
  ]) == 0
);

console.log(
  findChampion(4, [
    [1, 3],
    [2, 1],
  ]) == -1
);
