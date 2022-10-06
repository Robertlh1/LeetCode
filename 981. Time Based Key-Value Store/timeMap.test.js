const TimeMap = require('./TimeMap')

describe("Testing TimeMap", () => {
  test("TimeMap() should return the correct values for the given input set", () => {
    let timeMap = new TimeMap()
    expect(timeMap.set("foo", "bar", 1)).toBe(null);
    expect(timeMap.get("foo", 1)).toBe('bar');
    expect(timeMap.get("foo", 3)).toBe('bar');
    expect(timeMap.set("foo", "bar2", 4)).toBe(null);
    expect(timeMap.get("foo", 4)).toBe('bar2');
    expect(timeMap.get("foo", 5)).toBe('bar2');
  })
  test("TimeMap() should return the correct values for the given input set", () => {
    let timeMap = new TimeMap()
    expect(timeMap.set("love", "high", 10)).toBe(null);
    expect(timeMap.set("love", "low", 20)).toBe(null);
    expect(timeMap.get("love", 5)).toBe('');
    expect(timeMap.get("love", 10)).toBe('high');
    expect(timeMap.get("love", 15)).toBe('high');
    expect(timeMap.get("love", 20)).toBe('low');
    expect(timeMap.get("love", 25)).toBe('low');
  })
})