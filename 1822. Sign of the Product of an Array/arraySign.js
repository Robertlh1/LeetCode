/*
Note: Runtime is highly variable between submissions and I don't have a premium subscription,
  which places me in a lower tier.
Runtime: 82 ms, faster than 78.45% of JavaScript online submissions for Sign of the Product of an Array.
Memory Usage: 43 MB, less than 65.01% of JavaScript online submissions for Sign of the Product of an Array.

There is a function signFunc(x) that returns:

1 if x is positive.
-1 if x is negative.
0 if x is equal to 0.
You are given an integer array nums. Let product be the product of all values in the array nums.

Return signFunc(product).
*/

var arraySign = function(nums) {
  let result = nums[0]
  for (let i = 1; i < nums.length; i++) result *= nums[i]

  return signFunc(result)
};

var signFunc = function(product) {
  if (product > 0) return 1
  if (product < 0) return -1
  return 0
}

module.exports = arraySign