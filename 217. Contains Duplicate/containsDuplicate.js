/*
Note: Runtime is highly variable between submissions and I don't have a premium subscription,
  which places me in a lower tier.
Runtime: 129 ms, faster than 70.86% of JavaScript online submissions for Contains Duplicate.
Memory Usage: 50.4 MB, less than 75.85% of JavaScript online submissions for Contains Duplicate.

Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
*/

// Runs faster than the object method for smaller array sizes, but as Set would have to
// go through the entire array before returning results, the object method should pull ahead on larger arrays
var containsDuplicate = function(nums) {
  return new Set(nums).size !== nums.length
}

/*
Runtime: 154 ms, faster than 43.93% of JavaScript online submissions for Contains Duplicate.
Memory Usage: 51.2 MB, less than 37.57% of JavaScript online submissions for Contains Duplicate.

var containsDuplicate = function(nums) {
  let results = {}

  for (let i = 0; i < nums.length; i++) {
      if (results[nums[i]]) return true
      else results[nums[i]] = 1
  }

  return false
};
*/

module.exports = containsDuplicate