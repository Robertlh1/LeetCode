/*
Note: Runtime is highly variable between submissions and I don't have a premium subscription,
  which places me in a lower tier.
Runtime: 98 ms, faster than 98.78% of JavaScript online submissions for Squares of a Sorted Array.
Memory Usage: 48.7 MB, less than 59.01% of JavaScript online submissions for Squares of a Sorted Array.

Given an integer array nums sorted in non-decreasing order, return an array of the
squares of each number sorted in non-decreasing order.
*/

var sortedSquares = function(nums) {
  let result = new Array(nums.length)
  let left = 0
  let right = nums.length - 1

  for (let i = nums.length - 1; i >= 0; i--) {
      let lNum = nums[left] ** 2
      let rNum = nums[right] ** 2

      if (lNum > rNum) {
          result[i] = lNum
          left ++
      } else {
          result[i] = rNum
          right --
      }
  }

  return result
};

/*
Runtime: 181 ms, faster than 40.76% of JavaScript online submissions for Squares of a Sorted Array.
Memory Usage: 48.1 MB, less than 93.85% of JavaScript online submissions for Squares of a Sorted Array.
*/

// var sortedSquares = function(nums) {
//   for (let i = 0; i < nums.length; i++) {
//     nums[i] = nums[i] ** 2
//   }

//   return nums.sort((a, b) => a - b)
// };

module.exports = sortedSquares