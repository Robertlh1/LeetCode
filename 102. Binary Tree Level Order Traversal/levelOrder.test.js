const levelOrder = require('./levelOrder')

describe("Testing levelOrder", () => {
  function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
  }

  test("levelOrder() should return [[3],[9,20],[15,7]] for an input of [3,9,20,null,null,15,7]", () => {
    let leaf1 = new TreeNode(15)
    let leaf2 = new TreeNode(7)
    let branch1 = new TreeNode(9)
    let branch2 = new TreeNode(20, leaf1, leaf2)
    let root = new TreeNode(3, branch1, branch2)
    expect(levelOrder(root)).toStrictEqual([[3],[9,20],[15,7]]);
  })
  test("levelOrder() should return [[1]] for an input of [1]", () => {
    let root = new TreeNode(1)
    expect(levelOrder(root)).toStrictEqual([[1]]);
  })
  test("levelOrder() should return [] for an input of []", () => {
    expect(levelOrder([])).toStrictEqual([]);
  })
})