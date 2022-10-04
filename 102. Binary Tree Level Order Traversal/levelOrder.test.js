const levelOrder = require('./levelOrder')
const nodeBuilder = require('../Utility Functions/nodeBuilder')

describe("Testing levelOrder", () => {
  test("levelOrder() should return [[3],[9,20],[15,7]] for an input of [3,9,20,null,null,15,7]", () => {
    let root = nodeBuilder([3,9,20,null,null,15,7])
    expect(levelOrder(root)).toStrictEqual([[3],[9,20],[15,7]]);
  })
  test("levelOrder() should return [[1]] for an input of [1]", () => {
    let root = nodeBuilder([1])
    expect(levelOrder(root)).toStrictEqual([[1]]);
  })
  test("levelOrder() should return [] for an input of []", () => {
    let root = nodeBuilder([])
    expect(levelOrder(root)).toStrictEqual([]);
  })
})