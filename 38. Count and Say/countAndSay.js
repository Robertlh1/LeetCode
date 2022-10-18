/*
Note: Runtime is highly variable between submissions and I don't have a premium subscription,
  which places me in a lower tier.
Runtime: 85 ms, faster than 81.16% of JavaScript online submissions for Count and Say.
Memory Usage: 44.2 MB, less than 75.59% of JavaScript online submissions for Count and Say.

The count-and-say sequence is a sequence of digit strings defined by the recursive formula:

countAndSay(1) = "1"
countAndSay(n) is the way you would "say" the digit string from countAndSay(n-1), which is then converted into a different digit string.
To determine how you "say" a digit string, split it into the minimal number of substrings such that each substring contains exactly one unique digit. Then for each substring, say the number of digits, then say the digit. Finally, concatenate every said digit.

For example, the saying and conversion for digit string "3322251":
*/

var countAndSay = function(n, result, m) {
  result = result || '', m = m || 1
  let count = 1, currResult = ''

  for (let i = 1; i <= result.length; i++) {
    let curr = Number(result[i])
    let prev = Number(result[i - 1])
    if (curr === prev) {
      count ++
    } else {
      currResult += `${count}${prev}`
      count = 1
    }
  }

  result = currResult
  if (m === 1) result = '1'
  if (m === n) return result
  return result = countAndSay(n, result, m + 1)
};

module.exports = countAndSay