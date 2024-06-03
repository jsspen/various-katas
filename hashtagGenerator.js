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
