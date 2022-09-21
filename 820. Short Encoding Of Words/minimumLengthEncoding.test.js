const minimumLengthEncoding = require('./minimumLengthEncoding')

describe("Testing minimumLengthEncoding", () => {
  test('minimumLengthEncoding() should return 3 for an input of (["time", "me", "bell"])', () => {
    expect(minimumLengthEncoding(["time", "me", "bell"])).toBe(10);
  })
  test('minimumLengthEncoding() should return 6 for an input of (["t"])', () => {
    expect(minimumLengthEncoding(["t"])).toBe(2);
  })
  test('minimumLengthEncoding() should return 5 for an input of (["time","time","time","time"])', () => {
    expect(minimumLengthEncoding(["time","time","time","time"])).toBe(5);
  })
  test('minimumLengthEncoding() should return 5 for an input of (["time"])', () => {
    expect(minimumLengthEncoding(["time"])).toBe(5);
  })
})