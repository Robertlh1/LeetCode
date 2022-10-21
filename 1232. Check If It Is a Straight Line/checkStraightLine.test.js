const checkStraightLine = require('./checkStraightLine')

describe('Testing checkStraightLine', () => {
  test('checkStraightLine() should return true when the input is [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]', () => {
    expect(checkStraightLine([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]])).toEqual(true);
  })
  test('checkStraightLine() should return false when the input is [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]', () => {
    expect(checkStraightLine([[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]])).toEqual(false);
  })
  test('checkStraightLine() should return true when the input is [[0,0],[0,1],[0,-1]]', () => {
    expect(checkStraightLine([[0,0],[0,1],[0,-1]])).toEqual(true);
  })
  test('checkStraightLine() should return true when the input is [[6,7],[5,6],[4,5],[1,2],[2,3],[3,4]]', () => {
    expect(checkStraightLine([[6,7],[5,6],[4,5],[1,2],[2,3],[3,4]])).toEqual(true);
  })
  test('checkStraightLine() should return true when the input is [[2,1],[4,2],[6,3]]', () => {
    expect(checkStraightLine([[2,1],[4,2],[6,3]])).toEqual(true);
  })
})