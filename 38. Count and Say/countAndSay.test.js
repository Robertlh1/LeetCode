const countAndSay = require('./countAndSay')

describe('Testing countAndSay', () => {
  test('countAndSay() should return "1" when the input is 1', () => {
    expect(countAndSay(1)).toEqual("1");
  })
  test('countAndSay() should return "11" when the input is 2', () => {
    expect(countAndSay(2)).toEqual("11");
  })
  test('countAndSay() should return "21" when the input is 3', () => {
    expect(countAndSay(3)).toEqual("21");
  })
  test('countAndSay() should return "1211" when the input is 4', () => {
    expect(countAndSay(4)).toEqual("1211");
  })
  test('countAndSay() should return the correct string when the input is 20', () => {
    expect(countAndSay(20)).toEqual("11131221131211132221232112111312111213111213211231132132211211131221131211221321123113213221123113112221131112311332211211131221131211132211121312211231131112311211232221121321132132211331121321231231121113112221121321133112132112312321123113112221121113122113121113123112112322111213211322211312113211");
  })
})