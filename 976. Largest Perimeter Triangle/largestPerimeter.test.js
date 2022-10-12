const largestPerimeter = require('./largestPerimeter')

describe('Testing largestPerimeter', () => {
  test('largestPerimeter() should return 5 when the input is [2,1,2]', () => {
    expect(largestPerimeter([2,1,2])).toEqual(5);
  })
  test('largestPerimeter() should return 0 when the input is [1,2,1]', () => {
    expect(largestPerimeter([1,2,1])).toEqual(0);
  })
  test('largestPerimeter() should return 10 when the input is [3,2,3,4]', () => {
    expect(largestPerimeter([3,2,3,4])).toEqual(10);
  })
})