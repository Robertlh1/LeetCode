const maxSubarraySumCircular = require('./maxSubarraySumCircular')

describe('Testing maxSubarraySumCircular', () => {
  test('maxSubarraySumCircular() should return 3 when the input is [1,-2,3,-2]', () => {
    expect(maxSubarraySumCircular([1,-2,3,-2])).toEqual(3);
  })
  test('maxSubarraySumCircular() should return 10 when the input is [5,-3,5]', () => {
    expect(maxSubarraySumCircular([5,-3,5])).toEqual(10);
  })
  test('maxSubarraySumCircular() should return -2 when the input is [-3,-2,-3]', () => {
    expect(maxSubarraySumCircular([-3,-2,-3])).toEqual(-2);
  })
  test('maxSubarraySumCircular() should return 10 when the input is [5, 2, -100, 5, -2]', () => {
    expect(maxSubarraySumCircular([5, 2, -100, 5, -2])).toEqual(10);
  })
  test('maxSubarraySumCircular() should return 9 when the input is [5, -4, 5, -100, 5, -2]', () => {
    expect(maxSubarraySumCircular([5, -4, 5, -100, 5, -2])).toEqual(9);
  })
})