const search = require('./search')

describe("Testing search", () => {
  test("search() should return 4 when the input is [-1,0,3,5,9,12], 9", () => {
    expect(search([-1,0,3,5,9,12], 9)).toBe(4);
  })
  test("search() should return -1 when the input is [-1,0,3,5,9,12], 2", () => {
    expect(search([-1,0,3,5,9,12])).toBe(-1);
  })
})