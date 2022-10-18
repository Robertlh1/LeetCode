/*
Note: Runtime is highly variable between submissions and I don't have a premium subscription,
  which places me in a lower tier.
Runtime: 59 ms, faster than 97.08% of JavaScript online submissions for Subtract the Product and Sum of Digits of an Integer.
Memory Usage: 42.2 MB, less than 49.70% of JavaScript online submissions for Subtract the Product and Sum of Digits of an Integer.

Given an integer number n, return the difference between the product of its digits and the sum of its digits.
*/

var subtractProductAndSum = function(n) {
  let num = JSON.stringify(n).split(''), sum = Number(num[0]), product = sum

  for (let i = 1; i < num.length; i++) {
      product *= Number(num[i])
      sum += Number(num[i])
  }

  return product - sum
};

module.exports = subtractProductAndSum