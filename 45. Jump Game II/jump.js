/*
Note: Runtime is highly variable between submissions and I don't have a premium subscription,
  which places me in a lower tier.
Runtime: 67 ms, faster than 96.79% of JavaScript online submissions for Jump Game II.
Memory Usage: 43.8 MB, less than 84.16% of JavaScript online submissions for Jump Game II.

You are given a 0-indexed array of integers nums of length n. You are initially positioned at nums[0].

Each element nums[i] represents the maximum length of a forward jump from index i. In other words, if you are at nums[i], you can jump to any nums[i + j] where:

0 <= j <= nums[i] and
i + j < n
Return the minimum number of jumps to reach nums[n - 1]. The test cases are generated such that you can reach nums[n - 1].
*/

var jump = function(nums) {
    let moveCount = 0, position = 0, maxMoves = nums[0]

    for (let i = 0; i < nums.length - 1; i++) {
      maxMoves = Math.max(maxMoves, i + nums[i])
      if (i === position) position = maxMoves, moveCount ++
    }

    return moveCount
};

module.exports = jump