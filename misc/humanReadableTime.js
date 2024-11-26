// https://www.codewars.com/kata/52685f7382004e774f0001f7/train/javascript

// Write a function, which takes a non-negative integer (seconds) as input and returns the time
// in a human-readable format (HH:MM:SS)

//     HH = hours, padded to 2 digits, range: 00 - 99
//     MM = minutes, padded to 2 digits, range: 00 - 59
//     SS = seconds, padded to 2 digits, range: 00 - 59

// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.

console.log(humanReadable(0), "= '00:00:00'");
console.log(humanReadable(59), "= '00:00:59'");
console.log(humanReadable(60), "= '00:01:00'");
console.log(humanReadable(90), "= '00:01:30'");
console.log(humanReadable(3599), "= '00:59:59'");
console.log(humanReadable(3600), "= '01:00:00'");
console.log(humanReadable(45296), "= '12:34:56'");
console.log(humanReadable(86399), "= '23:59:59'");
console.log(humanReadable(86400), "= '24:00:00'");
console.log(humanReadable(359999), "= '99:59:59'");

function humanReadable(seconds) {
  let actualSeconds = seconds % 60 < 10 ? "0" + (seconds % 60) : seconds % 60;
  let minutes = Math.floor(seconds / 60);
  let actualMinutes = minutes % 60 < 10 ? "0" + (minutes % 60) : minutes % 60;
  let hours =
    Math.floor(minutes / 60) < 10
      ? "0" + Math.floor(minutes / 60)
      : Math.floor(minutes / 60);
  return hours + ":" + actualMinutes + ":" + actualSeconds;
}
