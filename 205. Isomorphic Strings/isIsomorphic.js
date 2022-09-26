/*
Note: Runtime is highly variable between submissions and I don't have a premium subscription,
  which places me in a lower tier.
Runtime: 75 ms, faster than 95.82% of JavaScript online submissions for Isomorphic Strings.
Memory Usage: 42.9 MB, less than 66.27% of JavaScript online submissions for Isomorphic Strings.

Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.
*/

var isIsomorphic = function(s, t) {
  // Keep separate memos for each word
  let memos = {}
  let memot = {}

  // Iterate through the words, as both have the same length
  for (let i = 0; i < s.length; i++) {
    // If we encounter a new letter in word 's', log it's counterpart in word 't' in the memo
    if (memos[s[i]] === undefined) {
      memos[s[i]] = t[i]
    }
    // If we encounter a new letter in word 't', log it's counterpart in word 's' in the memo
    if (memot[t[i]] === undefined) {
      memot[t[i]] = s[i]
    }
    // If we encounter a known letter in either word, compare it to its previous counterpart
    if (memos[s[i]] !== t[i] || memot[t[i]] !== s[i]) {
      // If it doesn't match, return false
      return false
    }
  }

  // If we managed to get through both words, return true
  return true
};

module.exports = isIsomorphic