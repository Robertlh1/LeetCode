/*
Note: Runtime is highly variable between submissions and I don't have a premium subscription,
  which places me in a lower tier.
Runtime: 146 ms, faster than 58.09% of JavaScript online submissions for Rotate Array.
Memory Usage: 50.8 MB, less than 96.29% of JavaScript online submissions for Rotate Array.

Given an array, rotate the array to the right by k steps, where k is non-negative.
*/

var rotate = function(nums, k) {
  let temp = [...nums]
  let j = nums.length - k % nums.length

  for (let i = 0; i < nums.length; i++) {
    if(j === nums.length) {
      j = 0
    }
    nums[i] = temp[j]
    j++
  }

  // in leetcode this line does not need to be present
  return nums
};

module.exports = rotate