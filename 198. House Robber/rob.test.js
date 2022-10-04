const rob = require('./rob')

describe("Testing rob", () => {
  test("rob() should return 4 when the input is [1,2,3,1]", () => {
    expect(rob([1,2,3,1])).toBe(4);
  })
  test("rob() should return 12 when the input is [2,7,9,3,1]", () => {
    expect(rob([2,7,9,3,1])).toBe(12);
  })
})