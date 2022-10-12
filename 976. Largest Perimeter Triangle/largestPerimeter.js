/*
Note: Runtime is highly variable between submissions and I don't have a premium subscription,
  which places me in a lower tier.
Runtime: 106 ms, faster than 91.47% of JavaScript online submissions for Largest Perimeter Triangle.
Memory Usage: 45.3 MB, less than 64.53% of JavaScript online submissions for Largest Perimeter Triangle.

Given an integer array nums, return the largest perimeter of a triangle with a non-zero area, formed from three of these lengths. If it is impossible to form any triangle of a non-zero area, return 0.
*/

var largestPerimeter = function(nums) {
  let sorted = nums.sort((a, b) => b-a)
  let result = 0

  for (let i = 0; i < sorted.length - 2; i++) {
    let duo = nums[i + 1] + nums[i + 2]
    let tri = nums[i] + nums[i + 1] + nums[i + 2]
    if (duo > nums[i] && tri > result) result = tri
  }

  return result
};

module.exports = largestPerimeter