/*
Note: Runtime is highly variable between submissions and I don't have a premium subscription,
  which places me in a lower tier.
Runtime: 153 ms, faster than 50.86% of JavaScript online submissions for Add One Row to Tree.
Memory Usage: 48.4 MB, less than 38.79% of JavaScript online submissions for Add One Row to Tree.

Given the root of a binary tree and two integers val and depth, add a row of nodes with value val at the given depth depth.

Note that the root node is at depth 1.

The adding rule is:

Given the integer depth, for each not null tree node cur at the depth depth - 1, create two tree nodes with value val as cur's left subtree root and right subtree root.
cur's original left subtree should be the left subtree of the new left subtree root.
cur's original right subtree should be the right subtree of the new right subtree root.
If depth == 1 that means there is no depth depth - 1 at all, then create a tree node with value val as the new root of the whole original tree, and the original tree is the new root's left subtree.
*/

const nodeBuilder = require('../Utility Functions/nodeBuilder');
const TreeNode = require('../Utility Functions/TreeNode');

var addOneRow = function(root, val, tgtDepth, depth) {
  if (!root) return null
  if (tgtDepth === 1) return new TreeNode(val, root)

  depth = depth || 1

  if (depth === tgtDepth - 1) {
    let left = new TreeNode(val, root.left)
    root.left = left
    let right = new TreeNode(val, null, root.right)
    root.right = right
  } else {
    if (root.left) root.left = addOneRow(root.left, val, tgtDepth, depth + 1)
    if (root.right) root.right = addOneRow(root.right, val, tgtDepth, depth + 1)
  }

  return root
};

module.exports = addOneRow
console.log(addOneRow(nodeBuilder([4,2,6,3,1,5]), 1, 2))