const minMaxGame = require('./minMaxGame')

describe('Testing minMaxGame', () => {
  test('minMaxGame() should return 1 when the input is [1,3,5,2,4,8,2,2]', () => {
    expect(minMaxGame([1,3,5,2,4,8,2,2])).toEqual(1);
  })
  test('minMaxGame() should return 3 when the input is [3]', () => {
    expect(minMaxGame([3])).toEqual(3);
  })
})