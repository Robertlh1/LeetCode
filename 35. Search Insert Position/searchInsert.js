/*
Note: Runtime is highly variable between submissions and I don't have a premium subscription,
  which places me in a lower tier.
Runtime: 93 ms, faster than 48.22% of JavaScript online submissions for Search Insert Position.
Memory Usage: 41.7 MB, less than 96.74% of JavaScript online submissions for Search Insert Position.
*/

var searchInsert = function(nums, target) {
  let start = 0
  let end = nums.length - 1

  while (end > start) {
      let mid = Math.floor(start + (end - start) / 2)
      if (nums[mid] > target) {
        end = mid
      } else if (nums[mid] === target) {
        return mid
      } else {
        start = mid + 1
      }
  }

  if (nums[start] < target) {
    return start + 1
  } else {
    return start
  }
};

module.exports = searchInsert