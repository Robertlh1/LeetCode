const jump = require('./jump')

describe('Testing jump', () => {
  test('jump() should return 2 when the input is [2,3,1,1,4]', () => {
    expect(jump([2,3,1,1,4])).toEqual(2);
  })
  test('jump() should return 2 when the input is [2,3,0,1,4]', () => {
    expect(jump([2,3,0,1,4])).toEqual(2);
  })
  test('jump() should return 1 when the input is [2,1]', () => {
    expect(jump([2,1])).toEqual(1);
  })
  test('jump() should return 3 when the input is [1,1,2,1,1]', () => {
    expect(jump([1,1,2,1,1])).toEqual(3);
  })
  test('jump() should return 3 when the input is [1,2,1,1,1]', () => {
    expect(jump([1,2,1,1,1])).toEqual(3);
  })
  test('jump() should return 2 when the input is [10,9,8,7,6,5,4,3,2,1,1,0]', () => {
    expect(jump([10,9,8,7,6,5,4,3,2,1,1,0])).toEqual(2);
  })
})