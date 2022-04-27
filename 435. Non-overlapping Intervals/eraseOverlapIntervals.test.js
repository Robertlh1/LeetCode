const eraseOverlapIntervals = require('./eraseOverlapIntervals')

describe("Testing eraseOverlapIntervals", () => {
  test("eraseOverlapIntervals() should return 1 for an input of ([[1,2],[2,3],[3,4],[1,3]])", () => {
    expect(eraseOverlapIntervals([[1,2],[2,3],[3,4],[1,3]])).toBe(1);
  })
  test("eraseOverlapIntervals() should return 2 for an input of ([[1,2],[1,2],[1,2]])", () => {
    expect(eraseOverlapIntervals([[1,2],[1,2],[1,2]])).toBe(2);
  })
  test("eraseOverlapIntervals() should return 0 for an input of ([[1,2],[2,3]])", () => {
    expect(eraseOverlapIntervals([[1,2],[2,3]])).toBe(0);
  })
})