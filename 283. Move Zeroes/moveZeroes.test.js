const moveZeroes = require('./moveZeroes')

describe("Testing moveZeroes", () => {
  test("moveZeroes() should return [1,3,12,0,0] when the input is [0,1,0,3,12]", () => {
    expect(moveZeroes([0,1,0,3,12])).toStrictEqual([1,3,12,0,0]);
  })
  test("moveZeroes() should return [0] when the input is [0]", () => {
    expect(moveZeroes([0])).toStrictEqual([0]);
  })
})