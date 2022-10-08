const singleNumber = require('./singleNumber')

describe('Testing singleNumber', () => {
  test('singleNumber() should return 1 when the input is [2,2,1]', () => {
    expect(singleNumber([2,2,1])).toEqual(1);
  })
  test('singleNumber() should return 4 when the input is [4,1,2,1,2]', () => {
    expect(singleNumber([4,1,2,1,2])).toEqual(4);
  })
  test('singleNumber() should return 1 when the input is [1]', () => {
    expect(singleNumber([1])).toEqual(1);
  })
})