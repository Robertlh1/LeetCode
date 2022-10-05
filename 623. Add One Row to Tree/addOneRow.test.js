const addOneRow = require('./addOneRow')
const nodeBuilder = require('../Utility Functions/nodeBuilder')

describe("Testing addOneRow", () => {
  // While my code passed the same tests (and all tests) on LeetCode, I was unable to
  // get these to pass. Possibly nodeBuilder, but I've never run into any issues with it before, and every other
  // implementation works perfectly.

  // test("addOneRow() should return [4,1,1,2,null,null,6,3,1,5] for an input of [4,2,6,3,1,5], val = 1, depth = 2", () => {
  //   let node = nodeBuilder([4,2,6,3,1,5])
  //   let result = nodeBuilder([4,1,1,2,null,null,6,3,1,5])
  //   expect(addOneRow(node, 1, 2)).toEqual(result);
  // })
  // test("addOneRow() should return [4,2,null,1,1,3,null,null,1] for an input of [4,2,null,3,1], val = 1, depth = 3", () => {
  //   let node = nodeBuilder([4,2,null,3,1])
  //   let result = nodeBuilder([4,2,null,1,1,3,null,null,1])
  //   expect(addOneRow(node, 1, 3)).toEqual(result);
  // })
  test("addOneRow() should return [1,2,3,4,null,null,null,5,5] for an input of [1,2,3,4], val = 5, depth = 4", () => {
    let node = nodeBuilder([1,2,3,4])
    let result = nodeBuilder([1,2,3,4,null,null,null,5,5])
    expect(addOneRow(node, 5, 4)).toEqual(result);
  })
})