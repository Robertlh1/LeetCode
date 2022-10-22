/*
Note: Runtime is highly variable between submissions and I don't have a premium subscription,
  which places me in a lower tier.
Runtime: 73 ms, faster than 98.96% of JavaScript online submissions for Valid Anagram.
Memory Usage: 43.8 MB, less than 65.89% of JavaScript online submissions for Valid Anagram.

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
*/

var isAnagram = function(s, t) {
  if (s.length !== t.length) return false
  let letters = {}, count = s.length

  for (char of s) letters[char] ? letters[char] ++ : letters[char] = 1
  for (char of t) {
    if (letters[char] > 0) letters[char] --, count --
    else return false
  }

  return count === 0 ? true : false
};

module.exports = isAnagram