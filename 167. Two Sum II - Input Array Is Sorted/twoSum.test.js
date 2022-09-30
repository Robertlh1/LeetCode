const twoSum = require('./twoSum')

describe("Testing twoSum", () => {
  test("twoSum() should return [1,2] when the input is [2,7,11,15], 9", () => {
    expect(twoSum([2,7,11,15], 9)).toStrictEqual([1,2]);
  })
  test("twoSum() should return [1,3] when the input is [2,3,4], 6", () => {
    expect(twoSum([2,3,4], 6)).toStrictEqual([1,3]);
  })
  test("twoSum() should return [1,2] when the input is [-1,0], -1", () => {
    expect(twoSum([-1,0], -1)).toStrictEqual([1,2]);
  })
  test("twoSum() should return [3,99,-1,-100] when the input is [0,0,3,4], 0", () => {
    expect(twoSum([0,0,3,4], 0)).toStrictEqual([1,2]);
  })
  test("twoSum() should return [2,3] when the input is [5,25,75], 100", () => {
    expect(twoSum([5,25,75], 100)).toStrictEqual([2,3]);
  })
})