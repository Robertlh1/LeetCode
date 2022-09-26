const sortedSquares = require('./sortedSquares')

describe("Testing sortedSquares", () => {
  test("sortedSquares() should return [0,1,9,16,100] when the input is [-4,-1,0,3,10]", () => {
    expect(sortedSquares([-4,-1,0,3,10])).toStrictEqual([0,1,9,16,100]);
  })
  test("sortedSquares() should return [4,9,9,49,121] when the input is [-7,-3,2,3,11]", () => {
    expect(sortedSquares([-7,-3,2,3,11])).toStrictEqual([4,9,9,49,121]);
  })
})