// Runtime: 111 ms, faster than 14.29% of JavaScript online submissions for Latest Time by Replacing Hidden Digits.
// Memory Usage: 42.2 MB, less than 58.24% of JavaScript online submissions for Latest Time by Replacing Hidden Digits.

var maximumTime = function(time) {
  let trueTime = ''
  for (let i = 0; i < time.length; i++) {
    if (time[i] !== '?') {
      trueTime += time[i]
    } else {
      if (i === 0) {
        if (time[1] <= 3 || time[1] === '?') {
          trueTime += '2'
        } else {
          trueTime += '1'
        }
      }
      if (i === 1) {
        if (trueTime[0] === '2') {
          trueTime += '3'
        } else {
          trueTime += '9'
        }
      }
      if (i === 3) {
        trueTime += '5'
      }
      if (i === 4) {
        trueTime += '9'
      }
    }
  }
  return trueTime
};

console.log(maximumTime('??:??'))
module.exports = maximumTime