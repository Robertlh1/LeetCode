// Runtime: 95 ms, faster than 92.37% of JavaScript online submissions for Longest Palindromic Substring.
// Memory Usage: 45.1 MB, less than 72.53% of JavaScript online submissions for Longest Palindromic Substring.

var longestPalindrome = function(s) {
  if (s === s.split('').reverse().join('')) {
    return s
  }
  let result = ''
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j <= 1; j++) {
      let left = i
      let right = i + j
      while (s[left] !== undefined && s[left] === s[right]) {
        left --
        right ++
      }
      if (right - left - 1 > result.length) {
        result = s.slice(left + 1, right)
      }
    }
  }
  return result
};

module.exports = longestPalindrome
console.log(longestPalindrome('babad'))