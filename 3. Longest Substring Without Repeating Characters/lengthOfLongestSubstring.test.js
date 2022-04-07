const lengthOfLongestSubstring = require('./lengthOfLongestSubstring')

describe("Testing lengthOfLongestSubstring", () => {
  test("lengthOfLongestSubstring() should return 0 for an undefined input", () => {
    expect(lengthOfLongestSubstring()).toBe(0);
  })
  test("lengthOfLongestSubstring() should return 0 for the input ''", () => {
    expect(lengthOfLongestSubstring('')).toBe(0);
  })
  test("lengthOfLongestSubstring() should return 3 for an input of 'abcabcbb'", () => {
    expect(lengthOfLongestSubstring('abcabcbb')).toBe(3);
  })
  test("lengthOfLongestSubstring() should return 1 for an input of 'bbbbb'", () => {
    expect(lengthOfLongestSubstring('bbbbb')).toBe(1);
  })
  test("lengthOfLongestSubstring() should return 3 for an input of 'pwwkew'", () => {
    expect(lengthOfLongestSubstring('pwwkew')).toBe(3);
  })
  test("lengthOfLongestSubstring() should return 2 for an input of 'aab'", () => {
    expect(lengthOfLongestSubstring('aab')).toBe(2);
  })
  test("lengthOfLongestSubstring() should return 3 for an input of 'dvdf'", () => {
    expect(lengthOfLongestSubstring('dvdf')).toBe(3);
  })
});