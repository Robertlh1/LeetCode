/*
Note: Runtime is highly variable between submissions and I don't have a premium subscription,
  which places me in a lower tier.
Runtime: 68 ms, faster than 93.37% of JavaScript online submissions for Two Sum II - Input Array Is Sorted.
Memory Usage: 43.1 MB, less than 47.64% of JavaScript online submissions for Two Sum II - Input Array Is Sorted.

Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

The tests are generated such that there is exactly one solution. You may not use the same element twice.

Your solution must use only constant extra space.
*/

var twoSum = function(numbers, target) {
  let i = 0
  let j = numbers.length - 1
  while (j > i) {
    let total = numbers[i] + numbers[j]
    if (total === target) {
      return [i + 1, j + 1]
    } else if (total > target) {
      j --
    } else {
      i++
    }
  }
};

module.exports = twoSum