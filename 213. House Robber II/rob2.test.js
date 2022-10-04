const rob2 = require('./rob2')

describe("Testing rob2", () => {
  test("rob2() should return 3 when the input is [2,3,2]", () => {
    expect(rob2([2,3,2])).toBe(3);
  })
  test("rob2() should return 4 when the input is [1,2,3,1]", () => {
    expect(rob2([1,2,3,1])).toBe(4);
  })
  test("rob2() should return 3 when the input is [1,2,3]", () => {
    expect(rob2([1,2,3])).toBe(3);
  })
  test("rob2() should return 0 when the input is [0]", () => {
    expect(rob2([0])).toBe(0);
  })
  test("rob2() should return 1 when the input is [1]", () => {
    expect(rob2([1])).toBe(1);
  })
})