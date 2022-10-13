const intToRoman = require('./intToRoman')

describe('Testing intToRoman', () => {
  test('intToRoman() should return "III" when the input is 3', () => {
    expect(intToRoman(3)).toEqual("III");
  })
  test('intToRoman() should return "LVIII" when the input is 58', () => {
    expect(intToRoman(58)).toEqual("LVIII");
  })
  test('intToRoman() should return "MCMXCIV" when the input is 1994', () => {
    expect(intToRoman(1994)).toEqual("MCMXCIV");
  })
  test('intToRoman() should return "MMMCMXCIX" when the input is 3999', () => {
    expect(intToRoman(3999)).toEqual("MMMCMXCIX");
  })
})