/*
Note: Runtime is highly variable between submissions and I don't have a premium subscription,
  which places me in a lower tier.
Runtime: 104 ms, faster than 93.23% of JavaScript online submissions for Merge Two Binary Trees.
Memory Usage: 49.7 MB, less than 93.39% of JavaScript online submissions for Merge Two Binary Trees.

You are given two binary trees root1 and root2.

Imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not. You need to merge the two trees into a new binary tree. The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node. Otherwise, the NOT null node will be used as the node of the new tree.

Return the merged tree.

Note: The merging process must start from the root nodes of both trees.
*/

var mergeTrees = function(root1, root2, root3) {
  if (root1 && root2) {
    let left = mergeTrees(root1.left, root2.left)
    let right = mergeTrees(root1.right, root2.right)
    root3 = new TreeNode(root1.val + root2.val, left, right)
  } else {
    root3 = root1 || root2
  }

  return root3
};

module.exports = mergeTrees