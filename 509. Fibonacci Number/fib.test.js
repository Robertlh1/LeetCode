const fib = require('./fib')

describe("Testing fib", () => {
  test("fib() should return 1 when the input is 2", () => {
    expect(fib(2)).toBe(1);
  })
  test("fib() should return 2 when the input is 3", () => {
    expect(fib(3)).toBe(2);
  })
  test("fib() should return 3 when the input is 4", () => {
    expect(fib(4)).toBe(3);
  })
})