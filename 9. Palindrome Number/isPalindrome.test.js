const isPalindrome = require('./isPalindrome')

describe("Testing isPalindrome", () => {
  test("isPalindrome() should return true for an input of (121)", () => {
    expect(isPalindrome(121)).toBe(true);
  })
  test("isPalindrome() should return false for an input of (-121)", () => {
    expect(isPalindrome(-121)).toBe(false);
  })
  test("isPalindrome() should return false for an input of (10)", () => {
    expect(isPalindrome(10)).toBe(false);
  })
})