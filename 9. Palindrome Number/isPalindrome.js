// Runtime: 377 ms, faster than 12.30% of JavaScript online submissions for Palindrome Number.
// Memory Usage: 51.1 MB, less than 53.34% of JavaScript online submissions for Palindrome Number.

var isPalindrome = function(x) {
  return x === Number(JSON.stringify(x).split('').reverse().join('')) ? true : false
};

module.exports = isPalindrome