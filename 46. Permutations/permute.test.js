const permute = require('./permute')

describe("Testing permute", () => {
  test("permute() should return [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]] when the input is [1,2,3]", () => {
    expect(permute([1,2,3])).toEqual([[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]);
  })
  test("permute() should return [[0,1],[1,0]] when the input is [0,1]", () => {
    expect(permute([0,1])).toEqual([[0,1],[1,0]]);
  })
  test("permute() should return [[1]] when the input is [1]", () => {
    expect(permute([1])).toEqual([[1]]);
  })
})