/*
Note: Runtime is highly variable between submissions and I don't have a premium subscription,
  which places me in a lower tier.
Runtime: 93 ms, faster than 68.42% of JavaScript online submissions for Check If It Is a Straight Line.
Memory Usage: 43.7 MB, less than 71.80% of JavaScript online submissions for Check If It Is a Straight Line.

You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point. Check if these points make a straight line in the XY plane.
*/

var checkStraightLine = function(coordinates) {
  let c = coordinates, aX = c[0][0], bX = c[1][0], aY = c[0][1], bY = c[1][1]

  for (coords of coordinates) {
    let cX = coords[0], cY = coords[1]
    if ((bY - aY) * (cX - bX) !==  (bX - aX) * (cY - bY)) return false
  }

  return true
};

module.exports = checkStraightLine