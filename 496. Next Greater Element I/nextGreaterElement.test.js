const nextGreaterElement = require('./nextGreaterElement')

describe('Testing nextGreaterElement', () => {
  test('nextGreaterElement() should return [-1,3,-1] when the input is [4,1,2],[1,3,4,2]', () => {
    expect(nextGreaterElement([4,1,2],[1,3,4,2])).toEqual([-1,3,-1]);
  })
  test('nextGreaterElement() should return [3,-1] when the input is [2,4],[1,2,3,4]', () => {
    expect(nextGreaterElement([2,4],[1,2,3,4])).toEqual([3,-1]);
  })
})