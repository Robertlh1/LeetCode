/*
Note: Runtime is highly variable between submissions and I don't have a premium subscription,
  which places me in a lower tier.
Runtime: 85 ms, faster than 84.29% of JavaScript online submissions for Increasing Triplet Subsequence.
Memory Usage: 53.1 MB, less than 96.68% of JavaScript online submissions for Increasing Triplet Subsequence.

Given an integer array nums, return true if there exists a triple of indices (i, j, k) such that i < j < k and nums[i] < nums[j] < nums[k]. If no such indices exists, return false.
*/

var increasingTriplet = function(nums) {
  if (nums.length < 3) return false
  let i, j

  for (let k = 0; k < nums.length; k++) {
      if (i < j && j < nums[k]) return true
      if (nums[k] > i) {
          j = nums[k]
      } else {
          i = nums[k]
      }
  }

  return false
};

module.exports = increasingTriplet