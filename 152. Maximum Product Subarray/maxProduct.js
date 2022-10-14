/*
Note: Runtime is highly variable between submissions and I don't have a premium subscription,
  which places me in a lower tier.
Runtime: 75 ms, faster than 88.09% of JavaScript online submissions for Maximum Product Subarray.
Memory Usage: 44.3 MB, less than 27.95% of JavaScript online submissions for Maximum Product Subarray.

Given an integer array nums, find a contiguous non-empty subarray within the array that has the largest product, and return the product.

The test cases are generated so that the answer will fit in a 32-bit integer.

A subarray is a contiguous subsequence of the array.
*/

var maxProduct = function(nums) {
  let max = nums[0], currMax = max, currMin = max

  for (let i = 1; i < nums.length; i++) {
    temp = [currMax * nums[i], currMin * nums[i]]
    currMax = Math.max(nums[i], temp[0], temp[1]);
    currMin = Math.min(nums[i], temp[0], temp[1]);
    max = Math.max(currMax, max)
  }

  return max
};

module.exports = maxProduct