/*
Note: Runtime is highly variable between submissions and I don't have a premium subscription,
  which places me in a lower tier.
Runtime: 93 ms, faster than 77.95% of JavaScript online submissions for Best Sightseeing Pair.
Memory Usage: 46.2 MB, less than 100.00% of JavaScript online submissions for Best Sightseeing Pair.

Given an integer array nums sorted in non-decreasing order, return an array of the
squares of each number sorted in non-decreasing order.
*/

var maxScoreSightseeingPair = function(values) {
  let maxTwo = 0, maxOne = values[0]
  for (let i = 1; i < values.length; i++) {
    maxTwo = Math.max(maxTwo, maxOne + values[i] - i)
    maxOne = Math.max(maxOne, values[i] + i)
  }
  return maxTwo
};

console.log(maxScoreSightseeingPair([1,2,2]))
/*
My first solution using nested for loops was always going to be too slow, but surprisingly
it barely passed the tests.
Runtime: 10106 ms, faster than 5.51% of JavaScript online submissions for Best Sightseeing Pair.
Memory Usage: 46.5 MB, less than 91.34% of JavaScript online submissions for Best Sightseeing Pair.
*/
// var maxScoreSightseeingPair = function(values) {
//   let max = 0

//   for (let i = 0; i < values.length; i++) {
//       for (let j = i + 1; j < values.length; j++) {
//           let curr = values[i] + values[j] + i - j
//           max = Math.max(max, curr)
//       }
//   }

//   return max
// };

module.exports = maxScoreSightseeingPair