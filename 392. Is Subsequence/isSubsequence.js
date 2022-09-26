/*
Note: Runtime is highly variable between submissions and I don't have a premium subscription,
  which places me in a lower tier.
Runtime: 74 ms, faster than 80.75% of JavaScript online submissions for Is Subsequence.
Memory Usage: 41.8 MB, less than 84.71% of JavaScript online submissions for Is Subsequence.

Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some
(can be none) of the characters without disturbing the relative positions of the remaining characters.
(i.e., "ace" is a subsequence of "abcde" while "aec" is not).
*/

var isSubsequence = function(s, t) {
  let sIndex = 0

  if (s.length === 0 && t.length === 0) {
      return true
  }

  for (let i = 0; i < t.length; i++) {
      if (t[i] === s[sIndex]) {
          sIndex ++
      }
      if (sIndex === s.length) {
          return true
      }
  }

  return false
};

console.log(isSubsequence('axc', 'ahbgdc'))
module.exports = isSubsequence