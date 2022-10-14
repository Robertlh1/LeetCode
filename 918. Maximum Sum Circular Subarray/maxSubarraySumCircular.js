/*
Note: Runtime is highly variable between submissions and I don't have a premium subscription,
  which places me in a lower tier.
Runtime: 70 ms, faster than 99.40% of JavaScript online submissions for Maximum Sum Circular Subarray.
Memory Usage: 47 MB, less than 91.67% of JavaScript online submissions for Maximum Sum Circular Subarray.

Given a circular integer array nums of length n, return the maximum possible sum of a non-empty subarray of nums.

A circular array means the end of the array connects to the beginning of the array. Formally, the next element of nums[i] is nums[(i + 1) % n] and the previous element of nums[i] is nums[(i - 1 + n) % n].

A subarray may only include each element of the fixed buffer nums at most once. Formally, for a subarray nums[i], nums[i + 1], ..., nums[j], there does not exist i <= k1, k2 <= j with k1 % n == k2 % n.
*/

var maxSubarraySumCircular = function(nums) {
  let max = -Infinity, currMax = max, min = Infinity, currMin = min, sum = 0

  for (let i = 0; i < nums.length; i++) {
    currMax = Math.max(nums[i], currMax + nums[i])
    max = Math.max(max, currMax)
    currMin = Math.min(nums[i], currMin + nums[i])
    min = Math.min(min, currMin)
    sum += nums[i]
  }

  if (min === sum) return max
  return Math.max(max, sum - min)
};

module.exports = maxSubarraySumCircular