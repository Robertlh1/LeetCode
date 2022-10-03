const maxAreaOfIsland = require('./maxAreaOfIsland')

describe("Testing maxAreaOfIsland", () => {
  test("maxAreaOfIsland() should return 6 for an input of [map matrix]", () => {
    expect(maxAreaOfIsland([
      [0,0,1,0,0,0,0,1,0,0,0,0,0],
      [0,0,0,0,0,0,0,1,1,1,0,0,0],
      [0,1,1,0,1,0,0,0,0,0,0,0,0],
      [0,1,0,0,1,1,0,0,1,0,1,0,0],
      [0,1,0,0,1,1,0,0,1,1,1,0,0],
      [0,0,0,0,0,0,0,0,0,0,1,0,0],
      [0,0,0,0,0,0,0,1,1,1,0,0,0],
      [0,0,0,0,0,0,0,1,1,0,0,0,0]
    ])).toBe(6);
  })
  test("maxAreaOfIsland() should return 0 for an input of [[0,0,0,0,0,0,0,0]]", () => {
    expect(maxAreaOfIsland([[0,0,0,0,0,0,0,0]])).toBe(0);
  })
})