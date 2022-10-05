const uniquePaths = require('./uniquePaths')

describe("Testing uniquePaths", () => {
  test("uniquePaths() should return 28 for an input of 3, 7", () => {
    expect(uniquePaths(3, 7)).toBe(28);
  })
  test("uniquePaths() should return 3 for an input of 3, 2", () => {
    expect(uniquePaths(3, 2)).toBe(3);
  })
})