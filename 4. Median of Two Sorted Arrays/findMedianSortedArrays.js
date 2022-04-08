// Runtime: 96 ms, faster than 95.22% of JavaScript online submissions for Median of Two Sorted Arrays.
// Memory Usage: 46.3 MB, less than 87.78% of JavaScript online submissions for Median of Two Sorted Arrays.
var findMedianSortedArrays = function(nums1, nums2) {
  let resultArr = []
  let i = 0
  let j = 0
  while (resultArr.length < nums1.length + nums2.length) {
      if (nums1[i] > nums2[j] || nums1[i] === undefined) {
          resultArr.push(nums2[j])
          j++
      } else {
          resultArr.push(nums1[i])
          i++
      }
  }
  let mid = Math.floor((resultArr.length - 1) / 2)
  if (resultArr.length % 2 === 1) {
      return resultArr[mid]
  } else {
      return ((resultArr[mid + 1] - resultArr[mid]) / 2 + resultArr[mid])
  }
};
console.log(findMedianSortedArrays([1, 3], [2]), 'should be 2')
console.log(findMedianSortedArrays([1, 2], [3, 4]), 'should be 2.5')
console.log(findMedianSortedArrays([1, 3], [2, 7]), 'should be 2.5')

module.exports = findMedianSortedArrays