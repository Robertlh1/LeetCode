const twoOutOfThree = require('./twoOutOfThree')

describe("Testing twoOutOfThree", () => {
  test("twoOutOfThree() should return [3, 2] for an input of ([1, 1, 3, 2], [2, 3], [3])", () => {
    expect(twoOutOfThree([1, 1, 3, 2], [2, 3], [3]).sort()).toEqual([3, 2].sort());
  })
  test("twoOutOfThree() should return [2, 3, 1] for an input of ([3, 1], [2, 3], [1, 2])", () => {
    expect(twoOutOfThree([3, 1], [2, 3], [1, 2]).sort()).toEqual([2, 3, 1].sort());
  })
  test("twoOutOfThree() should return [] for an input of ([1, 2, 2], [4, 3, 3], [5])", () => {
    expect(twoOutOfThree([1, 2, 2], [4, 3, 3], [5]).sort()).toEqual([].sort());
  })
  test("twoOutOfThree() should return [8,13,2,15,11,12,9] for a large input", () => {
    expect(twoOutOfThree([2,15,10,11,14,12,14,11,9,1], [8,9,13,2,11,8], [13,5,15,7,12,7,8,3,13,15]).sort()).toEqual([8,13,2,15,11,12,9].sort());
  })
  test("twoOutOfThree() should return [3,2,9,11,1,5,4] for a large input", () => {
    expect(twoOutOfThree([2,9,11,1,5,11,4,2], [11,3,6,6,1,2,3,2], [3,11,9,11,4,14,9,5,8,1]).sort()).toEqual([3,2,9,11,1,5,4].sort());
  })
})