/*
Note: Runtime is highly variable between submissions and I don't have a premium subscription,
  which places me in a lower tier.
Runtime: 74 ms, faster than 88.01% of JavaScript online submissions for Binary Tree Level Order Traversal.
Memory Usage: 43.9 MB, less than 84.67% of JavaScript online submissions for Binary Tree Level Order Traversal.

Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).
*/

var levelOrder = function(root, result, depth) {
  result = result || []
  depth = depth || 0

  if (root !== null && root.length !== 0) {
      if (result[depth] === undefined) {
          result[depth] = []
          result[depth].push(root.val)
          levelOrder(root.left, result, depth + 1)
          levelOrder(root.right, result, depth + 1)
      } else {
          result[depth].push(root.val)
          levelOrder(root.left, result, depth + 1)
          levelOrder(root.right, result, depth + 1)
      }
  }

  return result
};

module.exports = levelOrder