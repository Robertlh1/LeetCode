/*
Note: Runtime is highly variable between submissions and I don't have a premium subscription,
  which places me in a lower tier.
Runtime: 88 ms, faster than 94.58% of JavaScript online submissions for Ransom Note.
Memory Usage: 44.8 MB, less than 64.24% of JavaScript online submissions for Ransom Note.

Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.
*/

var canConstruct = function(ransomNote, magazine) {
  if (ransomNote.length > magazine.length) return false
  let letters = {}, remain = ransomNote.length

  for (i of ransomNote) letters[i] ? letters[i] ++ : letters[i] = 1
  for (j of magazine) {
    if (letters[j] > 0) remain --; letters[j] --
    if (remain === 0) return true
  }

  return false
};

module.exports = canConstruct