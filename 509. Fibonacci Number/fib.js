/*
Note: Runtime is highly variable between submissions and I don't have a premium subscription,
  which places me in a lower tier.
Runtime: 93 ms, faster than 63.78% of JavaScript online submissions for Fibonacci Number.
Memory Usage: 41.7 MB, less than 69.98% of JavaScript online submissions for Fibonacci Number.
*/

// Lots of ways to go about this, but I went with recursion
var fib = function(n) {
  if (n === 0 || n === 1) {
    return n
  }

  return fib(n - 1) + fib(n - 2)
};

module.exports = fib