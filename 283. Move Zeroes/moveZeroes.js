/*
Note: Runtime is highly variable between submissions and I don't have a premium subscription,
  which places me in a lower tier.
Runtime: 729 ms, faster than 5.00% of JavaScript online submissions for Move Zeroes.
Memory Usage: 47 MB, less than 18.84% of JavaScript online submissions for Move Zeroes.

Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.
*/

var moveZeroes = function(nums) {
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] === 0) {
          let j = i
          while (nums[j] === 0) {
              j++
          }
          if (j < nums.length) {
              nums[i] = nums[j]
              nums[j] = 0
          }
      }
  }

  // This line isn't needed on LeetCode
  return nums
};

module.exports = moveZeroes