/*
Note: Runtime is highly variable between submissions and I don't have a premium subscription,
  which places me in a lower tier.
Runtime: 100 ms, faster than 80.94% of JavaScript online submissions for Jump Game.
Memory Usage: 46.6 MB, less than 45.32% of JavaScript online submissions for Jump Game.

You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

Return true if you can reach the last index, or false otherwise.
*/

/*
Decided to try to solve it through reverse traversal while incrementing a move counter
For each move, the counter increases by one. If nums[i] can cover the moves made so far, we reset the counter to 0
If we reach the end with more than one move, we return false
*/

var canJump = function(nums) {
  let movesMade = 1

  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] >= movesMade) movesMade = 0
    movesMade ++
  }

  if (movesMade < 2) return true
  return false
}

module.exports = canJump

/*
// First attempt used recursion, and passed all tests until failing due to time limit
var canJump = function(nums) {
  result = traverse(nums, 0, {reachedEnd: false})
  return result
}

var traverse = function(nums, i, checked) {
  debugger
  if (i + nums[i] >= nums.length - 1) return true
  for (let j = i + 1; j <= (i + nums[i]); j++) {
    if (nums[j] === 0) continue
    if (!checked[j]) {
      checked[j] = true
      if (traverse(nums, j, checked)) return true
    }
  }
  return false
}
*/