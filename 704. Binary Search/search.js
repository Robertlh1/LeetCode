/*
Note: Runtime is highly variable between submissions and I don't have a premium subscription,
  which places me in a lower tier.
Runtime: 48 ms, faster than 99.99% of JavaScript online submissions for Binary Search.
Memory Usage: 44.4 MB, less than 97.72% of JavaScript online submissions for Binary Search.
*/

var search = function(nums, target) {
  let start = 0
  let end = nums.length - 1
  let mid = Math.round(nums.length / 2)

  while (nums[mid] !== target) {
    mid = start + Math.floor((end - start + 1) / 2)
    if (end === start) {
      break
    } else if (target > nums[mid]) {
      start = mid
    } else {
      end = mid - 1
    }
  }

  return nums[mid] === target ? mid : -1
};

console.log(search([-1,0,3,5,9,12], 9))

module.exports = search