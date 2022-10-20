const generate = require('./generate')

describe('Testing generate', () => {
  test('generate() should return [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]] when the input is 5', () => {
    expect(generate(5)).toEqual([[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]);
  })
  test('generate() should return [[1]] when the input is 1', () => {
    expect(generate(1)).toEqual([[1]]);
  })
})