/*
Note: Runtime is highly variable between submissions and I don't have a premium subscription,
  which places me in a lower tier.
Runtime: 79 ms, faster than 97.25% of JavaScript online submissions for N-ary Tree Preorder Traversal.
Memory Usage: 44.9 MB, less than 88.67% of JavaScript online submissions for N-ary Tree Preorder Traversal.

Given the root of an n-ary tree, return the preorder traversal of its nodes' values.

Nary-Tree input serialization is represented in their level order traversal. Each group of children is separated by the null value (See examples)
*/

var preorder = function(root, result) {
  if (root === null) {
      return []
  }

  var result = result || []
  result.push(root.val)

  if (root.children !== undefined) {
      for (let i = 0; i < root.children.length; i++) {
            result = preorder(root.children[i], result)
      }
  }

  return result
};

module.exports = preorder