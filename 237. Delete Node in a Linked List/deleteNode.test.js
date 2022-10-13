const deleteNode = require('./deleteNode')
const linkedListBuilder = require('../Utility Functions/linkedListBuilder')

describe('Testing deleteNode', () => {
  // head function simulates a process that the LeetCode prompt runs behind the scenes for testing
  var head = function(node, tgt) {
    let head = node
    while (node.val !== tgt) {
      node = node.next
    }
    node = deleteNode(node)
    return head
  }

  test('deleteNode() should return [4,1,9] when the input is [4,5,1,9], node = 5', () => {
    let list = linkedListBuilder([4,5,1,9])
    let result = linkedListBuilder([4,1,9])
    expect(head(list, 5)).toEqual(result);
  })
  test('deleteNode() should return [4,5,9] when the input is [4,5,1,9], node = 1', () => {
    let list = linkedListBuilder([4,5,1,9])
    let result = linkedListBuilder([4,5,9])
    expect(head(list, 1)).toEqual(result);
  })
  test('deleteNode() should return [0,1,3] when the input is [2,0,1,3], node = 2', () => {
    let list = linkedListBuilder([2,0,1,3])
    let result = linkedListBuilder([0,1,3])
    expect(head(list, 2)).toEqual(result);
  })
})