const numOfBurgers = require('./numOfBurgers')

describe("Testing numOfBurgers", () => {
  test("numOfBurgers() should return [1, 6] for an input of (16, 7)", () => {
    expect(numOfBurgers(16, 7)).toStrictEqual([1, 6]);
  })
  test("numOfBurgers() should return [] for an input of (17, 4)", () => {
    expect(numOfBurgers(17, 4)).toStrictEqual([]);
  })
  test("numOfBurgers() should return [] for an input of (4, 7)", () => {
    expect(numOfBurgers(4, 17)).toStrictEqual([]);
  })
})