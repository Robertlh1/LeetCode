const hasPathSum = require('./hasPathSum')
const nodeBuilder = require('../Utility Functions/nodeBuilder')

describe("Testing hasPathSum", () => {

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