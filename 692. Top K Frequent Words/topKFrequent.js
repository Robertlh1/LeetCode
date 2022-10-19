/*
Note: Runtime is highly variable between submissions and I don't have a premium subscription,
  which places me in a lower tier.
Runtime: 97 ms, faster than 82.96% of JavaScript online submissions for Top K Frequent Words.
Memory Usage: 45 MB, less than 69.91% of JavaScript online submissions for Top K Frequent Words.

Given an array of strings words and an integer k, return the k most frequent strings.

Return the answer sorted by the frequency from highest to lowest. Sort the words with the same frequency by their lexicographical order.
*/

var topKFrequent = function(words, k) {
  let count = {}
  words.map((word) => count[word] ? count[word] ++ : count[word] = 1)

  console.log(count)
  return Object.keys(count).sort((a, b) => {
      return count[b] === count[a] ? a > b ? 1 : -1 : count[b] - count[a]
  }).slice(0, k)
};

module.exports = topKFrequent