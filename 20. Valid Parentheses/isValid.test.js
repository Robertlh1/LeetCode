const isValid = require('./isValid')

describe('Testing isValid', () => {
  test('isValid() should return true when the input is "()"', () => {
    expect(isValid("()")).toEqual(true);
  })
  test('isValid() should return true when the input is "()[]{}"', () => {
    expect(isValid("()[]{}")).toEqual(true);
  })
  test('isValid() should return false when the input is "(]"', () => {
    expect(isValid("(]")).toEqual(false);
  })
  test('isValid() should return true when the input is "([{}])"', () => {
    expect(isValid("([{}])")).toEqual(true);
  })
  test('isValid() should return false when the input is "([)]"', () => {
    expect(isValid("([)]")).toEqual(false);
  })
  test('isValid() should return false when the input is "["', () => {
    expect(isValid("[")).toEqual(false);
  })
})