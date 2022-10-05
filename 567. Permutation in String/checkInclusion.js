/*
Note: Runtime is highly variable between submissions and I don't have a premium subscription,
  which places me in a lower tier.
Runtime: 150 ms, faster than 57.84% of JavaScript online submissions for Permutation in String.
Memory Usage: 45.5 MB, less than 58.23% of JavaScript online submissions for Permutation in String.

Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

In other words, return true if one of s1's permutations is the substring of s2.
*/

var checkInclusion = function(s1, s2) {
  if (s1.length > s2.length) return false

  let left = 0
  let s1Memo = {}
  let requiredChars = s1.length

  for (let i = 0; i < s1.length; i++) {
    !s1Memo[s1[i]] ? s1Memo[s1[i]] = 1 : s1Memo[s1[i]] ++
  }

  for (let i = 0; i < s2.length; i++) {
    if (s1Memo[s2[i]] > 0) requiredChars --
    s1Memo[s2[i]] --

    if (requiredChars === 0) return true

    if (i >= s1.length - 1) {
      if (s1Memo[s2[left]] >= 0) requiredChars ++
      s1Memo[s2[left]] ++
      left ++
    }
  }

  return false
}

// // First attempt, passes tests however fails due to time out
// var checkInclusion = function(s1, s2) {
//   if (s1.length > s2.length) return false

//   let j = s1.length
//   let sorted = s1.split('').sort().join('')

//   for (let i = 0; i < s2.length; i++) {
//       let curr = s2.slice(i, j).split('').sort().join('')
//       if (sorted === curr) return true
//       j++
//   }

//   return false
// };

module.exports = checkInclusion