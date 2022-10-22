const firstUniqChar = require('./firstUniqChar')

describe('Testing firstUniqChar', () => {
  test('firstUniqChar() should return 0 when the input is "leetcode"', () => {
    expect(firstUniqChar("leetcode")).toEqual(0);
  })
  test('firstUniqChar() should return 2 when the input is "loveleetcode"', () => {
    expect(firstUniqChar("loveleetcode")).toEqual(2);
  })
  test('firstUniqChar() should return -1 when the input is "aabb"', () => {
    expect(firstUniqChar("aabb")).toEqual(-1);
  })
})