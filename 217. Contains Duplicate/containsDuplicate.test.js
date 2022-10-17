const containsDuplicate = require('./containsDuplicate')

describe('Testing containsDuplicate', () => {
  test('containsDuplicate() should return true when the input is [1,2,3,1]', () => {
    expect(containsDuplicate([1,2,3,1])).toEqual(true);
  })
  test('containsDuplicate() should return false when the input is [1,2,3,4]', () => {
    expect(containsDuplicate([1,2,3,4])).toEqual(false);
  })
  test('containsDuplicate() should return true when the input is [1,1,1,3,3,4,3,2,4,2]', () => {
    expect(containsDuplicate([1,1,1,3,3,4,3,2,4,2])).toEqual(true);
  })
})