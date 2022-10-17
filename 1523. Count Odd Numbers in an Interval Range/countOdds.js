/*
Note: Runtime is highly variable between submissions and I don't have a premium subscription,
  which places me in a lower tier.
Runtime: 78 ms, faster than 89.76% of JavaScript online submissions for Count Odd Numbers in an Interval Range.
Memory Usage: 41.8 MB, less than 76.11% of JavaScript online submissions for Count Odd Numbers in an Interval Range.

Given two non-negative integers low and high. Return the count of odd numbers between low and high (inclusive).
*/

var countOdds = function(low, high) {
  let result = Math.floor((high - low) / 2)
  if (low % 2 === 1 || high % 2 === 1) result ++
  return result
};

module.exports = countOdds