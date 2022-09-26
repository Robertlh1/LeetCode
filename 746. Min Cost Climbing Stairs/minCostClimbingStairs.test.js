const minCostClimbingStairs = require('./minCostClimbingStairs')

describe("Testing minCostClimbingStairs", () => {
  test("minCostClimbingStairs() should return 15 when the input is [10,15,20]", () => {
    expect(minCostClimbingStairs([10,15,20])).toBe(15);
  })
  test("minCostClimbingStairs() should return 6 when the input is [1,100,1,1,1,100,1,1,100,1]", () => {
    expect(minCostClimbingStairs([1,100,1,1,1,100,1,1,100,1])).toBe(6);
  })
})