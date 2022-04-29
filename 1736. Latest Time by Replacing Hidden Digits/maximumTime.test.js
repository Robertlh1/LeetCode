const maximumTime = require('./maximumTime')

describe("Testing maximumTime", () => {
  test("maximumTime() should return '23:50' for an input of '2?:?0'", () => {
    expect(maximumTime("2?:?0")).toBe("23:50");
  })
  test("maximumTime() should return '09:39' for an input of '0?:3?'", () => {
    expect(maximumTime("0?:3?")).toBe("09:39");
  })
  test("maximumTime() should return '19:22' for an input of '1?:22'", () => {
    expect(maximumTime("1?:22")).toBe("19:22");
  })
  test("maximumTime() should return '23:39' for an input of '??:3?'", () => {
    expect(maximumTime("??:3?")).toBe("23:39");
  })
  test("maximumTime() should return '23:59' for an input of '??:??'", () => {
    expect(maximumTime("??:??")).toBe("23:59");
  })
  test("maximumTime() should return '11:22' for an input of '11:22'", () => {
    expect(maximumTime("11:22")).toBe("11:22");
  })
})