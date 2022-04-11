// Runtime: 119 ms, faster than 58.37% of JavaScript online submissions for Zigzag Conversion.
// Memory Usage: 48.5 MB, less than 47.67% of JavaScript online submissions for Zigzag Conversion.

var convert = function(s, numRows) {
  let arr = new Array(numRows).fill('')
  let result = ''

  while (s.length > 0) {
    for (let i = 0; i < numRows; i++) {
      if (s.length === 0) {
        break
      }
      arr[i] += s[0]
      s = s.slice(1)
    }
    for (let j = numRows - 2; j >= 1; j--) {
      if (s.length === 0) {
        break
      }
      arr[j] += s[0]
      s = s.slice(1)
    }
  }

  for (let k = 0; k < arr.length; k++) {
    result += arr[k]
  }

  return result
};

module.exports = convert