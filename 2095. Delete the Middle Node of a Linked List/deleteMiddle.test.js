const deleteMiddle = require('./deleteMiddle')
const linkedListBuilder = require('../../Utility Functions/linkedListBuilder')

describe('Testing deleteMiddle', () => {
  test('deleteMiddle() should return [1,3,4,1,2,6] when the input is [1,3,4,7,1,2,6]', () => {
    let list = linkedListBuilder([1,3,4,7,1,2,6])
    let result = linkedListBuilder([1,3,4,1,2,6])
    expect(deleteMiddle(list)).toEqual(result);
  })
  test('deleteMiddle() should return [1,2,4] when the input is [1,2,3,4]', () => {
    let list = linkedListBuilder([1,2,3,4])
    let result = linkedListBuilder([1,2,4])
    expect(deleteMiddle(list)).toEqual(result);
  })
  test('deleteMiddle() should return [2] when the input is [2,1]', () => {
    let list = linkedListBuilder([2,1])
    let result = linkedListBuilder([2])
    expect(deleteMiddle(list)).toEqual(result);
  })
  test('deleteMiddle() should return [] when the input is [2]', () => {
    let list = linkedListBuilder([2])
    let result = linkedListBuilder([])
    expect(deleteMiddle(list)).toEqual(result);
  })
})