/*
Note: Runtime is highly variable between submissions and I don't have a premium subscription,
  which places me in a lower tier.
Runtime: 70 ms, faster than 87.89% of JavaScript online submissions for Search a 2D Matrix.
Memory Usage: 41.8 MB, less than 92.40% of JavaScript online submissions for Search a 2D Matrix.

Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix. This matrix has the following properties:

Integers in each row are sorted from left to right.
The first integer of each row is greater than the last integer of the previous row.
*/

var searchMatrix = function(matrix, target) {
  let i = 0, j = matrix.length - 1, mid = Math.floor(matrix[0].length / 2), end = matrix[0].length - 1

  while (matrix[i] && matrix[j]) {
    if (matrix[i][end] < target) i++; else break
    if (matrix[j][0] > target) j--; else {i = j; break}
  }

  if (matrix[i].length === 1) end = 0, mid = 0
  if (matrix[i][mid] === target) return true
  if (matrix[i][mid] > target) j = 0, end = mid
  if (matrix[i][mid] < target) j = mid

  for (j; j <= end; j++) if (matrix[i][j] === target) return true

  return false
};

module.exports = searchMatrix