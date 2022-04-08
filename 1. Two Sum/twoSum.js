// Runtime: 168 ms, faster than 26.50% of JavaScript online submissions for Two Sum.
// Memory Usage: 42.7 MB, less than 54.89% of JavaScript online submissions for Two Sum.

var twoSum = function(nums, target) {
  for (var i = 0; i < nums.length; i++) {
      for (var j = 0; j < nums.length; j++) {
          if (i === j) {
              continue
          } else {
              if (nums[i] + nums[j] === target)
                  return [i, j]
          }
      }
  }
};

module.exports = twoSum