const findAnagrams = require('./findAnagrams')

describe("Testing findAnagrams", () => {
  test("findAnagrams() should return [0, 6] when the input is 'cbaebabacd', 'abc'", () => {
    expect(findAnagrams('cbaebabacd', 'abc')).toStrictEqual([0, 6]);
  })
  test("findAnagrams() should return [0, 1, 2] when the input is 'abab', 'ab'", () => {
    expect(findAnagrams('abab', 'ab')).toStrictEqual([0, 1, 2]);
  })
  test("findAnagrams() should return [2] when the input is 'bpaa', 'aa'", () => {
    expect(findAnagrams('bpaa', 'aa')).toStrictEqual([2]);
  })
})