const findTheDifference = require('./findTheDifference')

describe('Testing findTheDifference', () => {
  test('findTheDifference() should return "e" when the input is "abcd", "abcde"', () => {
    expect(findTheDifference("abcd", "abcde")).toEqual("e");
  })
  test('findTheDifference() should return "y" when the input is "", "y"', () => {
    expect(findTheDifference("", "y")).toEqual("y");
  })
  test('findTheDifference() should return "a" when the input is "", "y"', () => {
    expect(findTheDifference("a", "aa")).toEqual("a");
  })
})