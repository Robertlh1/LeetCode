/*
Note: Runtime is highly variable between submissions and I don't have a premium subscription,
  which places me in a lower tier.

Given a string s, return the string after replacing every uppercase letter with the same lowercase letter.
*/

/*
The do it yourself solution
Runtime: 61 ms, faster than 94.83% of JavaScript online submissions for To Lower Case.
Memory Usage: 42.2 MB, less than 40.26% of JavaScript online submissions for To Lower Case.
*/

var toLowerCase = function(s) {
  let result = ''

  for (char of s) {
    let curr = char.charCodeAt()
    if (curr >= 65 && curr <= 90) result += String.fromCharCode(curr + 32)
    else result += char
  }

  return result
};

/*
The obvious built in solution
Runtime: 62 ms, faster than 94.32% of JavaScript online submissions for To Lower Case.
Memory Usage: 41.1 MB, less than 99.59% of JavaScript online submissions for To Lower Case.
*/

// var toLowerCase = function(s) {
//   return s.toLowerCase()
// };

module.exports = toLowerCase