const isIsomorphic = require('./isIsomorphic')

describe("Testing isIsomorphic", () => {
  test("isIsomorphic() should return True when the input is 'egg', 'add'", () => {
    expect(isIsomorphic('egg', 'add')).toBe(true);
  })
  test("isIsomorphic() should return False when the input is 'foo', 'bar'", () => {
    expect(isIsomorphic('foo', 'bar')).toBe(false);
  })
  test("isIsomorphic() should return True when the input is 'paper', 'title'", () => {
    expect(isIsomorphic('paper', 'title')).toBe(true);
  })
  test("isIsomorphic() should return False when the input is 'bbbaaaba', 'aaabbbba'", () => {
    expect(isIsomorphic('bbbaaaba', 'aaabbbba')).toBe(false);
  })
  test("isIsomorphic() should return False when the input is 'badc', 'baba'", () => {
    expect(isIsomorphic('badc', 'baba')).toBe(false);
  })
})