const romanToInt = require('./romanToInt')

describe('Testing romanToInt', () => {
  test('romanToInt() should return 3 when the input is "III"', () => {
    expect(romanToInt("III")).toEqual(3);
  })
  test('romanToInt() should return 58 when the input is "LVIII"', () => {
    expect(romanToInt("LVIII")).toEqual(58);
  })
  test('romanToInt() should return 1994 when the input is "MCMXCIV"', () => {
    expect(romanToInt("MCMXCIV")).toEqual(1994);
  })
  test('romanToInt() should return 3999 when the input is "MMMCMXCIX"', () => {
    expect(romanToInt("MMMCMXCIX")).toEqual(3999);
  })
})