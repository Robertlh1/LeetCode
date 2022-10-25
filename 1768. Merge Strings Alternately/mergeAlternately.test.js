const mergeAlternately = require('./mergeAlternately')

describe('Testing mergeAlternately', () => {
  test('mergeAlternately() should return "apbqcr" when the input is "abc", "pqr"', () => {
    expect(mergeAlternately("abc", "pqr")).toEqual("apbqcr");
  })
  test('mergeAlternately() should return "apbqrs" when the input is "ab", "pqrs"', () => {
    expect(mergeAlternately("ab", "pqrs")).toEqual("apbqrs");
  })
  test('mergeAlternately() should return "apbqcd" when the input is "abcd", "pq"', () => {
    expect(mergeAlternately("abcd", "pq")).toEqual("apbqcd");
  })
})