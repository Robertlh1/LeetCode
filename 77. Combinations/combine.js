/*
Note: Runtime is highly variable between submissions and I don't have a premium subscription,
  which places me in a lower tier.
Runtime: 111 ms, faster than 94.78% of JavaScript online submissions for Combinations.
Memory Usage: 46.5 MB, less than 98.35% of JavaScript online submissions for Combinations.

Given an integer array nums sorted in non-decreasing order, return an array of the
squares of each number sorted in non-decreasing order.
*/

// Create an array containing each number from 1 to k individually
// Then increment the final digit until reaching n
// Then proceed backwards through all possible numbers until all answers are met
var combine = function(n, k) {
  let result = combinations(n, k, 1)
  return result
};

let combinations = function(n, k, i, result, combo) {
  result = result || []
  combo = combo || []

  if (combo.length === k) return result.push([...combo])

  for (i; i <= n; i++) {
    combo.push(i)
    combinations(n, k, i + 1, result, combo)
    combo.pop()
  }

  return result
}

module.exports = combine