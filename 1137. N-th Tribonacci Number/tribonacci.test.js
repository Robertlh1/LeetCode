const tribonacci = require('./tribonacci')

describe("Testing tribonacci", () => {
  test("tribonacci() should return 4 when the input is 4", () => {
    expect(tribonacci(4)).toBe(4);
  })
  test("tribonacci() should return 1389537 when the input is 25", () => {
    expect(tribonacci(25)).toBe(1389537);
  })
  test("tribonacci() should return 0 when the input is 0", () => {
    expect(tribonacci(0)).toBe(0);
  })
  test("tribonacci() should return 1 when the input is 2", () => {
    expect(tribonacci(2)).toBe(1);
  })
})