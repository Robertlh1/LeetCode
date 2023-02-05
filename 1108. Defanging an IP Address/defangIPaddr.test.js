const defangIPaddr = require('./defangIPaddr')

describe('Testing defangIPaddr', () => {
  test('defangIPaddr() should return "1[.]1[.]1[.]1" when the input is "1.1.1.1"', () => {
    expect(defangIPaddr("1.1.1.1")).toEqual("1[.]1[.]1[.]1");
  })
  test('defangIPaddr() should return "255[.]100[.]50[.]0" when the input is "255.100.50.0"', () => {
    expect(defangIPaddr("255.100.50.0")).toEqual("255[.]100[.]50[.]0");
  })
})