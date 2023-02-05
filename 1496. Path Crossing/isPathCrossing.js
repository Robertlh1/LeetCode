/*
Note: Runtime is highly variable between submissions and I don't have a premium subscription,
  which places me in a lower tier.
Runtime 51 ms Beats 98.95%
Memory 42.1 MB Beats 62.11%

Given a string path, where path[i] = 'N', 'S', 'E' or 'W', each representing moving one unit north, south, east, or west, respectively. You start at the origin (0, 0) on a 2D plane and walk on the path specified by path.

Return true if the path crosses itself at any point, that is, if at any time you are on a location you have previously visited. Return false otherwise.
*/

var isPathCrossing = function(path) {
  let ns = 0, ew = 0, visited = {'0-0':true}
  for (let i = 0; i < path.length; i++) {
    if (path[i] === 'N') ns += 1
    else if (path[i] === 'S') ns -= 1
    else if (path[i] === 'E') ew += 1
    else ew -= 1

    if (visited[`${ns}-${ew}`]) return true
    visited[`${ns}-${ew}`] = true
  }
  return false
};

module.exports = isPathCrossing