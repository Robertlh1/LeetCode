const toLowerCase = require('./toLowerCase')

describe('Testing toLowerCase', () => {
  test('toLowerCase() should return "hello" when the input is "Hello"', () => {
    expect(toLowerCase("Hello")).toEqual("hello");
  })
  test('toLowerCase() should return "here" when the input is "here"', () => {
    expect(toLowerCase("here")).toEqual("here");
  })
  test('toLowerCase() should return "lovely" when the input is "LOVELY"', () => {
    expect(toLowerCase("LOVELY")).toEqual("lovely");
  })
})