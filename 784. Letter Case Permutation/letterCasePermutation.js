/*
Note: Runtime is highly variable between submissions and I don't have a premium subscription,
  which places me in a lower tier.

  Given a string s, you can transform every letter individually to be lowercase or uppercase to create another string.

  Return a list of all possible strings we could create. Return the output in any order.
*/

/*
  Same idea as the last execution, but I trimmed the fat a lot, cutting out unneeded for loops etc
  Runtime: 71 ms, faster than 98.91% of JavaScript online submissions for Letter Case Permutation.
  Memory Usage: 44.7 MB, less than 81.22% of JavaScript online submissions for Letter Case Permutation.
*/

  var letterCasePermutation = function(s) {
    return stringMaster(s)
  };

  var stringMaster = function(s, i, result, currString) {
    i = i || 0
    result = result || []
    currString = currString || ''
    if (currString.length === s.length || i === s.length) return result.push(currString)

    if (isNaN(Number(s[i]))) {
      stringMaster(s, i + 1, result, currString + s[i].toUpperCase())
      stringMaster(s, i + 1, result, currString + s[i].toLowerCase())
    } else {
      stringMaster(s, i + 1, result, currString + s[i])
    }

    return result
  }

/*
  First solution, and not one I was satisfied with coming in at the slowest 5% of accepted solutions
  Runtime: 284 ms, faster than 5.18% of JavaScript online submissions for Letter Case Permutation.
  Memory Usage: 49.6 MB, less than 6.70% of JavaScript online submissions for Letter Case Permutation.

  var letterCasePermutation = function(s) {
    let letters = 0
    let numbers = 0

    for (let i = 0; i < s.length; i++) {
        if (isNaN(Number(s[i]))) {
          letters ++
        } else {
          numbers ++
        }
    }

    if (numbers === s.length) return [s]

    return stringMaster(s, letters)
  };

  var stringMaster = function(s, letters, i, result, currString) {
    i = i || 0
    result = result || []
    currString = currString || []
    if (currString.length === s.length) return result.push(currString.join(''))

    for (i; i < s.length; i++) {
      currString.push(s[i])
      stringMaster(s, letters, i + 1, result, currString)
      currString.pop()
      if (isNaN(Number(s[i]))) {
        currString.push(flipChar(s[i]))
        stringMaster(s, letters, i + 1, result, currString)
        currString.pop()
      }
    }

    return result
  }

  var flipChar = function(letter) {
    if (letter.toLowerCase() === letter) return letter.toUpperCase()
    return letter.toLowerCase()
  }
*/

module.exports = letterCasePermutation