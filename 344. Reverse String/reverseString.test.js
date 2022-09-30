const reverseString = require('./reverseString')

describe("Testing reverseString", () => {
  test("reverseString() should return ['o','l','l','e','h] when the input is ['h','e','l','l','o']", () => {
    expect(reverseString(["h","e","l","l","o"])).toStrictEqual(["o","l","l","e","h"]);
  })
  test("reverseString() should return ['h','a','n','n','a','H'] when the input is ['H','a','n','n','a','h']", () => {
    expect(reverseString(["H","a","n","n","a","h"])).toStrictEqual(["h","a","n","n","a","H"]);
  })
})