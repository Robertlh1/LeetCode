const freqAlphabets = require('./freqAlphabets')

describe('Testing freqAlphabets', () => {
  test('freqAlphabets() should return "jkab" when the input is "10#11#12"', () => {
    expect(freqAlphabets("10#11#12")).toEqual("jkab");
  })
  test('freqAlphabets() should return "acz" when the input is "1326#"', () => {
    expect(freqAlphabets("1326#")).toEqual("acz");
  })
})