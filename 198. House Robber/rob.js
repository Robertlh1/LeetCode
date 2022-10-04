/*
Note: Runtime is highly variable between submissions and I don't have a premium subscription,
  which places me in a lower tier.
Runtime: 99 ms, faster than 35.29% of JavaScript online submissions for House Robber.
Memory Usage: 41.8 MB, less than 77.98% of JavaScript online submissions for House Robber.

You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.
*/
var rob = function(nums) {
  if (!nums || nums.length === 0) return 0
  let result = [nums[0], Math.max(nums[0], nums[1])]

  for (let i = 2; i < nums.length; i++) {
      result[i] = Math.max(nums[i] + result[i - 2], result[i - 1]);
  }

  return result[nums.length - 1]
}

module.exports = rob