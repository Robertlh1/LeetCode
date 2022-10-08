/*
Note: Runtime is highly variable between submissions and I don't have a premium subscription,
  which places me in a lower tier.
Runtime: 110 ms, faster than 61.66% of JavaScript online submissions for Single Number.
Memory Usage: 45.8 MB, less than 48.90% of JavaScript online submissions for Single Number.

Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.
*/

var singleNumber = function(nums) {
  let result = 0
  let seen = {}
  for (let i = 0; i < nums.length; i++) {
      if (!seen[nums[i]]) {
          result += nums[i]
          seen[nums[i]] = 1
      } else {
          if (seen[nums[i]] === 1) result -= nums[i]
          seen[nums[i]] ++
      }
  }
  return result
};

module.exports = singleNumber