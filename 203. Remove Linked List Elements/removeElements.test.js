const removeElements = require('./removeElements')
const linkedListBuilder = require ('../Utility Functions/linkedListBuilder')

describe('Testing removeElements', () => {
  let testNode = linkedListBuilder([1,2,6,3,4,5,6])
  let resultNode = linkedListBuilder([1,2,3,4,5])
  test('removeElements() should return [1,2,3,4,5] when the input is [1,2,6,3,4,5,6], 6', () => {
    expect(removeElements(testNode, 6)).toStrictEqual(resultNode);
  })
  test('removeElements() should return [] when the input is [], 1', () => {
    let testNode = linkedListBuilder([])
    let resultNode = linkedListBuilder([])
    expect(removeElements(testNode, 1)).toEqual(resultNode);
  })
  test('removeElements() should return [] when the input is [7,7,7,7], 7', () => {
    let testNode = linkedListBuilder([7,7,7,7])
    let resultNode = linkedListBuilder([])
    expect(removeElements(testNode, 7)).toEqual(resultNode);
  })
  test('removeElements() should return [] when the input is [1,2,2,1], 2', () => {
    let testNode = linkedListBuilder([1,2,2,1])
    let resultNode = linkedListBuilder([1,1])
    expect(removeElements(testNode, 2)).toEqual(resultNode);
  })
})