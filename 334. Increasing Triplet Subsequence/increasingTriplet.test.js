const increasingTriplet = require('./increasingTriplet')

describe('Testing increasingTriplet', () => {
  test('increasingTriplet() should return true when the input is [1,2,3,4,5]', () => {
    expect(increasingTriplet([1,2,3,4,5])).toEqual(true);
  })
  test('increasingTriplet() should return false when the input is [5,4,3,2,1]', () => {
    expect(increasingTriplet([5,4,3,2,1])).toEqual(false);
  })
  test('increasingTriplet() should return true when the input is [2,1,5,0,4,6]', () => {
    expect(increasingTriplet([2,1,5,0,4,6])).toEqual(true);
  })
  test('increasingTriplet() should return true when the input is [20,100,10,12,5,13]', () => {
    expect(increasingTriplet([20,100,10,12,5,13])).toEqual(true);
  })
  test('increasingTriplet() should return true when the input is [5,1,5,5,2,5,4]', () => {
    expect(increasingTriplet([5,1,5,5,2,5,4])).toEqual(true);
  })
  test('increasingTriplet() should return false when the input is [1,2]', () => {
    expect(increasingTriplet([1,2])).toEqual(false);
  })
})