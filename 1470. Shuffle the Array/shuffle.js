/*
Note: Runtime is highly variable between submissions and I don't have a premium subscription,
  which places me in a lower tier.
Runtime 64 ms Beats 95.32%
Memory 44.5 MB Beats 46.56%

Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].

Return the array in the form [x1,y1,x2,y2,...,xn,yn].
*/

var shuffle = function(nums, n) {
  let result = []

  for (let i = 0; i < n; i++) {
    result.push(nums[i], nums[i + n])
  }

  return result
};

module.exports = shuffle