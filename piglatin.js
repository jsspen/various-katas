console.log(pigIt("Pig Latin Kata !"));

function pigIt(str) {
  let results = "";
  let start = 0;
  for (let x = 0; x <= str.length; x++) {
    if (str[x] === " " || x === str.length) {
      let word = str.slice(start, x);
      start = x + 1;
      results += word.substr(1, word.length - 1) + word.charAt(0);
      if (!/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/.test(word[word.length - 1])) {
        results += "ay";
      }
      if (x !== str.length) {
        results += " ";
      }
    }
  }
  return results;
}
