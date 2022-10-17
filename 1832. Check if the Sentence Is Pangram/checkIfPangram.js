/*
Note: Runtime is highly variable between submissions and I don't have a premium subscription,
  which places me in a lower tier.
Runtime: 81 ms, faster than 79.37% of JavaScript online submissions for Check if the Sentence Is Pangram.
Memory Usage: 42.9 MB, less than 53.44% of JavaScript online submissions for Check if the Sentence Is Pangram.

A pangram is a sentence where every letter of the English alphabet appears at least once.

Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.
*/

var checkIfPangram = function(sentence) {
  if (sentence.length < 26) return false
  let letters = {}
  let count = 0

  for (let i = 0; i < sentence.length; i++) {
      if (!letters[sentence[i]]) letters[sentence[i]] = true, count ++
  }

  if (count === 26) return true
  return false
};

module.exports = checkIfPangram