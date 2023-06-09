const nextGreatestLetter = require('./nextGreatestLetter')

describe('Testing nextGreatestLetter', () => {
  test('nextGreatestLetter() should return "c" when the input is ["c","f","j"], "a"', () => {
    expect(nextGreatestLetter(["c","f","j"], "a")).toEqual("c");
  })
  test('nextGreatestLetter() should return "f" when the input is ["c","f","j"], "c"', () => {
    expect(nextGreatestLetter(["c","f","j"], "c")).toEqual("f");
  })
  test('nextGreatestLetter() should return "x" when the input is ["x","x","y","y"], "z"', () => {
    expect(nextGreatestLetter(["x","x","y","y"], "z")).toEqual("x");
  })
  test('nextGreatestLetter() should return "f" when the input is ["c","f","j"], "d"', () => {
    expect(nextGreatestLetter(["c","f","j"], "d")).toEqual("f");
  })
})