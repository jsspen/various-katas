// Given a valid (IPv4) IP address, return a defanged version of that IP address.

// A defanged IP address replaces every period "." with "[.]".

// Example 1:
// Input: address = "1.1.1.1"
// Output: "1[.]1[.]1[.]1"

// Example 2:
// Input: address = "255.100.50.0"
// Output: "255[.]100[.]50[.]0"

// Constraints:
//     The given address is a valid IPv4 address.

/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function (address) {
  let add = address.split(".");
  return add[0] + "[.]" + add[1] + "[.]" + add[2] + "[.]" + add[3];
};

console.log(defangIPaddr("1.1.1.1") == "1[.]1[.]1[.]1");
console.log(defangIPaddr("255.100.50.0") == "255[.]100[.]50[.]0");
