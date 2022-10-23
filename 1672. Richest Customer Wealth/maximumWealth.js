/*
Note: Runtime is highly variable between submissions and I don't have a premium subscription,
  which places me in a lower tier.
Runtime: 71 ms, faster than 85.39% of JavaScript online submissions for Richest Customer Wealth.
Memory Usage: 41.9 MB, less than 83.23% of JavaScript online submissions for Richest Customer Wealth.

You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.

A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.
*/

var maximumWealth = function(accounts) {
  let max = -Infinity

  for (let i = 0; i < accounts.length; i++) {
      let customer = 0
      for (let j = 0; j < accounts[i].length; j++) {
          customer += accounts[i][j]
      }
      max = Math.max(max, customer)
  }

  return max
};

module.exports = maximumWealth