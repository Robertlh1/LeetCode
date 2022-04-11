const convert = require('./convert')

describe("Testing convert", () => {
  test("convert() should return 'PAHNAPLSIIGYIR' for an input of ('PAYPALISHIRING', 3)", () => {
    expect(convert('PAYPALISHIRING', 3)).toBe('PAHNAPLSIIGYIR');
  })
  test("convert() should return 'PINALSIGYAHRPI' for an input of ('PAYPALISHIRING', 4)", () => {
    expect(convert('PAYPALISHIRING', 4)).toBe('PINALSIGYAHRPI');
  })
  test("convert() should return 'A' for an input of ('A', 1)", () => {
    expect(convert('A', 1)).toBe('A');
  })
})