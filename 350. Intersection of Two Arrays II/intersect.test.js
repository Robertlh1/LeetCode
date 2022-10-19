const intersect = require('./intersect')

describe('Testing intersect', () => {
  test('intersect() should return [2,2] when the input is [1,2,2,1], [2,2]', () => {
    expect(intersect([1,2,2,1], [2,2])).toEqual(expect.arrayContaining([2,2]));
  })
  test('intersect() should return [4,9] when the input is [4,9,5], [9,4,9,8,4]', () => {
    expect(intersect([4,9,5], [9,4,9,8,4])).toEqual(expect.arrayContaining([4, 9]));
  })
})