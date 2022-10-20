const arraySign = require('./arraySign')

describe('Testing arraySign', () => {
  test('arraySign() should return 1 when the input is [-1,-2,-3,-4,3,2,1]', () => {
    expect(arraySign([-1,-2,-3,-4,3,2,1])).toEqual(1);
  })
  test('arraySign() should return 0 when the input is [1,5,0,2,-3]', () => {
    expect(arraySign([1,5,0,2,-3])).toEqual(0);
  })
  test('arraySign() should return -1 when the input is [-1,1,-1,1,-1]', () => {
    expect(arraySign([-1,1,-1,1,-1])).toEqual(-1);
  })
})