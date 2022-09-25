/*
Note: Runtime is highly variable between submissions and I don't have a premium subscription,
  which places me in a lower tier.
Runtime: 85 ms, faster than 60.06% of JavaScript online submissions for First Bad Version.
Memory Usage: 41.5 MB, less than 92.45% of JavaScript online submissions for First Bad Version.
*/

var solution = function(isBadVersion) {
  return function(n) {
      let start = 1
      let end = n

      while (start < end) {
          let mid = start + Math.floor((end - start) / 2)

          if (isBadVersion(mid)) {
              end = mid
          } else {
              start = mid + 1
          }
      }

      return start
  };
};