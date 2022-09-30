const reverseWords = require('./reverseWords')

describe("Testing reverseWords", () => {
  test("reverseWords() should return 's'teL ekat edoCteeL tsetnoc' for an input of 'Let's take LeetCode contest'", () => {
    expect(reverseWords("Let's take LeetCode contest")).toBe("s'teL ekat edoCteeL tsetnoc");
  })
  test("reverseWords() should return 'doG gniD' for an input of 'God Ding'", () => {
    expect(reverseWords("God Ding")).toBe("doG gniD");
  })
})