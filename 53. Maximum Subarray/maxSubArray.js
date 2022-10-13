/*
Note: Runtime is highly variable between submissions and I don't have a premium subscription,
  which places me in a lower tier.
Runtime: 112 ms, faster than 74.49% of JavaScript online submissions for Maximum Subarray.
Memory Usage: 49.9 MB, less than 90.97% of JavaScript online submissions for Maximum Subarray.

Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

A subarray is a contiguous part of an array.
*/

var maxSubArray = function(nums) {
  let max = nums[0], current = max

  for (let i = 1; i < nums.length; i++) {
    current = Math.max(current + nums[i], nums[i])
    if (current > max) max = current
  }

  return max
};

module.exports = maxSubArray