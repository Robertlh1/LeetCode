const sumOddLengthSubarrays = require('./sumOddLengthSubarrays')

describe('Testing sumOddLengthSubarrays', () => {
  test('sumOddLengthSubarrays() should return 58 when the input is [1,4,2,5,3]', () => {
    expect(sumOddLengthSubarrays([1,4,2,5,3])).toEqual(58);
  })
  test('sumOddLengthSubarrays() should return 3 when the input is [1,2]', () => {
    expect(sumOddLengthSubarrays([1,2])).toEqual(3);
  })
  test('sumOddLengthSubarrays() should return 66 when the input is [10,11,12]', () => {
    expect(sumOddLengthSubarrays([10,11,12])).toEqual(66);
  })
})