const myAtoi = require('./myAtoi')

describe("Testing myAtoi", () => {
  test("myAtoi() should return 42 for an input of ('42')", () => {
    expect(myAtoi("42")).toBe(42);
  })
  test("myAtoi() should return -42 for an input of ('   -42')", () => {
    expect(myAtoi("   -42")).toBe(-42);
  })
  test("myAtoi() should return 4193 for an input of ('4193 with words')", () => {
    expect(myAtoi("4193 with words")).toBe(4193);
  })
  test("myAtoi() should return 0 for an input of ('words and 987')", () => {
    expect(myAtoi("words and 987")).toBe(0);
  })
  test("myAtoi() should return -88827 for an input of ('    -88827   5655  U')", () => {
    expect(myAtoi("    -88827   5655  U")).toBe(-88827);
  })
})