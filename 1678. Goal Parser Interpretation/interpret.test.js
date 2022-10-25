const interpret = require('./interpret')

describe('Testing interpret', () => {
  test('interpret() should return "Goal" when the input is "G()(al)"', () => {
    expect(interpret("G()(al)")).toEqual("Goal");
  })
  test('interpret() should return "Gooooal" when the input is "G()()()()(al)"', () => {
    expect(interpret("G()()()()(al)")).toEqual("Gooooal");
  })
  test('interpret() should return "alGalooG" when the input is "(al)G(al)()()G"', () => {
    expect(interpret("(al)G(al)()()G")).toEqual("alGalooG");
  })
})