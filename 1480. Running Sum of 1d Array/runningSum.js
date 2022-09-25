var runningSum = function(nums) {
  let result = []

  for (let i = 0; i < nums.length; i++) {
      let current = 0

      for (let j = 0; j <= i; j++) {
          current += nums[j]
      }

      result.push(current)
  }

  return result
};

module.exports = runningSum