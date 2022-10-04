const addTwoNumbers = require('./AddTwoNumbers')
const linkedListBuilder = require('../Utility Functions/linkedListBuilder')

describe("Testing addTwoNumbers", () => {
  test("addTwoNumbers() should return [7, 0, 8] for the input [2,4,3], [5,6,4]", () => {
    let node1 = linkedListBuilder([2,4,3])
    let node2 = linkedListBuilder([5,6,4])
    let node3 = linkedListBuilder([7,0,8])
    expect(addTwoNumbers(node1, node2)).toEqual(node3);
  })
  test("addTwoNumbers() should return [0] for the input [0], [0]", () => {
    let node = linkedListBuilder([0])
    expect(addTwoNumbers(node, node)).toEqual(node);
  })
  test("addTwoNumbers() should return [8, 9, 9, 9, 0 ,0 ,0, 1] for the input [9,9,9,9,9,9,9], [9,9,9,9]", () => {
    let node1 = linkedListBuilder([9,9,9,9,9,9,9])
    let node2 = linkedListBuilder([9,9,9,9])
    let node3 = linkedListBuilder([8, 9, 9, 9, 0 ,0 ,0, 1])
    expect(addTwoNumbers(node1, node2)).toEqual(node3);
  })
});