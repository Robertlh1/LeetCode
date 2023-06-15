/*
Note: Runtime is highly variable between submissions and I don't have a premium subscription,
  which places me in a lower tier.
Runtime 64 ms Beats 96.98%
Memory 49.3 MB MB Beats 19.3%

Given the root of a Binary Search Tree (BST), return the minimum absolute difference between the values of any two different nodes in the tree.
*/

var getMinimumDifference = function(root) {
    let vals = [root.val], min = Infinity
    if (root.left !== null) vals = bstSearch(root.left, vals)
    if (root.right !== null) vals = bstSearch(root.right, vals)

    vals = vals.sort((a, b) => b-a)

    for (let i = 0; i < vals.length - 1; i++) {
      min = Math.min(min, vals[i] - vals[i + 1])
    }

    return min
};

var bstSearch = function(root, vals) {
  vals.push(root.val)

  if (root.left !== null) {
    vals = bstSearch(root.left, vals)
  }

  if (root.right !== null) {
    vals = bstSearch(root.right, vals)
  }

  return vals
}

module.exports = getMinimumDifference