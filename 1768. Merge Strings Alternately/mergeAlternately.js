/*
Note: Runtime is highly variable between submissions and I don't have a premium subscription,
  which places me in a lower tier.
Runtime: 68 ms, faster than 89.96% of JavaScript online submissions for Merge Strings Alternately.
Memory Usage: 42.4 MB, less than 51.35% of JavaScript online submissions for Merge Strings Alternately.

You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

Return the merged string.
*/

var mergeAlternately = function(word1, word2) {
  let result = '', char = 0, i = 0, j = 0

  for (char; char < word1.length + word2.length; char++) {
    if (char % 2 === 0 && word1[i]) result += word1[i], i++
    if (char % 2 === 1 && word2[j]) result += word2[j], j++
    if (i >= word1.length) return result += word2.slice(j)
    if (j >= word2.length) return result += word1.slice(i)
  }

  return result
};

module.exports = mergeAlternately