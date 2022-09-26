/*
Note: Runtime is highly variable between submissions and I don't have a premium subscription,
  which places me in a lower tier.
Runtime: 54 ms, faster than 99.71% of JavaScript online submissions for Min Cost Climbing Stairs.
Memory Usage: 42.2 MB, less than 94.38% of JavaScript online submissions for Min Cost Climbing Stairs.

You are given an integer array cost where cost[i] is the cost of ith step on a staircase.
Once you pay the cost, you can either climb one or two steps.

You can either start from the step with index 0, or the step with index 1.

Return the minimum cost to reach the top of the floor.
*/

// Can start at either index 0 or 1
// Can move either 1 or 2 indexes
// Perform every possible move and take the smallest curCost
var minCostClimbingStairs = function(cost) {
  let oneStep = cost[0]
  let twoStep = cost[1]

  for (let i = 2; i < cost.length; i++) {
    if (i % 2 === 0) {
      oneStep = Math.min(oneStep + cost[i], twoStep + cost[i])
    } else {
      twoStep = Math.min(oneStep + cost[i], twoStep + cost[i])
    }
  }

  return Math.min(oneStep, twoStep)
};

console.log(minCostClimbingStairs([1,100,1,1,1,100,1,1,100,1]))
module.exports = minCostClimbingStairs