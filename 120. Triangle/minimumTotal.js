/*
Note: Runtime is highly variable between submissions and I don't have a premium subscription,
  which places me in a lower tier.
Runtime: 63 ms, faster than 97.15% of JavaScript online submissions for Triangle.
Memory Usage: 42.5 MB, less than 58.40% of JavaScript online submissions for Triangle.

Given a triangle array, return the minimum path sum from top to bottom.

For each step, you may move to an adjacent number of the row below. More formally, if you are on index i on the current row, you may move to either index i or index i + 1 on the next row.
*/

/*
Final solution traverses through the triangle, from the bottom to the top
and cumulatively changes the value of each item in the next tier with the lowest value possible
in the current tier.
*/
var minimumTotal = function(triangle) {
  for (let i = triangle.length - 1; i > 0; i--) {
    for (let j = triangle[i].length -1; j > 0; j--) {
      triangle[i - 1][j - 1] += Math.min(triangle[i][j], triangle[i][j - 1])
    }
  }
  return triangle[0][0]
};

module.exports = minimumTotal

/*
First solution was recursive and passes all but the final two tests and times out
var minimumTotal = function(triangle) {
  return traverse (triangle, 0, 0, triangle[0][0])
};

var traverse = function (triangle, i, j, min) {
  if (!triangle[i + 1]) return min
  let left = traverse(triangle, i + 1, j, min + triangle[i + 1][j])
  let right = traverse(triangle, i + 1,  j + 1, min + triangle[i + 1][j + 1])
  return min = Math.min(left, right)
}
*/