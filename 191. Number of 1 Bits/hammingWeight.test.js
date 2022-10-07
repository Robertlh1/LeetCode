const hammingWeight = require('./hammingWeight')

describe('Testing hammingWeight', () => {
  test('hammingWeight() should return 3 when the input is "00000000000000000000000000001011"', () => {
    expect(hammingWeight("00000000000000000000000000001011")).toBe(3);
  })
  test('hammingWeight() should return 1 when the input is "00000000000000000000000010000000"', () => {
    expect(hammingWeight("00000000000000000000000010000000")).toBe(1);
  })
  test('hammingWeight() should return 31 when the input is "11111111111111111111111111111101"', () => {
    expect(hammingWeight("11111111111111111111111111111101")).toBe(31);
  })
})