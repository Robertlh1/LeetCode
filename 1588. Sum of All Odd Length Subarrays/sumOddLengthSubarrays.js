/*
Note: Runtime is highly variable between submissions and I don't have a premium subscription,
  which places me in a lower tier.
Runtime: 63 ms, faster than 96.83% of JavaScript online submissions for Sum of All Odd Length Subarrays.
Memory Usage: 41.8 MB, less than 86.96% of JavaScript online submissions for Sum of All Odd Length Subarrays.

Given an array of positive integers arr, return the sum of all possible odd-length subarrays of arr.

A subarray is a contiguous subsequence of the array.
*/

var sumOddLengthSubarrays = function(arr) {
  let sum = 0, k = 1

  for (let i = 0; i < arr.length; i++) {
    while (i + k <= arr.length) {
      for (let j = i; j < i + k; j ++) {
        sum += arr[j]
      }
      k += 2
    }
    k = 1
  }

  return sum
};

module.exports = sumOddLengthSubarrays