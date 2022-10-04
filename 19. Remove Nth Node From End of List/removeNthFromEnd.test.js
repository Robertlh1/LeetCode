const removeNthFromEnd = require('./removeNthFromEnd')
const linkedListBuilder = require('../Utility Functions/linkedListBuilder')

describe("Testing removeNthFromEnd", () => {
  test("removeNthFromEnd() should return [1,2,3,5] for an input of [1,2,3,4,5], 2", () => {
    let node = linkedListBuilder([1,2,3,4,5])
    let testNode = linkedListBuilder([1,2,3,5])
    expect(removeNthFromEnd(node, 2)).toStrictEqual(testNode);
  })
  test("removeNthFromEnd() should return null for an input of [1], 1", () => {
    let node = linkedListBuilder([1])
    expect(removeNthFromEnd(node, 1)).toBe(null);
  })
  test("removeNthFromEnd() should return [1] for an input of [1,2], 1", () => {
    let node = linkedListBuilder([1,2])
    let testNode = linkedListBuilder([1])
    expect(removeNthFromEnd(node, 1)).toStrictEqual(testNode);
  })
  test("removeNthFromEnd() should return [2] for an input of [1,2], 2", () => {
    let node = linkedListBuilder([1,2])
    let testNode = linkedListBuilder([2])
    expect(removeNthFromEnd(node, 2)).toStrictEqual(testNode);
  })
})