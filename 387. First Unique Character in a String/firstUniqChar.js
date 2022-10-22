/*
Note: Runtime is highly variable between submissions and I don't have a premium subscription,
  which places me in a lower tier.
Runtime: 143 ms, faster than 74.47% of JavaScript online submissions for First Unique Character in a String.
Memory Usage: 44.7 MB, less than 91.91% of JavaScript online submissions for First Unique Character in a String.

Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.
*/

var firstUniqChar = function(s) {
  for (let i = 0; i < s.length; i++) if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) return i
  return -1
};

module.exports = firstUniqChar