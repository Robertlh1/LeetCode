/*
Note: Runtime is highly variable between submissions and I don't have a premium subscription,
  which places me in a lower tier.
Runtime: 76 ms, faster than 81.68% of JavaScript online submissions for Check if One String Swap Can Make Strings Equal.
Memory Usage: 45.6 MB, less than 12.72% of JavaScript online submissions for Check if One String Swap Can Make Strings Equal.

You are given two strings s1 and s2 of equal length. A string swap is an operation where you choose two indices in a string (not necessarily different) and swap the characters at these indices.

Return true if it is possible to make both strings equal by performing at most one string swap on exactly one of the strings. Otherwise, return false.
*/

var areAlmostEqual = function(s1, s2) {
  let diff = 0, memo = {}
  for (letter of s1) memo[letter] ? memo[letter] ++ : memo[letter] = 1

  for (let i = 0; i < s2.length; i++) {
    if (s2[i] !== s1[i]) diff ++
    if (!memo[s2[i]] || diff > 2) return false
    memo[s2[i]] --
    if (memo[s2[i]] === 0) delete memo[s2[i]]
  }

  return diff !== 1
};

console.log(areAlmostEqual('bank', 'kanb'))

module.exports = areAlmostEqual