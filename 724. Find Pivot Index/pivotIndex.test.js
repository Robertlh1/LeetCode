const pivotIndex = require('./pivotIndex')

describe("Testing pivotIndex", () => {
  test("pivotIndex() should return 3 for an input of [1,7,3,6,5,6]", () => {
    expect(pivotIndex([1,7,3,6,5,6])).toBe(3);
  })
  test("pivotIndex() should return -1 for an input of [1,2,3]", () => {
    expect(pivotIndex([1,2,3])).toBe(-1);
  })
  test("pivotIndex() should return 0 for an input of [2,1,-1]", () => {
    expect(pivotIndex([2,1,-1])).toBe(0);
  })
})