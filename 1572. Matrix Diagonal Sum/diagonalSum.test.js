const diagonalSum = require('./diagonalSum')

describe('Testing diagonalSum', () => {
  test('diagonalSum() should return 25 when the input is [[1,2,3],[4,5,6],[7,8,9]]', () => {
    expect(diagonalSum([[1,2,3],[4,5,6],[7,8,9]])).toEqual(25);
  })
  test('diagonalSum() should return 8 when the input is [[1,1,1,1],[1,1,1,1],[1,1,1,1],[1,1,1,1]]', () => {
    expect(diagonalSum([[1,1,1,1],[1,1,1,1],[1,1,1,1],[1,1,1,1]])).toEqual(8);
  })
  test('diagonalSum() should return 5 when the input is [[5]]', () => {
    expect(diagonalSum([[5]])).toEqual(5);
  })
  test('diagonalSum() should return 63 when the input is [[7,9,8,6,3],[3,9,4,5,2],[8,1,10,4,10],[9,5,10,9,6],[7,2,4,10,8]]', () => {
    expect(diagonalSum([[7,9,8,6,3],[3,9,4,5,2],[8,1,10,4,10],[9,5,10,9,6],[7,2,4,10,8]])).toEqual(63);
  })
})