const isAlienSorted = require('./isAlienSorted')

describe('Testing isAlienSorted', () => {
  test('isAlienSorted() should return true when the input is ["hello","leetcode"], "hlabcdefgijkmnopqrstuvwxyz"', () => {
    expect(isAlienSorted(["hello","leetcode"], "hlabcdefgijkmnopqrstuvwxyz")).toEqual(true);
  })
  test('isAlienSorted() should return false when the input is ["word","world","row"], "worldabcefghijkmnpqstuvxyz"', () => {
    expect(isAlienSorted(["word","world","row"], "worldabcefghijkmnpqstuvxyz")).toEqual(false);
  })
  test('isAlienSorted() should return false when the input is ["apple","app"], "abcdefghijklmnopqrstuvwxyz"', () => {
    expect(isAlienSorted(["apple","app"], "abcdefghijklmnopqrstuvwxyz")).toEqual(false);
  })
  test('isAlienSorted() should return true when the input is ["ubg","kwh"], "qcipyamwvdjtesbghlorufnkzx"', () => {
    expect(isAlienSorted(["ubg","kwh"], "qcipyamwvdjtesbghlorufnkzx")).toEqual(true);
  })
  test('isAlienSorted() should return true when the input is ["apap","app"], "abcdefghijklmnopqrstuvwxyz"', () => {
    expect(isAlienSorted(["apap","app"], "abcdefghijklmnopqrstuvwxyz")).toEqual(true);
  })
  test('isAlienSorted() should return true when the input is ["aa","a"], "abqwertyuioplkjhgfdszxcvnm"', () => {
    expect(isAlienSorted(["aa","a"], "abqwertyuioplkjhgfdszxcvnm")).toEqual(false);
  })
})