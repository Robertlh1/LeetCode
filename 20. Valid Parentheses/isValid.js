/*
Note: Runtime is highly variable between submissions and I don't have a premium subscription,
  which places me in a lower tier.
Runtime: 62 ms, faster than 97.93% of JavaScript online submissions for Valid Parentheses.
Memory Usage: 43.1 MB, less than 24.20% of JavaScript online submissions for Valid Parentheses.

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
*/

var isValid = function(s) {
  let stack = [], openers = {'(':1,'[':1,'{':1}, closers = {')':'(',']':'[','}':'{'}

  for (let i = 0; i < s.length; i++) {
    if (openers[s[i]]) stack.push(s[i])
    else if (closers[s[i]] && stack[stack.length - 1] === closers[s[i]]) stack.pop()
    else return false
  }

  return stack.length === 0
};

module.exports = isValid