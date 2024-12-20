// You are given an integer array nums. In one operation, you can add or subtract 1 from any element of nums.
// Return the minimum number of operations to make all elements of nums divisible by 3.

// Example 1:
// Input: nums = [1,2,3,4]
// Output: 3

// Explanation:
// All array elements can be made divisible by 3 using 3 operations:
//     Subtract 1 from 1.
//     Add 1 to 2.
//     Subtract 1 from 4.

// Example 2:
// Input: nums = [3,6,9]
// Output: 0

// Constraints:
//     1 <= nums.length <= 50
//     1 <= nums[i] <= 50

/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function (nums) {
  let count = 0;

  for (let x = 0; x < nums.length; x++) {
    if (nums[x] % 3 == 0) {
      continue;
    } else if ((nums[x] + 1) % 3 == 0 || (nums[x] - 1) % 3 == 0) {
      count++;
      continue;
    }
  }

  return count;
};

console.log(minimumOperations([1, 2, 3, 4]) == 3);
console.log(minimumOperations([3, 6, 9]) == 0);
