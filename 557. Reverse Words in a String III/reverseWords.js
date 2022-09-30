/*
Note: Runtime is highly variable between submissions and I don't have a premium subscription,
  which places me in a lower tier.
Runtime: 86 ms, faster than 88.14% of JavaScript online submissions for Reverse Words in a String III.
Memory Usage: 48 MB, less than 89.10% of JavaScript online submissions for Reverse Words in a String III.

Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.
*/

var reverseWords = function(s) {
  arr = s.split(' ')

  for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].split('').reverse().join('')
  }

  return arr.join(' ')
};

module.exports = reverseWords