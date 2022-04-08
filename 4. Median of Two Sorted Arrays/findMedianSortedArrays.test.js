const findMedianSortedArrays = require('./findMedianSortedArrays')

describe("Testing findMedianSortedArrays", () => {
  test("findMedianSortedArrays() should return 2 for an input of [1, 3], [2]", () => {
    expect(findMedianSortedArrays([1, 3], [2])).toBe(2);
  })
  test("findMedianSortedArrays() should return 2.5 for an input of [1, 3], [2]", () => {
    expect(findMedianSortedArrays([1,2], [3,4])).toBe(2.5);
  })
  test("findMedianSortedArrays() should return 2.5 for an input of [1, 3], [2, 7]", () => {
    expect(findMedianSortedArrays([1, 3], [2, 7])).toBe(2.5);
  })
  test("findMedianSortedArrays() should return 2.5 for an input of [1, 3], [2, 7]", () => {
    expect(findMedianSortedArrays([1, 3, 5, 7, 9, 11, 13, 15 ,17, 19, 21, 23, 25, 27, 29],
      [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30])).toBe(15.5);
  })
})