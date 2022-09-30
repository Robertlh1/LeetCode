/*
Note: Runtime is highly variable between submissions and I don't have a premium subscription,
  which places me in a lower tier.
Runtime: 94 ms, faster than 95.36% of JavaScript online submissions for Reverse String.
Memory Usage: 49 MB, less than 85.30% of JavaScript online submissions for Reverse String.

Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.
*/

var reverseString = function(s) {
  let j = s.length - 1
  let mid = Math.floor(s.length / 2)
  for (let i = 0; i < mid; i++) {
      let temp = s[j]
      s[j] = s[i]
      s[i] = temp
      j--
  }

  // This line is not necessary in LeetCode
  return s
};

module.exports = reverseString