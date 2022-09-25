/*
Note: Runtime is highly variable between submissions and I don't have a premium subscription,
  which places me in a lower tier.
Runtime: 60 ms, faster than 93.74% of JavaScript online submissions for N-th Tribonacci Number.
Memory Usage: 41.8 MB, less than 67.68% of JavaScript online submissions for N-th Tribonacci Number.
*/

// Second attempt, refactored into a recursive solution with memoization
let memoPad = [0, 1, 1]
var tribonacci = function(n) {
  if (memoPad[n] !== undefined || n >= 0 && n <= 2) {
    return memoPad[n]
  }

  memoPad[n] = tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3)
  return memoPad[n]
}

/*
Note: Runtime is highly variable between submissions and I don't have a premium subscription,
  which places me in a lower tier.
Runtime: 74 ms, faster than 73.79% of JavaScript online submissions for N-th Tribonacci Number.
Memory Usage: 41.7 MB, less than 67.68% of JavaScript online submissions for N-th Tribonacci Number.
*/

// First attempt, used a while loop and iterated through the sequence
// var tribonacci = function(n) {
//   let temp = 0
//   let one = 0
//   let two = 0
//   let three = 1

//   while (n > 1) {
//     temp = one + two + three
//     one = two
//     two = three
//     three = temp
//     n--
//   }

//   return n === 0 ? 0 : three
// };

module.exports = tribonacci