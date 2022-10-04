const hasPathSum = require('./hasPathSum')

describe("Testing hasPathSum", () => {
  function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
  }

  function nodeBuilder(arr, i) {
    i = i || 0

    if (i < arr.length && arr[i] !== null) {
      const node = new TreeNode(arr[i]);
      node.left = nodeBuilder(arr, 2 * i + 1);
      node.right = nodeBuilder(arr, 2 * i + 2);
      return node;
    }

    return null;
  }

  test("hasPathSum() should return true for an input of [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22", () => {
    expect(hasPathSum(nodeBuilder([5,4,8,11,null,13,4,7,2,null,null,null,1]), 22)).toBe(true);
  })
  test("hasPathSum() should return false for an input of [1,2,3], targetSum = 5", () => {
    expect(hasPathSum(nodeBuilder([1,2,3]), 5)).toBe(false);
  })
  test("hasPathSum() should return false for an input of [1,2], targetSum = 1", () => {
    expect(hasPathSum(nodeBuilder([1,2]), 1)).toBe(false);
  })
  test("hasPathSum() should return true for an input of [1], targetSum = 1", () => {
    expect(hasPathSum(nodeBuilder([1]), 1)).toBe(true);
  })
  test("hasPathSum() should return false for an input of [], targetSum = 0", () => {
    expect(hasPathSum(null, 0)).toBe(false);
  })
})