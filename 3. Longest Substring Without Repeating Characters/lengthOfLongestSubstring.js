// Runtime: 72 ms, faster than 99.22% of JavaScript online submissions for Longest Substring Without Repeating Characters.
// Memory Usage: 48 MB, less than 58.92% of JavaScript online submissions for Longest Substring Without Repeating Characters.

var lengthOfLongestSubstring = function(s) {
  if (s === undefined || s[0] === undefined) {
    return 0
  }
  let substring = s[0]
  let testString = ''
  for (let i = 0; i < s.length; i++) {
    if (testString.includes(s[i])) {
      testString = testString.slice(testString.indexOf(s[i]) + 1)
    }
    testString += s[i]
    if (testString.length > substring.length) {
      substring = testString
    }
  }
  return substring.length
};

module.exports = lengthOfLongestSubstring