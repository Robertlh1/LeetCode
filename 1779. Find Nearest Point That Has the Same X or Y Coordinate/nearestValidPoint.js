/*
Note: Runtime is highly variable between submissions and I don't have a premium subscription,
  which places me in a lower tier.
Runtime: 115 ms, faster than 82.54% of JavaScript online submissions for Find Nearest Point That Has the Same X or Y Coordinate.
Memory Usage: 50.3 MB, less than 83.58% of JavaScript online submissions for Find Nearest Point That Has the Same X or Y Coordinate.

You are given two integers, x and y, which represent your current location on a Cartesian grid: (x, y). You are also given an array points where each points[i] = [ai, bi] represents that a point exists at (ai, bi). A point is valid if it shares the same x-coordinate or the same y-coordinate as your location.

Return the index (0-indexed) of the valid point with the smallest Manhattan distance from your current location. If there are multiple, return the valid point with the smallest index. If there are no valid points, return -1.

The Manhattan distance between two points (x1, y1) and (x2, y2) is abs(x1 - x2) + abs(y1 - y2).
*/

var nearestValidPoint = function(x, y, points) {
  let minX = Infinity, xIndex, minY = Infinity , yIndex

  for (let i = 0; i < points.length; i++) {
    let temp = [minX, minY], point = points[i]
    if (point[1] === y) minX = Math.min(minX, Math.max(x - point[0], point[0] - x))
    if (point[0] === x) minY = Math.min(minY, Math.max(y - point[1], point[1] - y))
    if (temp[0] !== minX) xIndex = i
    if (temp[1] !== minY) yIndex = i
  }

  if (minX === Infinity && minY === Infinity) return -1
  if (minX === minY) return Math.min(xIndex, yIndex)
  return minX > minY ? yIndex : xIndex
};

module.exports = nearestValidPoint