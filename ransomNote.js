/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  let noteLetters = ransomNote.split("");
  let magLetters = magazine.split("");
  if (noteLetters.length > magLetters.length) {
    return false;
  }
  for (let x = 0; x < noteLetters.length; x++) {
    for (let y = 0; y < magLetters.length; y++) {
      if (magLetters[y] == noteLetters[x]) {
        magLetters.splice(y, 1);
        break;
      } else if (y + 1 == magLetters.length) {
        return false;
      }
    }
  }
  return true;
};
