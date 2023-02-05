/*
Note: Runtime is highly variable between submissions and I don't have a premium subscription,
  which places me in a lower tier.
Runtime 2187 ms Beats 15.38%
Memory 64.8 MB Beats29.23%

There are n flights that are labeled from 1 to n.

You are given an array of flight bookings bookings, where bookings[i] = [firsti, lasti, seatsi] represents a booking for flights firsti through lasti (inclusive) with seatsi seats reserved for each flight in the range.

Return an array answer of length n, where answer[i] is the total number of seats reserved for flight i.
*/

//[[1,2,10],[2,3,20],[2,5,25]], n = 5
var corpFlightBookings = function(bookings, n) {
  let result = new Array(n).fill(0)
  for (let i = 0; i < bookings.length; i++) {
    for (let j = bookings[i][0] - 1; j < bookings[i][1]; j++) {
      result[j] += bookings[i][2]
    }
  }

  return result
};

module.exports = corpFlightBookings