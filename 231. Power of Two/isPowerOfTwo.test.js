const isPowerOfTwo = require('./isPowerOfTwo')

describe('Testing isPowerOfTwo', () => {
  test('isPowerOfTwo() should return true when the input is 1', () => {
    expect(isPowerOfTwo(1)).toBe(true);
  })
  test('isPowerOfTwo() should return true when the input is 2', () => {
    expect(isPowerOfTwo(2)).toBe(true);
  })
  test('isPowerOfTwo() should return true when the input is 4', () => {
    expect(isPowerOfTwo(4)).toBe(true);
  })
  test('isPowerOfTwo() should return true when the input is 8', () => {
    expect(isPowerOfTwo(8)).toBe(true);
  })
  test('isPowerOfTwo() should return true when the input is 16', () => {
    expect(isPowerOfTwo(16)).toBe(true);
  })
  test('isPowerOfTwo() should return true when the input is 32', () => {
    expect(isPowerOfTwo(32)).toBe(true);
  })
  test('isPowerOfTwo() should return true when the input is 64', () => {
    expect(isPowerOfTwo(64)).toBe(true);
  })
  test('isPowerOfTwo() should return true when the input is 128', () => {
    expect(isPowerOfTwo(128)).toBe(true);
  })
  test('isPowerOfTwo() should return true when the input is 256', () => {
    expect(isPowerOfTwo(256)).toBe(true);
  })
  test('isPowerOfTwo() should return true when the input is 512', () => {
    expect(isPowerOfTwo(512)).toBe(true);
  })
  test('isPowerOfTwo() should return true when the input is 1024', () => {
    expect(isPowerOfTwo(1024)).toBe(true);
  })
  test('isPowerOfTwo() should return false when the input is 3', () => {
    expect(isPowerOfTwo(3)).toBe(false);
  })
  test('isPowerOfTwo() should return false when the input is 67108865', () => {
    expect(isPowerOfTwo(67108865)).toBe(false);
  })
})