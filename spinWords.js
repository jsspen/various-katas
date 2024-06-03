console.log(spinWords("Will you spin my words please"));

function spinWords(string) {
  let words = string.split(" ");
  let result = [];
  for (let x = 0; x < words.length; x++) {
    let word = words[x].split("");
    if (word.length > 4) {
      word = word.reverse();
    }
    result.push(word.join(""));
  }
  return result.join(" ");
}
