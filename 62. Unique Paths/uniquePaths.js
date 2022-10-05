/*
Note: Runtime is highly variable between submissions and I don't have a premium subscription,
  which places me in a lower tier.
Runtime: 78 ms, faster than 75.98% of JavaScript online submissions for Unique Paths.
Memory Usage: 41.8 MB, less than 88.47% of JavaScript online submissions for Unique Paths.

There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.

Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.

The test cases are generated so that the answer will be less than or equal to 2 * 109.
*/

var uniquePaths = function(m, n) {
  let memo = new Array(n).fill(1)

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      memo[j] = memo[j] + memo[j - 1]
    }
  }

  return memo[memo.length - 1]
};


// // First attempt, functionally is correct but exceeds time limit
// var uniquePaths = function(m, n, vert, horz, count) {
//   count = count || 0
//   vert = vert || 1
//   horz = horz || 1

//   if (horz <= n) count = uniquePaths(m, n, vert, horz + 1, count)
//   if (vert <= m) count = uniquePaths(m, n, vert + 1, horz, count)

//   if (horz === n && vert === m) count ++

//   return count
// };

module.exports = uniquePaths