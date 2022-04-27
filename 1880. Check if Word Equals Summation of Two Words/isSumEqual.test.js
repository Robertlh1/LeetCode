const isSumEqual = require('./isSumEqual')

describe("Testing isSumEqual", () => {
  test("isSumEqual() should return true for an input of ('acb', 'cba', 'cdb')", () => {
    expect(isSumEqual('acb', 'cba', 'cdb')).toBe(true);
  })
  test("isSumEqual() should return false for an input of ('aaa', 'a', 'aab')", () => {
    expect(isSumEqual('aaa', 'a', 'aab')).toBe(false);
  })
  test("isSumEqual() should return true for an input of ('aaa', 'a', 'aaaa')", () => {
    expect(isSumEqual('aaa', 'a', 'aaaa')).toBe(true);
  })
  test("isSumEqual() should return true for an input of ('j', 'j', 'bi')", () => {
    expect(isSumEqual('j', 'j', 'bi')).toBe(true);
  })
})