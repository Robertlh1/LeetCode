/*
Note: Runtime is highly variable between submissions and I don't have a premium subscription,
  which places me in a lower tier.
Runtime: 68 ms, faster than 97.89% of JavaScript online submissions for Power of Two.
Memory Usage: 43.4 MB, less than 67.35% of JavaScript online submissions for Power of Two.

Given an integer n, return true if it is a power of two. Otherwise, return false.

An integer n is a power of two, if there exists an integer x such that n == 2x.
*/

var isPowerOfTwo = function(n) {
  let math = 1

  while (math !== n && math < n) {
      math = math * 2
  }

  if (math === n) return true
  return false
};

module.exports = isPowerOfTwo