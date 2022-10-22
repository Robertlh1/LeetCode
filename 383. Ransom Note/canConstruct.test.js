const canConstruct = require('./canConstruct')

describe('Testing canConstruct', () => {
  test('canConstruct() should return false when the input is "a", "b"', () => {
    expect(canConstruct("a", "b")).toEqual(false);
  })
  test('canConstruct() should return false when the input is "aa", "ab"', () => {
    expect(canConstruct("aa", "ab")).toEqual(false);
  })
  test('canConstruct() should return true when the input is "aa", "aab"', () => {
    expect(canConstruct("aa", "aab")).toEqual(true);
  })
})