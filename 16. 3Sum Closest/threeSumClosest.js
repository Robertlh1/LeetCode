/*
Note: Runtime is highly variable between submissions and I don't have a premium subscription,
  which places me in a lower tier.
Runtime: 231 ms, faster than 55.50% of JavaScript online submissions for 3Sum Closest.
Memory Usage: 44 MB, less than 87.90% of JavaScript online submissions for 3Sum Closest.

Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.

Return the sum of the three integers.

You may assume that each input would have exactly one solution.
*/

/*
  The core concept is the same as my first attempt, with three pointers traversing the array and comparing results
  However, this time the array is sorted and one inner loop is traversing forwards, while a second is traversing
  backwards. Each inner loop will only increment depending on if the target is greater or less than the current sum.
*/
var threeSumClosest = function(nums, target) {
  let result, sorted = nums.sort((numA, numB) => numA - numB)

  for (let left = 0; left < nums.length - 2; left ++) {
    let mid = left + 1, right = nums.length - 1

    while (right > mid) {
      let curSum = sorted[left] + sorted[mid] + sorted[right]
      if (curSum === target) return curSum
      if (!result || Math.abs(result - target) > Math.abs(curSum - target)) result = curSum
      if (curSum < target) mid ++
      else right --
    }
  }

  return result
};

/*
  First attempt, passes previous tests but times out at the end

  var threeSumClosest = function(nums, target) {
    let result
    for (let i = 0; i < nums.length - 2; i++) {
      for (let j = i + 1; j < nums.length - 1; j++) {
        for (let k = j + 1; k < nums.length; k++) {
          let curSum = nums[i] + nums[j] + nums[k]
          if (curSum === target) return curSum
          if (result === undefined) result = curSum
          if (Math.abs(curSum - target) < Math.abs(result - target)) result = curSum
        }
      }
    }
    return result
  };
*/

module.exports = threeSumClosest