/*
Note: Runtime is highly variable between submissions and I don't have a premium subscription,
  which places me in a lower tier.
Runtime: 96 ms, faster than 52.88% of JavaScript online submissions for Merge Sorted Array.
Memory Usage: 42.3 MB, less than 28.88% of JavaScript online submissions for Merge Sorted Array.

You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.
*/

var merge = function(nums1, m, nums2, n) {
  let right = nums1.length - 1

  for (let i = 0; i < nums2.length; i++) {
      nums1[right] = nums2[i]
      right --
  }

  nums1.sort((a, b) => a - b)
};

module.exports = merge