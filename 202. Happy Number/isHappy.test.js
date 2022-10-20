const isHappy = require('./isHappy')

describe('Testing isHappy', () => {
  test('isHappy() should return true when the input is 19', () => {
    expect(isHappy(19)).toEqual(true);
  })
  test('isHappy() should return false when the input is 2', () => {
    expect(isHappy(2)).toEqual(false);
  })
})