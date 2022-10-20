const canMakeArithmeticProgression = require('./canMakeArithmeticProgression')

describe('Testing canMakeArithmeticProgression', () => {
  test('canMakeArithmeticProgression() should return true when the input is [3,5,1]', () => {
    expect(canMakeArithmeticProgression([3,5,1])).toEqual(true);
  })
  test('canMakeArithmeticProgression() should return false when the input is [1,2,4]', () => {
    expect(canMakeArithmeticProgression([1,2,4])).toEqual(false);
  })
})