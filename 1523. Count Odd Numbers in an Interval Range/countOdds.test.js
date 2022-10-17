const countOdds = require('./countOdds')

describe('Testing countOdds', () => {
  test('countOdds() should return 3 when the input is 3, 7', () => {
    expect(countOdds(3, 7)).toEqual(3);
  })
  test('countOdds() should return 1 when the input is 8, 10', () => {
    expect(countOdds(8, 10)).toEqual(1);
  })
})