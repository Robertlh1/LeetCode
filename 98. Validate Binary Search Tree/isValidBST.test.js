const isValidBST = require('./isValidBST')
const nodeBuilder = require('../Utility Functions/nodeBuilder')

describe("Testing isValidBST", () => {
  test("isValidBST() should return true for an input of [2,1,3]", () => {
    let node = nodeBuilder([2,1,3])
    expect(isValidBST(node)).toBe(true);
  })
  test("isValidBST() should return false for an input of [5,1,4,null,null,3,6]", () => {
    let node = nodeBuilder([5,1,4,null,null,3,6])
    expect(isValidBST(node)).toBe(false);
  })
})