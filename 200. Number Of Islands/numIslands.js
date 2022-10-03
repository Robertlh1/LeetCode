/*
Note: Runtime is highly variable between submissions and I don't have a premium subscription,
  which places me in a lower tier.
Runtime: 78 ms, faster than 97.95% of JavaScript online submissions for Number of Islands.
Memory Usage: 44.7 MB, less than 86.42% of JavaScript online submissions for Number of Islands.

Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.
You may assume all four edges of the grid are all surrounded by water.
*/

var numIslands = function(grid) {
  let count = 0

  for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
          if (grid[i][j] === '1') {
              grid = cartographer(grid, i, j)
              count ++
          }
      }
  }

  return count
};

var cartographer = function (grid, vert, horz) {
  let up = vert - 1
  let down = vert + 1
  let left = horz - 1
  let right = horz + 1

  grid[vert][horz] = '2'

  if (grid[up] && grid[up][horz] === '1') grid = cartographer(grid, up, horz)
  if (grid[down] && grid[down][horz] === '1') grid = cartographer(grid, down, horz)
  if (grid[vert][left] === '1') grid = cartographer(grid, vert, left)
  if (grid[vert][right] === '1') grid = cartographer(grid, vert, right)

  return grid
}