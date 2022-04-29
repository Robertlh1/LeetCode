const alphabetBoardPath = require('./alphabetBoardPath')

describe("Testing alphabetBoardPath", () => {
  test("alphabetBoardPath() should return 'DDR!UURRR!!DDD!' for an input of 'leet'", () => {
    expect(alphabetBoardPath("leet")).toBe("DDR!UURRR!!DDD!");
  })
  test("alphabetBoardPath() should return 'RR!DDRR!UUL!R!' for an input of 'code'", () => {
    expect(alphabetBoardPath("code")).toBe("RR!DDRR!UUL!R!");
  })
  test("alphabetBoardPath() should return 'DDDDD!UUUUURRR!DDDDLLLD!' for an input of 'zdz'", () => {
    expect(alphabetBoardPath("zdz")).toBe("DDDDD!UUUUURRR!DDDDLLLD!");
  })
})