const floodFill = require('./floodFill')

describe("Testing floodFill", () => {
  test("floodFill() should return [[2,2,2],[2,2,0],[2,0,1]] for an input of [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2", () => {
    expect(floodFill([[1,1,1],[1,1,0],[1,0,1]], 1, 1, 2)).toStrictEqual([[2,2,2],[2,2,0],[2,0,1]]);
  })
  test("floodFill() should return [[0,0,0],[0,0,0]] for an input of [[0,0,0],[0,0,0]], sr = 0, sc = 0, color = 0", () => {
    expect(floodFill([[0,0,0],[0,0,0]], 0, 0, 0)).toStrictEqual([[0,0,0],[0,0,0]]);
  })
  test("floodFill() should return [[2,2,2],[2,2,2]] for an input of [[0,0,0],[0,0,0]], sr = 1, sc = 0, color = 2", () => {
    expect(floodFill([[0,0,0],[0,0,0]], 1, 0, 2)).toStrictEqual([[2,2,2],[2,2,2]]);
  })
})