const arrayStringsAreEqual = require('./arrayStringsAreEqual')

describe('Testing arrayStringsAreEqual', () => {
  test('arrayStringsAreEqual() should return true when the input is ["ab", "c"], ["a", "bc"]', () => {
    expect(arrayStringsAreEqual(["ab", "c"], ["a", "bc"])).toEqual(true);
  })
  test('arrayStringsAreEqual() should return false when the input is ["a", "cb"], ["ab", "c"]', () => {
    expect(arrayStringsAreEqual(["a", "cb"], ["ab", "c"])).toEqual(false);
  })
  test('arrayStringsAreEqual() should return true when the input is ["abc", "d", "defg"], ["abcddefg"]', () => {
    expect(arrayStringsAreEqual(["abc", "d", "defg"], ["abcddefg"])).toEqual(true);
  })
})