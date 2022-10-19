/*
Note: Runtime is highly variable between submissions and I don't have a premium subscription,
  which places me in a lower tier.
Runtime: 92 ms, faster than 71.47% of JavaScript online submissions for Intersection of Two Arrays II.
Memory Usage: 42.2 MB, less than 93.80% of JavaScript online submissions for Intersection of Two Arrays II.

Given two integer arrays nums1 and nums2, return an array of their intersection.
Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.
*/

var intersect = function(nums1, nums2) {
  let count = {}, result = []

  nums1.forEach((num) => count[num] ? count[num] ++ : count[num] = 1)
  nums2.forEach((num) => {if (count[num] > 0) result.push(num), count[num] --})

  return result
};

module.exports = intersect