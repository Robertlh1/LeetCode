const merge = require('./merge')

describe('Testing merge', () => {
  test('merge() should return [1,2,2,3,5,6] when the input is [1,2,3,0,0,0], 3, [2,5,6], 3', () => {
    expect(merge([1,2,3,0,0,0], 3, [2,5,6], 3)).toEqual([1,2,2,3,5,6]);
  })
  test('merge() should return [1] when the input is [1], 1, [], 0', () => {
    expect(merge([1], 1, [], 0)).toEqual([1]);
  })
  test('merge() should return [1] when the input is [0], 0, [1], 1', () => {
    expect(merge([0], 0, [1], 1)).toEqual([1]);
  })
})