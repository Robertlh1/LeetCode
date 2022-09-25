/*
Note: Runtime is highly variable between submissions and I don't have a premium subscription,
  which places me in a lower tier.
Runtime: 89 ms, faster than 62.08% of JavaScript online submissions for Running Sum of 1d Array.
Memory Usage: 42.4 MB, less than 48.60% of JavaScript online submissions for Running Sum of 1d Array.
*/

var runningSum = function(nums) {
  let result = []

  for (let i = 0; i < nums.length; i++) {
      let current = 0

      for (let j = 0; j <= i; j++) {
          current += nums[j]
      }

      result.push(current)
  }

  return result
};

module.exports = runningSum