/*
Note: Runtime is highly variable between submissions and I don't have a premium subscription,
  which places me in a lower tier.
Runtime: 67 ms, faster than 91.60% of JavaScript online submissions for Can Make Arithmetic Progression From Sequence.
Memory Usage: 42 MB, less than 90.16% of JavaScript online submissions for Can Make Arithmetic Progression From Sequence.

A sequence of numbers is called an arithmetic progression if the difference between any two consecutive elements is the same.

Given an array of numbers arr, return true if the array can be rearranged to form an arithmetic progression. Otherwise, return false.
*/

var canMakeArithmeticProgression = function(arr) {
  let sorted = arr.sort((a, b) => a - b), diff = sorted[1] - sorted[0]

  for (let i = 1; i < sorted.length - 1; i ++) {
      if (sorted[i + 1] - sorted[i] != diff) return false
  }

  return true
};

module.exports = canMakeArithmeticProgression