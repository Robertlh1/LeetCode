/*
Note: Runtime is highly variable between submissions and I don't have a premium subscription,
  which places me in a lower tier.
Runtime: 112 ms, faster than 50.86% of JavaScript online submissions for Validate Binary Search Tree.
Memory Usage: 46.2 MB, less than 59.32% of JavaScript online submissions for Validate Binary Search Tree.

Given the root of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.
*/

var isValidBST = function(root, min = null, max = null) {
  if (!root) {
      return true
  }

  if (min && root.val <= min.val || max && root.val >= max.val) {
      return false
  }

  return isValidBST(root.left, min, root) && isValidBST(root.right, root, max)
};

module.exports = isValidBST