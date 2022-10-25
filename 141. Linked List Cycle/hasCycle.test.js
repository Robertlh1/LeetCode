const hasCycle = require('./hasCycle')
const linkedListBuilder = require('../Utility Functions/linkedListBuilder')

describe('Testing hasCycle', () => {
  test('hasCycle() should return true when the input is [3,2,0,-4], 1', () => {
    let testNode = linkedListBuilder([3,2,0,-4], 1)
    expect(hasCycle(testNode)).toEqual(true);
  })
  test('hasCycle() should return true when the input is [1,2], 0', () => {
    let testNode = linkedListBuilder([1,2], 0)
    expect(hasCycle(testNode)).toEqual(true);
  })
  test('hasCycle() should return false when the input is [1], -1', () => {
    let testNode = linkedListBuilder([1], -1)
    expect(hasCycle(testNode)).toEqual(false);
  })
})