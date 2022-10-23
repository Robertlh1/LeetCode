const maximumWealth = require('./maximumWealth')

describe('Testing maximumWealth', () => {
  test('maximumWealth() should return 6 when the input is [[1,2,3],[3,2,1]]', () => {
    expect(maximumWealth([[1,2,3],[3,2,1]])).toEqual(6);
  })
  test('maximumWealth() should return 10 when the input is [[1,5],[7,3],[3,5]]', () => {
    expect(maximumWealth([[1,5],[7,3],[3,5]])).toEqual(10);
  })
  test('maximumWealth() should return 17 when the input is [[2,8,7],[7,1,3],[1,9,5]]', () => {
    expect(maximumWealth([[2,8,7],[7,1,3],[1,9,5]])).toEqual(17);
  })
})