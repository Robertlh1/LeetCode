/*
Note: Runtime is highly variable between submissions and I don't have a premium subscription,
  which places me in a lower tier.
Runtime: 55 ms, faster than 99.10% of JavaScript online submissions for House Robber II.
Memory Usage: 42.1 MB, less than 50.62% of JavaScript online submissions for House Robber II.

You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.
*/

var rob2 = function(nums) {
  if (!nums || nums.length === 0) return 0
  if (nums.length === 1) return nums[0]

  let a = nums.slice(1)
  let b = nums.slice(0, nums.length - 1)
  let resulta = [a[0], Math.max(a[0], a[1])]
  let resultb = [b[0], Math.max(b[0], b[1])]
  let end = a.length - 1

  for (let i = 2; i < nums.length; i++) {
    resulta[i] = Math.max(a[i] + resulta[i - 2], resulta[i - 1]);
    resultb[i] = Math.max(b[i] + resultb[i - 2], resultb[i - 1]);
  }

  return Math.max(resulta[end], resultb[end])
};

module.exports = rob2