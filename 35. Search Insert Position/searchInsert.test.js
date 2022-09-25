const searchInsert = require('./searchInsert')

describe("Testing searchInsert", () => {
  test("searchInsert() should return 2 when the input is [1,3,5,6], 5", () => {
    expect(searchInsert([1,3,5,6], 5)).toBe(2);
  })
  test("searchInsert() should return 1 when the input is [1,3,5,6], 2", () => {
    expect(searchInsert([1,3,5,6], 2)).toBe(1);
  })
  test("searchInsert() should return 4 when the input is [1,3,5,6], 7", () => {
    expect(searchInsert([1,3,5,6], 7)).toBe(4);
  })
  test("searchInsert() should return 0 when the input is [1], 1", () => {
    expect(searchInsert([1], 1)).toBe(0);
  })
})