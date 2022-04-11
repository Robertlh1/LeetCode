// Runtime: 83 ms, faster than 82.02% of JavaScript online submissions for String to Integer (atoi).
// Memory Usage: 45.5 MB, less than 23.50% of JavaScript online submissions for String to Integer (atoi).

var myAtoi = function(s) {
  let num = ''

  while (s[0] === ' ') {
    s = s.slice(1)
  }

  debugger;
  for (let i = 0; i < s.length; i++) {
    if (s[0] === '-' && i === 0 || s[0] === '+' && i === 0) {
      num += s[0]
      i++
    }
    if (s[i] !== ' ' && !isNaN(Number(s[i]))) {
      num += s[i]
    } else {
      break
    }
  }


  num = Number(num)
  let min = Math.pow(-2, 31)
  let max = Math.pow(2, 31) - 1
  if (num < min) {
    return min
  }
  if (num > max) {
    return max
  }
  if (isNaN(num) || num.length === 0) {
    return 0
  }
  return num
};

module.exports = myAtoi