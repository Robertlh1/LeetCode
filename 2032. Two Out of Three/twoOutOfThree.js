// Runtime: 99 ms, faster than 57.02% of JavaScript online submissions for Two Out of Three.
// Memory Usage: 45.1 MB, less than 50.44% of JavaScript online submissions for Two Out of Three.

var twoOutOfThree = function(nums1, nums2, nums3) {
  let valid = []

  for (let i = 0; i < nums1.length; i++) {
    if (!valid.includes(nums1[i])) {
      if (nums2.includes(nums1[i]) || nums3.includes(nums1[i])) {
        valid.push(nums1[i])
      }
    }
  }
  for (let j = 0; j < nums2.length; j++) {
    if (!valid.includes(nums2[j]) && nums3.includes(nums2[j])) {
      valid.push(nums2[j])
    }
  }
  return valid
};

module.exports = twoOutOfThree