/*
Note: Runtime is highly variable between submissions and I don't have a premium subscription,
  which places me in a lower tier.
Runtime: 85 ms, faster than 81.43% of JavaScript online submissions for Next Greater Element I.
Memory Usage: 43.5 MB, less than 76.85% of JavaScript online submissions for Next Greater Element I.

The next greater element of some element x in an array is the first greater element that is to the right of x in the same array.

You are given two distinct 0-indexed integer arrays nums1 and nums2, where nums1 is a subset of nums2.

For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j] and determine the next greater element of nums2[j] in nums2. If there is no next greater element, then the answer for this query is -1.

Return an array ans of length nums1.length such that ans[i] is the next greater element as described above.
*/

var nextGreaterElement = function(nums1, nums2) {
  return nums1.map((num1) => {
    let found = false

    for (num2 of nums2) {
      if (num1 === num2) found = true
      if (found && num2 > num1) return num2
    }

    return -1
  })
};

module.exports = nextGreaterElement