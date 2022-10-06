const orangesRotting = require('./orangesRotting')

describe("Testing orangesRotting", () => {
  test("orangesRotting() should return 4 when the input is [[2,1,1],[1,1,0],[0,1,1]]", () => {
    expect(orangesRotting([[2,1,1],[1,1,0],[0,1,1]])).toBe(4);
  })
  test("orangesRotting() should return -1 when the input is [[2,1,1],[0,1,1],[1,0,1]]", () => {
    expect(orangesRotting([[2,1,1],[0,1,1],[1,0,1]])).toBe(-1);
  })
  test("orangesRotting() should return 0 when the input is [[0,2]]", () => {
    expect(orangesRotting([[0,2]])).toBe(0);
  })
  test("orangesRotting() should return 2 when the input is [[2,1,1],[1,1,1],[0,1,2]]", () => {
    expect(orangesRotting([[2,1,1],[1,1,1],[0,1,2]])).toBe(2);
  })
  test("orangesRotting() should return 1 when the input is [[1],[2],[2]]", () => {
    expect(orangesRotting([[1],[2],[2]])).toBe(1);
  })
  test("orangesRotting() should return 2 when the input is [[1,1,2,0,2,0]]", () => {
    expect(orangesRotting([[1,1,2,0,2,0]])).toBe(2);
  })
  test("orangesRotting() should return 2 when the input is [[0,0,1,2],[2,0,1,1]]", () => {
    expect(orangesRotting([[0,0,1,2],[2,0,1,1]])).toBe(2);
  })
})