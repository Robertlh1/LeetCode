/*
Note: Runtime is highly variable between submissions and I don't have a premium subscription,
  which places me in a lower tier.
Runtime: 230 ms, faster than 77.43% of JavaScript online submissions for 01 Matrix.
Memory Usage: 49 MB, less than 96.93% of JavaScript online submissions for 01 Matrix.

Given an m x n binary matrix mat, return the distance of the nearest 0 for each cell.

The distance between two adjacent cells is 1.
*/

var updateMatrix = function(mat) {
  mat = topToBottom(mat)
  mat = bottomToTop(mat)

  return mat
}

var topToBottom = function(mat) {
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[0].length; j++) {
      if (mat[i][j] > 0) {
        mat[i][j] = Infinity
        if (i > 0) mat[i][j] = Math.min(mat[i][j], mat[i - 1][j] + 1)
        if (j > 0) mat[i][j] = Math.min(mat[i][j], mat[i][j - 1] + 1)
      }
    }
  }

  return mat
}

var bottomToTop = function(mat) {
  for (let i = mat.length - 1; i >= 0; i--) {
    for (let j = mat[0].length - 1; j >= 0; j--) {
      if (mat[i][j] > 0) {
        if ((i + 1) < mat.length) mat[i][j] = Math.min(mat[i][j], mat[i + 1][j] + 1)
        if ((j + 1) < mat[0].length) mat[i][j] = Math.min(mat[i][j], mat[i][j + 1] + 1)
      }
    }
  }
  return mat
}

module.exports = updateMatrix