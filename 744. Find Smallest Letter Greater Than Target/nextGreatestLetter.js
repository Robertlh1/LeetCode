/*
Note: Runtime is highly variable between submissions and I don't have a premium subscription,
  which places me in a lower tier.
Runtime 51 ms Beats 98.95%
Memory 42.1 MB Beats 62.11%

You are given an array of characters letters that is sorted in non-decreasing order, and a character target. There are at least two different characters in letters.

Return the smallest character in letters that is lexicographically greater than target. If such a character does not exist, return the first character in letters.
*/

var nextGreatestLetter = function(letters, target) {
  let fallback = letters[0]
  let result = ''
  for (let i = 0; i < letters.length; i++) {
      if (letters[i] > target && result.length === 0) result = letters[i]
  }

  return result.length === 0 ? fallback : result
};

module.exports = nextGreatestLetter