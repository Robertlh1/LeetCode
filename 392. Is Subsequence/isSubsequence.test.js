const isSubsequence = require('./isSubsequence')

describe("Testing isSubsequence", () => {
  test("isSubsequence() should return True when the input is 'abc', 'ahbgdc'", () => {
    expect(isSubsequence('abc', 'ahbgdc')).toBe(true);
  })
  test("isSubsequence() should return False when the input is 'axc', 'ahbgdc'", () => {
    expect(isSubsequence('axc', 'ahbgdc')).toBe(false);
  })
  test("isSubsequence() should return True when the input is '', ''", () => {
    expect(isSubsequence('', '')).toBe(true);
  })
})