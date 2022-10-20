const matrixReshape = require('./matrixReshape')

describe('Testing matrixReshape', () => {
  test('matrixReshape() should return [[1,2,3,4]] when the input is [[1,2],[3,4]],1,4', () => {
    expect(matrixReshape([[1,2],[3,4]],1,4)).toEqual([[1,2,3,4]]);
  })
  test('matrixReshape() should return [[1,2],[3,4]] when the input is [[1,2],[3,4]],2,4', () => {
    expect(matrixReshape([[1,2],[3,4]],2,4)).toEqual([[1,2],[3,4]]);
  })
})