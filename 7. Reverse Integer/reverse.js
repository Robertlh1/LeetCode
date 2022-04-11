// Runtime: 101 ms, faster than 49.68% of JavaScript online submissions for Reverse Integer.
// Memory Usage: 44.4 MB, less than 25.18% of JavaScript online submissions for Reverse Integer.

var reverse = function(x) {
  let reverse = ''
  let num = JSON.stringify(x)
  for (let i = num.length - 1; i >= 0; i--) {
    if (i === 0 && num[i] === '0') {
      break
    } else if (i === 0 && num[i] === '-') {
      reverse = num[i] + reverse
    } else {
      reverse += num[i]
    }
  }
  reverse = Number(reverse)
  if (reverse < Math.pow(-2, 31) || reverse > Math.pow(2, 31)) {
    return 0
  }
  return reverse
};

module.exports = reverse
console.log(reverse(-123))