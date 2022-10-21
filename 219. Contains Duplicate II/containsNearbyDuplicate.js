/*
Note: Runtime is highly variable between submissions and I don't have a premium subscription,
  which places me in a lower tier.
Runtime: 151 ms, faster than 79.33% of JavaScript online submissions for Contains Duplicate II.
Memory Usage: 61.4 MB, less than 68.99% of JavaScript online submissions for Contains Duplicate II.

Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.
*/

// My second solution uses an object to store each number as a value:index pair, then if that value is already present,
// checks to see if currentIndex - storedIndex <= k
var containsNearbyDuplicate = function(nums, k) {
  let numMap = {}

  for (let i = 0; i < nums.length; i++) {
    if (numMap[nums[i]] !== undefined && Math.abs(i - numMap[nums[i]]) <= k) return true
    else numMap[nums[i]] = i
  }

  return false
};

/*
My initial naive solution, the nested loops mean that it runs very slowly, but it does pass all tests.
Runtime: 5578 ms, faster than 13.35% of JavaScript online submissions for Contains Duplicate II.
Memory Usage: 50.5 MB, less than 92.18% of JavaScript online submissions for Contains Duplicate II.
var containsNearbyDuplicate = function(nums, k) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j] && Math.abs(i - j) <= k) return true
    }
  }
  return false
};
*/

console.log(containsNearbyDuplicate([1,2,3,1],3))
module.exports = containsNearbyDuplicate