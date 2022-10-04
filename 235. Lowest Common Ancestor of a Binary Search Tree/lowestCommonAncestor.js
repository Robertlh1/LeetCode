/*
Note: Runtime is highly variable between submissions and I don't have a premium subscription,
  which places me in a lower tier.
Runtime: 131 ms, faster than 50.22% of JavaScript online submissions for Lowest Common Ancestor of a Binary Search Tree.
Memory Usage: 51.8 MB, less than 91.65% of JavaScript online submissions for Lowest Common Ancestor of a Binary Search Tree.

Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.

According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes
p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”
*/

var lowestCommonAncestor = function(root, p, q) {
  if (!root) {
    return null
  }

  debugger
  // If the target values are greater than the current node, they must be to the right
  if (root.val > p.val && root.val > q.val) {
      return lowestCommonAncestor(root.left, p, q)
  // If they're lower then the current, they must be to the left
  } else if (root.val < p.val && root.val < q.val) {
      return lowestCommonAncestor(root.right, p, q)
  // Otherwise, we must be at the LCA node
  } else {
      return root
  }
};

module.exports = lowestCommonAncestor