const corpFlightBookings = require('./corpFlightBookings')

describe('Testing corpFlightBookings', () => {
  test('corpFlightBookings() should return [10,55,45,25,25] when the input is [[1,2,10],[2,3,20],[2,5,25]], 5', () => {
    expect(corpFlightBookings([[1,2,10],[2,3,20],[2,5,25]], 5)).toEqual([10,55,45,25,25]);
  })
  test('corpFlightBookings() should return [10,25] when the input is [[1,2,10],[2,2,15]], 2', () => {
    expect(corpFlightBookings([[1,2,10],[2,2,15]], 2)).toEqual([10,25]);
  })
})