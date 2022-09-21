/*
Runtime: 166 ms, faster than 76.19% of JavaScript online submissions for Short Encoding of Words.
Memory Usage: 50.4 MB, less than 80.95% of JavaScript online submissions for Short Encoding of Words.
*/

var minimumLengthEncoding = function(words) {
  if (words.length === 1) {
    return words[0].length + 1
  }

  let sorted = words.map((word) => word.split('').reverse().join('')).sort()
  let total = ''
  for (let i = 1; i < sorted.length; i++) {
    let last = sorted[i - 1]
    if (sorted[i] !== last) {
      if (!sorted[i].startsWith(last)) {
        total += last + '#'
      }
    }
  }
  total += sorted[sorted.length - 1] + '#'
  return total.length
};

module.exports = minimumLengthEncoding