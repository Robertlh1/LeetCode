const searchMatrix = require('./searchMatrix')

describe('Testing searchMatrix', () => {
  test('searchMatrix() should return true when the input is [[1,3,5,7],[10,11,16,20],[23,30,34,60]],3', () => {
    expect(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]],3)).toEqual(true);
  })
  test('searchMatrix() should return false when the input is [[1,3,5,7],[10,11,16,20],[23,30,34,60]], 13', () => {
    expect(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]],13)).toEqual(false);
  })
  test('searchMatrix() should return true when the input is [[1],[3]],1', () => {
    expect(searchMatrix([[1],[3]],1)).toEqual(true);
  })
  test('searchMatrix() should return true when the input is [[-10,-10],[-9,-9],[-8,-6],[-4,-2],[0,1],[3,3],[5,5],[6,8]],0', () => {
    expect(searchMatrix([[-10,-10],[-9,-9],[-8,-6],[-4,-2],[0,1],[3,3],[5,5],[6,8]],0)).toEqual(true);
  })
})