/*
Note: Runtime is highly variable between submissions and I don't have a premium subscription,
  which places me in a lower tier.
Runtime 54 ms Beats 94.29%
Memory 42.6 MB Beats 88.57%

You are given a 0-indexed integer array nums whose length is a power of 2.

Apply the following algorithm on nums:

Let n be the length of nums. If n == 1, end the process. Otherwise, create a new 0-indexed integer array newNums of length n / 2.
For every even index i where 0 <= i < n / 2, assign the value of newNums[i] as min(nums[2 * i], nums[2 * i + 1]).
For every odd index i where 0 <= i < n / 2, assign the value of newNums[i] as max(nums[2 * i], nums[2 * i + 1]).
Replace the array nums with newNums.
Repeat the entire process starting from step 1.
Return the last number that remains in nums after applying the algorithm.
*/

var minMaxGame = function(nums) {
  let n = nums.length
  while (n > 1) {
    let newNums = new Array(n / 2)
      for (let i = 0; i < newNums.length; i++) {
          if (i % 2 === 0 && (0 <= (i < n/2))) {
              newNums[i] = Math.min(nums[2 * i], nums[2 * i + 1])
          }
          if (i % 2 === 1 && (0 <= (i < n/2))) {
              newNums[i] = Math.max(nums[2 * i], nums[2 * i + 1])
          }
      }
      nums = newNums
      n = nums.length
  }
  return nums[0]
};

module.exports = minMaxGame