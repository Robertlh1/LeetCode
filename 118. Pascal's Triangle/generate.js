/*
Note: Runtime is highly variable between submissions and I don't have a premium subscription,
  which places me in a lower tier.
Runtime: 70 ms, faster than 83.99% of JavaScript online submissions for Pascal's Triangle.
Memory Usage: 41.7 MB, less than 89.14% of JavaScript online submissions for Pascal's Triangle.

Given an integer numRows, return the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:
[
    [1],
   [1,1],
  [1,2,1],
 [1,3,3,1],
[1,4,6,4,1]
]
*/

var generate = function(numRows) {
  let col = 0, result = new Array(numRows).fill(null).map(() => {
      col ++
      return new Array(col).fill(1)
  })

  for (let i = 2; i < result.length; i++) {
      for (let j = 1; j < result[i].length; j++) {
          let left = result[i - 1][j - 1], right = result[i - 1][j]
          if (left && right) result[i][j] = left + right
      }
  }

  return result
};

module.exports = generate