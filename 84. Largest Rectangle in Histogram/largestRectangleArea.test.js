const largestRectangleArea = require('./largestRectangleArea')

describe("Testing largestRectangleArea", () => {
  test("largestRectangleArea() should return 10 for an input of ([2,1,5,6,2,3])", () => {
    expect(largestRectangleArea([2,1,5,6,2,3])).toBe(10);
  })
  test("largestRectangleArea() should return 4 for an input of ([2,4])", () => {
    expect(largestRectangleArea([2,4])).toBe(4);
  })
  test("largestRectangleArea() should return 0 for an input of ([0, 0])", () => {
    expect(largestRectangleArea([0, 0])).toBe(0);
  })
  test("largestRectangleArea() should return 1 for an input of ([1])", () => {
    expect(largestRectangleArea([1])).toBe(1);
  })
  test("largestRectangleArea() should return 9 for an input of ([0, 9])", () => {
    expect(largestRectangleArea([0, 9])).toBe(9);
  })
  test("largestRectangleArea() should return 3 for an input of ([2,1,2])", () => {
    expect(largestRectangleArea([2,1,2])).toBe(3);
  })
  test("largestRectangleArea() should return 6 for an input of ([4,2,3])", () => {
    expect(largestRectangleArea([4,2,3])).toBe(6);
  })
  test("largestRectangleArea() should return 20 for an input of ([3,6,5,7,4,8,1,0])", () => {
    expect(largestRectangleArea([3,6,5,7,4,8,1,0])).toBe(20);
  })
  test("largestRectangleArea() should return 26 for an input of ([4,7,6,8,5,9,1,26])", () => {
    expect(largestRectangleArea([4,7,6,8,5,9,1,26])).toBe(26);
  })
})