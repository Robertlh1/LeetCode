/*
Note: Runtime is highly variable between submissions and I don't have a premium subscription,
  which places me in a lower tier.
Runtime: 73 ms, faster than 92.59% of JavaScript online submissions for Find the Difference.
Memory Usage: 44.1 MB, less than 57.32% of JavaScript online submissions for Find the Difference.

You are given two strings s and t.

String t is generated by random shuffling string s and then add one more letter at a random position.

Return the letter that was added to t.
*/

var findTheDifference = function(s, t) {
  let letters = {}
  for (a of s) letters[a] ? letters[a] ++ : letters[a] = 1
  for (b of t) {
    if (letters[b] > 0) letters[b] --
    else return b
  }
};

module.exports = findTheDifference