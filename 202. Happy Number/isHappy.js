/*
Note: Runtime is highly variable between submissions and I don't have a premium subscription,
  which places me in a lower tier.
Runtime: 68 ms, faster than 94.81% of JavaScript online submissions for Happy Number.
Memory Usage: 43.7 MB, less than 61.91% of JavaScript online submissions for Happy Number.

Write an algorithm to determine if a number n is happy.

A happy number is a number defined by the following process:

Starting with any positive integer, replace the number by the sum of the squares of its digits.
Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
Those numbers for which this process ends in 1 are happy.
Return true if n is a happy number, and false if not.
*/

var isHappy = function(n) {
  let loop = {}, nums = JSON.stringify(n), end = false

  while (!end) {
    let newNum = 0
    for (currNum of nums) newNum += Number(currNum) ** 2
    nums = JSON.stringify(newNum)
    !loop[nums] ? loop[nums] = true : end = true
    if (nums === '100' || nums === '1') return true
  }

  return false
};

module.exports = isHappy