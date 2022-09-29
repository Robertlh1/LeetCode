const maxProfit = require('./maxProfit')

describe("Testing maxProfit", () => {
  test("maxProfit() should return 5 for an input of [7,1,5,3,6,4]", () => {
    expect(maxProfit([7,1,5,3,6,4])).toBe(5);
  })
  test("maxProfit() should return 0 for an input of [7,6,4,3,1]", () => {
    expect(maxProfit([7,6,4,3,1])).toBe(0);
  })
  test("maxProfit() should return 1 for an input of [1, 2]", () => {
    expect(maxProfit([1, 2])).toBe(1);
  })
})