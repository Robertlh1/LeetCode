const maxSubArray = require('./maxSubArray')

describe('Testing maxSubArray', () => {
  test('maxSubArray() should return 6 when the input is [-2,1,-3,4,-1,2,1,-5,4]', () => {
    expect(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])).toEqual(6);
  })
  test('maxSubArray() should return 1 when the input is [1]', () => {
    expect(maxSubArray([1])).toEqual(1);
  })
  test('maxSubArray() should return 23 when the input is [5,4,-1,7,8]', () => {
    expect(maxSubArray([5,4,-1,7,8])).toEqual(23);
  })
})