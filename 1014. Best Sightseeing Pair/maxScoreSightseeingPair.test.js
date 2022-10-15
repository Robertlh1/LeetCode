const maxScoreSightseeingPair = require('./maxScoreSightseeingPair')

describe('Testing maxScoreSightseeingPair', () => {
  test('maxScoreSightseeingPair() should return 11 when the input is [8,1,5,2,6]', () => {
    expect(maxScoreSightseeingPair([8,1,5,2,6])).toEqual(11);
  })
  test('maxScoreSightseeingPair() should return 2 when the input is [1,2]', () => {
    expect(maxScoreSightseeingPair([1,2])).toEqual(2);
  })
  test('maxScoreSightseeingPair() should return 23 when the input is [1,15,1,1,1,1,1,1,1,1,1,1,1,20]', () => {
    expect(maxScoreSightseeingPair([1,15,1,1,1,1,1,1,1,1,1,1,1,20])).toEqual(23);
  })
  test('maxScoreSightseeingPair() should return 3 when the input is [2,2,1]', () => {
    expect(maxScoreSightseeingPair([2,2,1])).toEqual(3);
  })
  test('maxScoreSightseeingPair() should return 3 when the input is [1,2,2]', () => {
    expect(maxScoreSightseeingPair([1,2,2])).toEqual(3);
  })
})