const rotate = require('./rotate')

describe("Testing rotate", () => {
  test("rotate() should return [5,6,7,1,2,3,4] when the input is [1,2,3,4,5,6,7], 3", () => {
    expect(rotate([1,2,3,4,5,6,7], 3)).toStrictEqual([5,6,7,1,2,3,4]);
  })
  test("rotate() should return [3,99,-1,-100] when the input is [-1,-100,3,99], 2", () => {
    expect(rotate([-1,-100,3,99], 2)).toStrictEqual([3,99,-1,-100]);
  })
})