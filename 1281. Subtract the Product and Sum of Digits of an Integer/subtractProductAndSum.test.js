const subtractProductAndSum = require('./subtractProductAndSum')

describe('Testing subtractProductAndSum', () => {
  test('subtractProductAndSum() should return 15 when the input is 234', () => {
    expect(subtractProductAndSum(234)).toEqual(15);
  })
  test('subtractProductAndSum() should return 21 when the input is 4421', () => {
    expect(subtractProductAndSum(4421)).toEqual(21);
  })
})