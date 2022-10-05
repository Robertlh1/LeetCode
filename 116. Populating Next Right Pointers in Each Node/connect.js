/*
Note: Runtime is highly variable between submissions and I don't have a premium subscription,
  which places me in a lower tier.
Runtime: 70 ms, faster than 99.27% of JavaScript online submissions for Populating Next Right Pointers in Each Node.
Memory Usage: 48.3 MB, less than 80.09% of JavaScript online submissions for Populating Next Right Pointers in Each Node.

You are given a perfect binary tree where all leaves are on the same level, and every parent has two children. The binary tree has the following definition:

struct Node {
  int val;
  Node *left;
  Node *right;
  Node *next;
}
Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.

Initially, all next pointers are set to NULL.
*/

var connect = function(root) {
  if (!root) return null
  if (!root.left) return root
  if (root.next) root.right.next = root.next.left

  root.left.next = root.right

  connect(root.left)
  connect(root.right)

  return root
};