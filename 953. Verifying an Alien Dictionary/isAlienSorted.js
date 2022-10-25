/*
Note: Runtime is highly variable between submissions and I don't have a premium subscription,
  which places me in a lower tier.
Runtime: 74 ms, faster than 88.96% of JavaScript online submissions for Verifying an Alien Dictionary.
Memory Usage: 44.1 MB, less than 34.23% of JavaScript online submissions for Verifying an Alien Dictionary.

In an alien language, surprisingly, they also use English lowercase letters, but possibly in a different order. The order of the alphabet is some permutation of lowercase letters.

Given a sequence of words written in the alien language, and the order of the alphabet, return true if and only if the given words are sorted lexicographically in this alien language.
*/

var isAlienSorted = function(words, order) {
  let list = {}, k = 0, longest = 0

  for (let i = 0; i < order.length; i++) {
    list[order[i]] = i + 1
  }

  for (word of words) longest = Math.max(longest, word.length)

  for (let i = 1; i < words.length; i++) {
    let prev = words[i - 1], curr = words[i]
    debugger
    if (list[prev[0]] > list[curr[0]]) return false
    if (list[prev[0]] === list[curr[0]]) {
      for (let j = 0; j < words[i].length; j++) {
        if (list[prev[j]] > list[curr[j]]) return false
        if (list[prev[j]] < list[curr[j]]) break
        if (prev[j + 1] && !curr[j + 1]) return false
      }
    }
  }
  return true
};

console.log(isAlienSorted(["aa","a"], "abqwertyuioplkjhgfdszxcvnm"))
module.exports = isAlienSorted