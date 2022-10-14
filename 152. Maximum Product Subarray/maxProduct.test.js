const maxProduct = require('./maxProduct')

describe('Testing maxProduct', () => {
  test('maxProduct() should return 6 when the input is [2,3,-2,4]', () => {
    expect(maxProduct([2,3,-2,4])).toEqual(6);
  })
  test('maxProduct() should return 0 when the input is [-2,0,-1]', () => {
    expect(maxProduct([-2,0,-1])).toEqual(0);
  })
  test('maxProduct() should return 90 when the input is [9,1,10]', () => {
    expect(maxProduct([9,1,10])).toEqual(90);
  })
  test('maxProduct() should return 810 when the input is [9,9,10]', () => {
    expect(maxProduct([9,9,10])).toEqual(810);
  })
  test('maxProduct() should return -2 when the input is [-2]', () => {
    expect(maxProduct([-2])).toEqual(-2);
  })
  test('maxProduct() should return 160 when the input is [4, 2, -10, -2]', () => {
    expect(maxProduct([4, 2, -10, -2])).toEqual(160);
  })
  test('maxProduct() should return 4 when the input is [3,-1,4]', () => {
    expect(maxProduct([3,-1,4])).toEqual(4);
  })
  test('maxProduct() should return 24 when the input is [2,-5,-2,-4,3]', () => {
    expect(maxProduct([2,-5,-2,-4,3])).toEqual(24);
  })
})