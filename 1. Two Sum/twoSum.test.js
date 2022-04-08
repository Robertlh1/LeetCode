const twoSum = require('./twoSum')

describe("Testing twoSum", () => {
  test("twoSum() should return [0, 1] for the input [2,7,11,15], 9", () => {
    expect(twoSum([2,7,11,15], 9)).toStrictEqual([0, 1]);
  })
  test("twoSum() should return [1, 2] for the input [3,2,4], 6", () => {
    expect(twoSum([3,2,4], 6)).toStrictEqual([1,2]);
  })
  test("twoSum() should return [0, 1] for the input [3,3], 6", () => {
    expect(twoSum([3,3], 6)).toStrictEqual([0,1]);
  })
});