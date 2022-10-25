const deleteDuplicates = require('./deleteDuplicates')
const linkedListBuilder = require('../Utility Functions/linkedListBuilder')

describe('Testing deleteDuplicates', () => {
  test('deleteDuplicates() should return [1,2] when the input is [1,1,2]', () => {
    let testNode = linkedListBuilder([1,1,2])
    let resultNode = linkedListBuilder([1,2])
    expect(deleteDuplicates(testNode)).toEqual(resultNode);
  })
  test('deleteDuplicates() should return [1,2,3] when the input is [1,1,2,3,3]', () => {
    let testNode = linkedListBuilder([1,1,2,3,3])
    let resultNode = linkedListBuilder([1,2,3])
    expect(deleteDuplicates(testNode)).toEqual(resultNode);
  })
  test('deleteDuplicates() should return [1] when the input is [1,1,1]', () => {
    let testNode = linkedListBuilder([1,1,1])
    let resultNode = linkedListBuilder([1])
    expect(deleteDuplicates(testNode)).toEqual(resultNode);
  })
})