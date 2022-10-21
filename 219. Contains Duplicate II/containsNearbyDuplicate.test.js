const containsNearbyDuplicate = require('./containsNearbyDuplicate')

describe('Testing containsNearbyDuplicate', () => {
  test('containsNearbyDuplicate() should return true when the input is [1,2,3,1],3', () => {
    expect(containsNearbyDuplicate([1,2,3,1],3)).toEqual(true);
  })
  test('containsNearbyDuplicate() should return true when the input is [1,0,1,1],1', () => {
    expect(containsNearbyDuplicate([1,0,1,1],1)).toEqual(true);
  })
  test('containsNearbyDuplicate() should return false when the input is [1,2,3,1,2,3],2', () => {
    expect(containsNearbyDuplicate([1,2,3,1,2,3],2)).toEqual(false);
  })
})