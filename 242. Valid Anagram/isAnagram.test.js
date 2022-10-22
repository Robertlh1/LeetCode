const isAnagram = require('./isAnagram')

describe('Testing isAnagram', () => {
  test('isAnagram() should return true when the input is "anagram", "nagaram"', () => {
    expect(isAnagram("anagram", "nagaram")).toEqual(true);
  })
  test('isAnagram() should return false when the input is "rat", "car"', () => {
    expect(isAnagram("rat", "car")).toEqual(false);
  })
})