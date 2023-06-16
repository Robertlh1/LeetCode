/*
Note: Runtime is highly variable between submissions and I don't have a premium subscription,
  which places me in a lower tier.
Runtime 54 ms Beats 94.29%
Memory 42.6 MB Beats 88.57%

Given an integer array nums sorted in non-decreasing order, return an array of the
squares of each number sorted in non-decreasing order.
*/

var minMaxGame = function(nums) {
  let n = nums.length
  while (n > 1) {
    let newNums = new Array(n / 2)
      for (let i = 0; i < newNums.length; i++) {
          if (i % 2 === 0 && (0 <= (i < n/2))) {
              newNums[i] = Math.min(nums[2 * i], nums[2 * i + 1])
          }
          if (i % 2 === 1 && (0 <= (i < n/2))) {
              newNums[i] = Math.max(nums[2 * i], nums[2 * i + 1])
          }
      }
      nums = newNums
      n = nums.length
  }
  return nums[0]
};

module.exports = minMaxGame