const runningSum = require('./runningSum')

describe("Testing runningSum", () => {
  test("runningSum() should return [1,3,6,10] for an input of [1,2,3,4]", () => {
    expect(runningSum([1,2,3,4])).toStrictEqual([1,3,6,10]);
  })
  test("runningSum() should return [1,2,3,4,5] for an input of [1,1,1,1,1]", () => {
    expect(runningSum([1,1,1,1,1])).toStrictEqual([1,2,3,4,5]);
  })
  test("runningSum() should return [3,4,6,16,17] for an input of [3,1,2,10,1]", () => {
    expect(runningSum([3,1,2,10,1])).toStrictEqual([3,4,6,16,17]);
  })
})