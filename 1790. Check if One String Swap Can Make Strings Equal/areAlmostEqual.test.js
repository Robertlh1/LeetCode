const areAlmostEqual = require('./areAlmostEqual')

describe('Testing areAlmostEqual', () => {
  test('areAlmostEqual() should return true when the input is "bank", "kanb"', () => {
    expect(areAlmostEqual("bank", "kanb")).toEqual(true);
  })
  test('areAlmostEqual() should return false when the input is "attack", "defend"', () => {
    expect(areAlmostEqual("attack", "defend")).toEqual(false);
  })
  test('areAlmostEqual() should return true when the input is "kelb", "kelb"', () => {
    expect(areAlmostEqual("kelb", "kelb")).toEqual(true);
  })
  test('areAlmostEqual() should return false when the input is "bank", "sanb"', () => {
    expect(areAlmostEqual("bank", "sanb")).toEqual(false);
  })
})