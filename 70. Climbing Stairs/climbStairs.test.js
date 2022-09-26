const climbStairs = require('./climbStairs')

describe("Testing climbStairs", () => {
  test("climbStairs() should return 2 when the input is 2", () => {
    expect(climbStairs(2)).toBe(2);
  })
  test("climbStairs() should return 3 when the input is 3", () => {
    expect(climbStairs(3)).toBe(3);
  })
  test("climbStairs() should return 8 when the input is 5", () => {
    expect(climbStairs(5)).toBe(8);
  })
})