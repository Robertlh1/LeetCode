/*
Note: Runtime is highly variable between submissions and I don't have a premium subscription,
  which places me in a lower tier.
Runtime: 101 ms, faster than 60.44% of JavaScript online submissions for Longest Palindrome.
Memory Usage: 44.4 MB, less than 37.04% of JavaScript online submissions for Longest Palindrome.

Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

Letters are case sensitive, for example, "Aa" is not considered a palindrome here.
*/

var longestPalindrome = function(s) {
  let chars = {}
  let total = 0

  for (let i = 0; i < s.length; i++) {
      if (chars[s[i]] === undefined) {
          chars[s[i]] = 1
      } else {
          total += 2
          delete chars[s[i]]
      }
  }

  if (s.length > total) {
    total ++
  }

  return total
};

module.exports = longestPalindrome