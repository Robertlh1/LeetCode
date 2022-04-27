// Runtime: 284 ms, faster than 76.06% of JavaScript online submissions for Non-overlapping Intervals.
// Memory Usage: 74.8 MB, less than 56.27% of JavaScript online submissions for Non-overlapping Intervals.

var eraseOverlapIntervals = function(intervals) {
  let sorted = intervals.sort((a, b) => a[1] - b[1])
  let deleted = 0
  let current = sorted[0][1]

  for (let i = 1; i < sorted.length; i++) {
    if (current <= sorted[i][0]) {
      current = sorted[i][1]
    } else {
      deleted ++
    }
  }

  return deleted
};

module.exports = eraseOverlapIntervals