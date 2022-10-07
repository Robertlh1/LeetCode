const letterCasePermutation = require('./letterCasePermutation')

describe('Testing letterCasePermutation', () => {
  test('letterCasePermutation() should return ["a1b2","a1B2","A1b2","A1B2"] when the input is "a1b2"', () => {
    expect(letterCasePermutation("a1b2").sort()).toEqual(["a1b2","a1B2","A1b2","A1B2"].sort());
  })
  test('letterCasePermutation() should return ["3z4","3Z4"] when the input is "3z4"', () => {
    expect(letterCasePermutation("3z4").sort()).toEqual(["3z4","3Z4"].sort());
  })
  test('letterCasePermutation() should return ["12345"] when the input is "12345"', () => {
    expect(letterCasePermutation("12345").sort()).toEqual(["12345"].sort());
  })
  test('letterCasePermutation() should return ["mqe","mqE","mQe","mQE","Mqe","MqE","MQe","MQE"] when the input is "12345"', () => {
    expect(letterCasePermutation("mQe").sort()).toEqual(["mqe","mqE","mQe","mQE","Mqe","MqE","MQe","MQE"].sort());
  })
})