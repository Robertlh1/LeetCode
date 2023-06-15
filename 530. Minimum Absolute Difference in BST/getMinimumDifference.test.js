const getMinimumDifference = require('./getMinimumDifference')
const nodeBuilder = require('../../Utility Functions/nodeBuilder')

describe("Testing getMinimumDifference", () => {
  test("getMinimumDifference() should return 1 for an input of [4,2,6,1,3]", () => {
    let root = nodeBuilder([4,2,6,1,3])
    expect(getMinimumDifference(root)).toEqual(1);
  })
  test("getMinimumDifference() should return 1 for an input of [1,0,48,null,null,12,49]", () => {
    let root = nodeBuilder([1,0,48,null,null,12,49])
    expect(getMinimumDifference(root)).toEqual(1);
  })
  test("getMinimumDifference() should return 9 for an input of [236,104,701,null,227,null,911]", () => {
    let root = nodeBuilder([236,104,701,null,227,null,911])
    expect(getMinimumDifference(root)).toEqual(9);
  })
})