const expectCustom = require('./expectCustom')

describe('Testing expectCustom', () => {
  test('expectCustom().toBe should return true when called with equal values', () => {
    expect(expectCustom(5).toBe(5)).toEqual(true);
  })
  test('expectCustom().notToBe should return true when called with unequal values', () => {
    expect(expectCustom(5).notToBe(null)).toEqual(true);
  })
  test('expectCustom().toBe should throw an error if called with unequal values', () => {
    expect(() => {
      expectCustom(5).toBe(null);
    }).toThrow('Not Equal');
  })
  test('expectCustom().notToBe should throw an error if called with equal values', () => {
    expect(() => {
      expectCustom(5).notToBe(5);
    }).toThrow('Equal');
  })
})