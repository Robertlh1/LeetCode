/*
Note: Runtime is highly variable between submissions and I don't have a premium subscription,
  which places me in a lower tier.
Runtime 152 ms Beats 84.39%
Memory 74.4 MB Beats 45.37%

Given the root of a binary tree, the level of its root is 1, the level of its children is 2, and so on.

Return the smallest level x such that the sum of all the values of nodes at level x is maximal.
*/

var maxLevelSum = function(root) {
  let vals = {1: root.val}, max = Number.NEGATIVE_INFINITY, maxD = 0
  debugger
  if (root.left !== null) vals = btSearch(root.left, 2, vals)
  if (root.right !== null) vals = btSearch(root.right, 2, vals)

  for (let depth in vals) {
    if (vals[depth] > max) {
      max = vals[depth]
      maxD = Number(depth)
    }
  }

  return maxD
};

var btSearch = function(root, depth, vals) {
  vals[depth] ? vals[depth] += root.val : vals[depth] = root.val

  if (root.left !== null) vals = btSearch(root.left, depth + 1, vals)
  if (root.right !== null) vals = btSearch(root.right, depth + 1, vals)

  return vals
}

module.exports = maxLevelSum

const nodeBuilder = require('../Utility Functions/nodeBuilder')
console.log(maxLevelSum(nodeBuilder([39608,1,-34332,84856,62101,98129,1,1,-26118,1,57785,-75141,1,1,-63491,-63367])))

