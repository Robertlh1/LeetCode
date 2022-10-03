/*
Note: Runtime is highly variable between submissions and I don't have a premium subscription,
  which places me in a lower tier.
Runtime: 83 ms, faster than 94.33% of JavaScript online submissions for Max Area of Island.
Memory Usage: 44.6 MB, less than 89.21% of JavaScript online submissions for Max Area of Island.

You are given an m x n binary matrix grid. An island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

The area of an island is the number of cells with a value 1 in the island.

Return the maximum area of an island in grid. If there is no island, return 0.
*/

var maxAreaOfIsland = function(grid) {
  let maxSize = 0

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        let curSize = 0
        grid, curSize = cartographer(grid, i, j, curSize)
        if (curSize > maxSize) maxSize = curSize
      }
    }
  }

  return maxSize
};

var cartographer = function(grid, vert, hor, curSize) {
  curSize ++
  grid[vert][hor] = 2

  if (grid[vert - 1] && grid[vert - 1][hor] === 1) {
    grid, curSize = cartographer(grid, vert - 1, hor, curSize)
  }
  if (grid[vert][hor - 1] !== undefined && grid[vert][hor - 1] === 1) {
    grid, curSize = cartographer(grid, vert, hor - 1, curSize)
  }
  if (grid[vert][hor + 1] !== undefined && grid[vert][hor + 1] === 1) {
    grid, curSize = cartographer(grid, vert, hor + 1, curSize)
  }
  if (grid[vert + 1] && grid[vert + 1][hor] === 1) {
    grid, curSize = cartographer(grid, vert + 1, hor, curSize)
  }

  return grid, curSize
}

module.exports = maxAreaOfIsland