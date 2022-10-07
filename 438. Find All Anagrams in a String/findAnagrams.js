/*
Note: Runtime is highly variable between submissions and I don't have a premium subscription,
  which places me in a lower tier.
Runtime: 95 ms, faster than 98.46% of JavaScript online submissions for Find All Anagrams in a String.
Memory Usage: 46.5 MB, less than 62.87% of JavaScript online submissions for Find All Anagrams in a String.

Given two strings s and p, return an array of all the start indices of p's anagrams in s. You may return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
*/

var findAnagrams = function(s, p) {
  let results = []
  let letters = {}
  let left = 0
  let currCount = p.length

  for (let i = 0; i < p.length; i++) {
      letters[p[i]] ? letters[p[i]] ++ : letters[p[i]] = 1
  }

  debugger
  for (let i = 0; i < s.length; i++) {
    if (letters[s[i]] !== undefined) {
      if (letters[s[i]] > 0) currCount --
      letters[s[i]] --
    }

    if (currCount === 0) results.push(left)
    if (i >= p.length - 1) {
      if (letters[s[left]] !== undefined) {
        if (letters[s[left]] >= 0) currCount ++
        letters[s[left]] ++
      }
      left ++
    }
  }

  return results
};

module.exports = findAnagrams
console.log(findAnagrams('bpaa', 'aa'))