const isPathCrossing = require('./isPathCrossing')

describe('Testing isPathCrossing', () => {
  test('isPathCrossing() should return false when the input is "NES"', () => {
    expect(isPathCrossing("NES")).toEqual(false);
  })
  test('isPathCrossing() should return true when the input is "NESWW"', () => {
    expect(isPathCrossing("NESWW")).toEqual(true);
  })
  test('isPathCrossing() should return false when the input is "NEEEEEEEEEENNNNNNNNNNWWWWWWWWWW"', () => {
    expect(isPathCrossing("NEEEEEEEEEENNNNNNNNNNWWWWWWWWWW")).toEqual(false);
  })
})