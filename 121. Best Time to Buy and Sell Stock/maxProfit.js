/*
Note: Runtime is highly variable between submissions and I don't have a premium subscription,
  which places me in a lower tier.
Runtime: 88 ms, faster than 94.48% of JavaScript online submissions for Best Time to Buy and Sell Stock.
Memory Usage: 51.7 MB, less than 66.89% of JavaScript online submissions for Best Time to Buy and Sell Stock.

You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
*/

var maxProfit = function(prices) {
  let buy = 0
  let sell = 1
  let maxDiff = 0

  while (sell < prices.length) {
    let curDiff = prices[sell] - prices[buy]

    if (prices[sell] > prices[buy]) {
      if (curDiff > maxDiff) {
        maxDiff = curDiff
      }
    } else {
      buy = sell
    }

    sell ++
  }

  return maxDiff
}

module.exports = maxProfit