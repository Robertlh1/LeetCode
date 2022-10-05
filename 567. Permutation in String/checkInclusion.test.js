const checkInclusion = require('./checkInclusion')

describe("Testing checkInclusion", () => {
  test("checkInclusion() should return true for an input of 'ab', 'eidbaooo'", () => {
    expect(checkInclusion('ab', 'eidbaooo')).toBe(true);
  })
  test("checkInclusion() should return false for an input of 'ab', 'eidboaoo'", () => {
    expect(checkInclusion('ab', 'eidboaoo')).toBe(false);
  })
  test("checkInclusion() should return false for an input of 'hello', 'ooolleoooleh'", () => {
    expect(checkInclusion('hello', 'ooolleoooleh')).toBe(false);
  })
  test("checkInclusion() should return true for an input of 'adc', 'dcda'", () => {
    expect(checkInclusion('adc', 'dcda')).toBe(true);
  })
})