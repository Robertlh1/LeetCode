const maximumSwap = require('./maximumSwap')

describe('Testing maximumSwap', () => {
  test('maximumSwap() should return 7236 when the input is 2736', () => {
    expect(maximumSwap(2736)).toEqual(7236);
  })
  test('maximumSwap() should return 9973 when the input is 9973', () => {
    expect(maximumSwap(9973)).toEqual(9973);
  })
  test('maximumSwap() should return 7632 when the input is 7236', () => {
    expect(maximumSwap(7236)).toEqual(7632);
  })
  test('maximumSwap() should return 10 when the input is 10', () => {
    expect(maximumSwap(10)).toEqual(10);
  })
  test('maximumSwap() should return 9913 when the input is 1993', () => {
    expect(maximumSwap(1993)).toEqual(9913);
  })
})