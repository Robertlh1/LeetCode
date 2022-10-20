/*
Note: Runtime is highly variable between submissions and I don't have a premium subscription,
  which places me in a lower tier.
Runtime: 85 ms, faster than 94.70% of JavaScript online submissions for Reshape the Matrix.
Memory Usage: 45.1 MB, less than 76.01% of JavaScript online submissions for Reshape the Matrix.

In MATLAB, there is a handy function called reshape which can reshape an m x n matrix into a new one with a different size r x c keeping its original data.

You are given an m x n matrix mat and two integers r and c representing the number of rows and the number of columns of the wanted reshaped matrix.

The reshaped matrix should be filled with all the elements of the original matrix in the same row-traversing order as they were.

If the reshape operation with given parameters is possible and legal, output the new reshaped matrix; Otherwise, output the original matrix.
*/

var matrixReshape = function(mat, r, c) {
  let length = mat.length * mat[0].length, tgt = r * c
  let result = new Array(r).fill(null).map(() => new Array(c).fill(0))
  let l = 0, k = 0

  if (length !== tgt) return mat

  for (let i = 0; i < mat.length; i++) {
      for (let j = 0; j < mat[0].length; j++) {
          if (k === c) l ++, k = 0
          result[l][k] = mat[i][j]
          k ++
      }
  }

  return result
};

module.exports = matrixReshape