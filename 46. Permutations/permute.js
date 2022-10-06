/*
Note: Runtime is highly variable between submissions and I don't have a premium subscription,
  which places me in a lower tier.
Runtime: 104 ms, faster than 68.25% of JavaScript online submissions for Permutations.
Memory Usage: 44.7 MB, less than 74.81% of JavaScript online submissions for Permutations.

Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.
*/

var permute = function(nums) {
  let results = permuter(nums)
  return results
};

var permuter = function(nums, results, curr, inUse) {
  results = results || []
  curr = curr || []
  inUse = inUse || []

  if (curr.length === nums.length) return results.push([...curr])

  for (let i = 0; i < nums.length; i++) {
    if (!inUse[i]) {
      curr.push(nums[i])
      inUse[i] = true
      permuter(nums, results, curr, inUse)
      curr.pop()
      inUse[i] = undefined
    }
  }

  return results
}

// let combinations = function(n, k, i, result, combo) {
//   result = result || []
//   combo = combo || []

//   if (combo.length === k) return result.push([...combo])

//   for (i; i <= n; i++) {
//     combo.push(i)
//     combinations(n, k, i + 1, result, combo)
//     combo.pop()
//   }

//   return result
// }

module.exports = permute
console.log(JSON.stringify(permute([1,2,3])))