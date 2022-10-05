/*
Note: Runtime is highly variable between submissions and I don't have a premium subscription,
  which places me in a lower tier.
Runtime: 110 ms, faster than 65.01% of JavaScript online submissions for Delete and Earn.
Memory Usage: 45.2 MB, less than 70.97% of JavaScript online submissions for Delete and Earn.

You are given an integer array nums. You want to maximize the number of points you get by performing the following operation any number of times:

Pick any nums[i] and delete it to earn nums[i] points. Afterwards, you must delete every element equal to nums[i] - 1 and every element equal to nums[i] + 1.
Return the maximum number of points you can earn by applying the above operation some number of times.
*/

var deleteAndEarn = function(nums) {
  let values = new Array(Math.max(...nums) + 1).fill(0)
  for (let val of nums) values[val] += val

  for (var i = 2; i < values.length; i++) {
    let currVal = values[i] + values[i - 2]
    let prevVal = Math.max(values[i - 1], values[i - 2])
    values[i - 1] = prevVal
    values[i] = currVal
  }

  return Math.max(values[i - 1], values[i - 2])
};

module.exports = deleteAndEarn
console.log(deleteAndEarn([1,6,3,3,8,4,8,10,1,3]))