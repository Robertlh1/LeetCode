const combine = require('./combine')

describe("Testing combine", () => {
  test("combine() should return [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]] when the input is 4, 2", () => {
    expect(combine(4, 2)).toEqual([[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]);
  })
  test("combine() should return [[1]] when the input is 1, 1", () => {
    expect(combine(1, 1)).toStrictEqual([[1]]);
  })
})