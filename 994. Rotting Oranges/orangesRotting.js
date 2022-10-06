/*
Note: Runtime is highly variable between submissions and I don't have a premium subscription,
  which places me in a lower tier.
Runtime: 79 ms, faster than 93.32% of JavaScript online submissions for Rotting Oranges.
Memory Usage: 42.6 MB, less than 99.05% of JavaScript online submissions for Rotting Oranges.

You are given an m x n grid where each cell can have one of three values:

0 representing an empty cell,
1 representing a fresh orange, or
2 representing a rotten orange.
Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.

Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.
*/

var orangesRotting = function(grid) {
  let result = 2

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 2) hasFruit(grid, i, j, result)
    }
  }

  for (let k = 0; k < grid.length; k++) {
    for (let l = 0; l < grid[0].length; l++) {
      if (grid[k][l] === 1) return -1
      result = Math.max(result, grid[k][l])
    }
  }


  return result - 2
};

var hasFruit = function(grid, i, j, result) {
  if (i < 0 || i >= grid.length || j < 0 || j >= grid[i].length || grid[i][j] === 0 || grid[i][j] > 1 && grid[i][j] < result) return
  grid[i][j] = result
  hasFruit(grid, i + 1, j, result + 1)
  hasFruit(grid, i, j + 1, result + 1)
  hasFruit(grid, i - 1, j, result + 1)
  hasFruit(grid, i, j - 1, result + 1)
}

module.exports = orangesRotting