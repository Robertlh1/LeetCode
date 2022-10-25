/*
Note: Runtime is highly variable between submissions and I don't have a premium subscription,
  which places me in a lower tier.
Runtime: 58 ms, faster than 97.38% of JavaScript online submissions for Check If Two String Arrays are Equivalent.
Memory Usage: 41.9 MB, less than 86.78% of JavaScript online submissions for Check If Two String Arrays are Equivalent.

Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise.

A string is represented by an array if the array elements concatenated in order forms the string.
*/

var arrayStringsAreEqual = function(word1, word2) {
  return word1.join('') === word2.join('') ? true : false
};

module.exports = arrayStringsAreEqual