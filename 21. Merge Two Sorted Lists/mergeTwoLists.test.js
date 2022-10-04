const mergeTwoLists = require('./mergeTwoLists')
const linkedListBuilder = require('../Utility Functions/linkedListBuilder')

describe("Testing mergeTwoLists", () => {
  test("mergeTwoLists() should return [1,1,2,3,4,4] for an input of [1,2,4], [1,3,4]", () => {
    let node1 = linkedListBuilder([1,2,4])
    let node2 = linkedListBuilder([1,3,4])
    let testNode = linkedListBuilder([1,1,2,3,4,4])
    expect(mergeTwoLists(node1, node2)).toEqual(testNode);
  })
  test("mergeTwoLists() should return null for an input of [], []", () => {
    let node1 = linkedListBuilder([])
    let node2 = linkedListBuilder([])
    expect(mergeTwoLists(node1, node2)).toEqual(null);
  })
  test("mergeTwoLists() should return [1] for an input of [1,2], 1", () => {
    let node1 = linkedListBuilder([])
    let node2 = linkedListBuilder([0])
    let testNode = linkedListBuilder([0])
    expect(mergeTwoLists(node1, node2)).toEqual(testNode);
  })
})