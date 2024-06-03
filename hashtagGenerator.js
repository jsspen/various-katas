// https://www.codewars.com/kata/52449b062fb80683ec000024
// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!
// Here's the deal:
//     It must start with a hashtag (#).
//     All words must have their first letter capitalized.
//     If the final result is longer than 140 chars it must return false.
//     If the input or the result is an empty string it must return false.

console.log(generateHashtag("Another one bites the dust"));

function generateHashtag(str) {
  if (!str) {
    return false;
  }
  let hashtag = "#";
  for (let x = 0; x < str.length; x++) {
    if (str[x] !== " ") {
      if (x === 0) {
        hashtag = hashtag + str[x].toUpperCase();
      } else if (str[x - 1] === " ") {
        hashtag = hashtag + str[x].toUpperCase();
      } else {
        hashtag = hashtag + str[x];
      }
    }
  }
  if (hashtag.length === 1 || hashtag.length > 140) {
    return false;
  }
  return hashtag;
}
