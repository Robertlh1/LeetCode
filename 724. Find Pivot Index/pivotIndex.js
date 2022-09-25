/*
Note: Runtime is highly variable between submissions and I don't have a premium subscription,
  which places me in a lower tier.
Runtime: 78 ms, faster than 94.63% of JavaScript online submissions for Find Pivot Index.
Memory Usage: 44.7 MB, less than 46.38% of JavaScript online submissions for Find Pivot Index.
*/

var pivotIndex = function(nums) {
  let left = 0
  let right = 0
  nums.forEach((num) => {right += num})

  for (let i = 0; i < nums.length; i++) {
    if (i > 0) {
      left += nums[i - 1]
    }

    right -= nums[i]

    if (left === right) {
      return i
    }
  }

  return -1
};

module.exports = pivotIndex