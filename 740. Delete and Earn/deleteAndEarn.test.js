const deleteAndEarn = require('./deleteAndEarn')

describe("Testing deleteAndEarn", () => {
  test("deleteAndEarn() should return 6 for an input of [3,4,2]", () => {
    expect(deleteAndEarn([3,4,2])).toBe(6);
  })
  test("deleteAndEarn() should return 9 for an input of [2,2,3,3,3,4]", () => {
    expect(deleteAndEarn([2,2,3,3,3,4])).toBe(9);
  })
  test("deleteAndEarn() should return 18 for an input of [1,1,1,2,4,5,5,5,6]", () => {
    expect(deleteAndEarn([1,1,1,2,4,5,5,5,6])).toBe(18);
  })
  test("deleteAndEarn() should return 1 for an input of [1]", () => {
    expect(deleteAndEarn([1])).toBe(1);
  })
  test("deleteAndEarn() should return 4 for an input of [3,1]", () => {
    expect(deleteAndEarn([3,1])).toBe(4);
  })
  test("deleteAndEarn() should return 43 for an input of [1,6,3,3,8,4,8,10,1,3]", () => {
    expect(deleteAndEarn([1,6,3,3,8,4,8,10,1,3])).toBe(43);
  })
})