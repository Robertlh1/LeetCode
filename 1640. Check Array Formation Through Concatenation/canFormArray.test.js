const canFormArray = require('./canFormArray')

describe('Testing canFormArray', () => {
  test('canFormArray() should return true when the input is [15,88], [[88],[15]]', () => {
    expect(canFormArray([15,88], [[88],[15]])).toEqual(true);
  })
  test('canFormArray() should return false when the input is [49,18,16], [[16,18,49]]', () => {
    expect(canFormArray([49,18,16], [[16,18,49]])).toEqual(false);
  })
  test('canFormArray() should return true when the input is [91,4,64,78], [[78],[4,64],[91]]', () => {
    expect(canFormArray([91,4,64,78], [[78],[4,64],[91]])).toEqual(true);
  })
  test('canFormArray() should return false when the input is [3,4,8], [[3],[5,8]]', () => {
    expect(canFormArray([3,4,8], [[3],[5,8]])).toEqual(false);
  })
})