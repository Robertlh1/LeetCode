/*
Note: Runtime is highly variable between submissions and I don't have a premium subscription,
  which places me in a lower tier.
Runtime: 85 ms, faster than 68.22% of JavaScript online submissions for Goal Parser Interpretation.
Memory Usage: 41.9 MB, less than 76.77% of JavaScript online submissions for Goal Parser Interpretation.

You own a Goal Parser that can interpret a string command. The command consists of an alphabet of "G", "()" and/or "(al)" in some order. The Goal Parser will interpret "G" as the string "G", "()" as the string "o", and "(al)" as the string "al". The interpreted strings are then concatenated in the original order.

Given the string command, return the Goal Parser's interpretation of command.
*/

var interpret = function(command) {
  let result = ''

  for (let i = 0; i < command.length; i++) {
    if (command[i] === 'G') {result += 'G'; continue}
    if (command[i] === '(' && command[i + 1] === 'a') {result += 'al'; i += 3; continue}
    else result += 'o', i += 1
  }

  return result
};

console.log(interpret('(al)G(al)()()G'))
module.exports = interpret