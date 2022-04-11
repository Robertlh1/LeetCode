const reverse = require('./reverse')

describe("Testing reverse", () => {
  test("reverse() should return 321 for an input of (123)", () => {
    expect(reverse(123)).toBe(321);
  })
  test("reverse() should return -321 for an input of (-123)", () => {
    expect(reverse(-123)).toBe(-321);
  })
  test("reverse() should return 21 for an input of (120)", () => {
    expect(reverse(120)).toBe(21);
  })
  test("reverse() should return 0 for an output greater than the 32 bit integer range", () => {
    expect(reverse(1534236469)).toBe(0);
  })
  test("reverse() should return 0 for an output less than the 32 bit integer range", () => {
    expect(reverse(-1534236469)).toBe(0);
  })
})