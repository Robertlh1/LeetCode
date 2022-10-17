const checkIfPangram = require('./checkIfPangram')

describe('Testing checkIfPangram', () => {
  test('checkIfPangram() should return true when the input is "thequickbrownfoxjumpsoverthelazydog"', () => {
    expect(checkIfPangram("thequickbrownfoxjumpsoverthelazydog")).toEqual(true);
  })
  test('checkIfPangram() should return false when the input is "leetcode"', () => {
    expect(checkIfPangram("leetcode")).toEqual(false);
  })
})