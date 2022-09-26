/*
Note: Runtime is highly variable between submissions and I don't have a premium subscription,
  which places me in a lower tier.
Runtime: 67 ms, faster than 85.45% of JavaScript online submissions for Climbing Stairs.
Memory Usage: 41.5 MB, less than 87.29% of JavaScript online submissions for Climbing Stairs.

You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
*/

var climbStairs = function(n, memoPad) {
  memoPad = memoPad || new Array()
  if (n >= 0 && n <= 2) {
    return n
  }

  if (memoPad[n] !== undefined) {
    return memoPad[n]
  }

  return memoPad[n] = climbStairs(n - 1, memoPad) + climbStairs(n - 2, memoPad)
};

module.exports = climbStairs