const pairSum = require('./pairSum')
const linkedListBuilder = require('../Utility Functions/linkedListBuilder')

describe('Testing pairSum', () => {
  test('pairSum() should return 6 when the input is [5,4,2,1]', () => {
    let testNode = linkedListBuilder([5,4,2,1])
    expect(pairSum(testNode)).toEqual(6);
  })
  test('pairSum() should return 7 when the input is [4,2,2,3]', () => {
    let testNode = linkedListBuilder([4,2,2,3])
    expect(pairSum(testNode)).toEqual(7);
  })
  test('pairSum() should return 100001 when the input is [1,100000]', () => {
    let testNode = linkedListBuilder([1,100000])
    expect(pairSum(testNode)).toEqual(100001);
  })
})