// Runtime: 117 ms, faster than 44.06% of JavaScript online submissions for Palindromic Substrings.
// Memory Usage: 43.4 MB, less than 41.61% of JavaScript online submissions for Palindromic Substrings.

var countSubstrings = function(s) {
  let subStrings = 0;

  let checker = function(s, left, right) {
    while (left >= 0 && right <= s.length && s[left] === s[right]) {
      subStrings ++
      left --
      right ++
    }
  }

  for(let i = 0; i < s.length; i++){
    checker(s, i, i)
    checker(s, i, i + 1)
  }

  return subStrings
};

module.exports = countSubstrings
