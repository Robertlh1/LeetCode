/*
Note: Runtime is highly variable between submissions and I don't have a premium subscription,
  which places me in a lower tier.
Runtime: 65 ms, faster than 94.59% of JavaScript online submissions for Matrix Diagonal Sum.
Memory Usage: 42.6 MB, less than 96.53% of JavaScript online submissions for Matrix Diagonal Sum.

Given a square matrix mat, return the sum of the matrix diagonals.

Only include the sum of all the elements on the primary diagonal and all the elements on the secondary diagonal that are not part of the primary diagonal.
*/

var diagonalSum = function(mat) {
  if (mat.length === 1) return mat[0][0]
  let sum = 0, end = mat.length - 1, mid = Math.floor(mat.length / 2), k = 0

  for (let i = 0; i < mat.length; i++) {
      sum += mat[i][i]
  }

  for (let j = end; j >= 0; j--) {
      if (mat.length % 2 === 1 && j === mid && k === mid) {k++; continue}
      sum += mat[k][j]
      k++
  }

  return sum
};

module.exports = diagonalSum