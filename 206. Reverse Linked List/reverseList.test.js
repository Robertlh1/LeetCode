const reverseList = require('./reverseList')
const linkedListBuilder = require('../Utility Functions/linkedListBuilder')

describe("Testing reverseList", () => {
  test("reverseList() should return [5,4,3,2,1] for an input of [1,2,3,4,5]", () => {
    let node1 = linkedListBuilder([1,2,3,4,5])
    let testNode = linkedListBuilder([5,4,3,2,1])
    expect(reverseList(node1)).toEqual(testNode);
  })
  test("reverseList() should return [2,1] for an input of [1,2]", () => {
    let node1 = linkedListBuilder([1,2])
    let testNode = linkedListBuilder([2,1])
    expect(reverseList(node1)).toEqual(testNode);
  })
  test("reverseList() should return [] for an input of []", () => {
    let node1 = linkedListBuilder([])
    let testNode = linkedListBuilder([])
    expect(reverseList(node1)).toEqual(testNode);
  })
})