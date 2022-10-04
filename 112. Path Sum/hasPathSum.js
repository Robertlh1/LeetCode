/*
Note: Runtime is highly variable between submissions and I don't have a premium subscription,
  which places me in a lower tier.
Runtime: 72 ms, faster than 95.29% of JavaScript online submissions for Path Sum.
Memory Usage: 45.7 MB, less than 57.18% of JavaScript online submissions for Path Sum.

Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.

A leaf is a node with no children.
*/

var hasPathSum = function(root, targetSum, curSum) {
  if (!root) return false

  curSum = curSum || 0
  curSum += root.val

  if (!root.left && !root.right) {
      return curSum === targetSum
  } else {
      return hasPathSum(root.left, targetSum, curSum) || hasPathSum(root.right, targetSum, curSum)
  }
};

module.exports = hasPathSum