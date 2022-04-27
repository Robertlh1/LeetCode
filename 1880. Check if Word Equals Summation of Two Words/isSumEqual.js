// Runtime: 75 ms, faster than 58.82% of JavaScript online submissions for Check if Word Equals Summation of Two Words.
// Memory Usage: 42 MB, less than 71.32% of JavaScript online submissions for Check if Word Equals Summation of Two Words.

var isSumEqual = function(firstWord, secondWord, targetWord) {
  var alphabet = {
    a: 0, b: 1, c: 2, d: 3, e: 4, f: 5, g: 6, h: 7, i: 8, j: 9
  }

  let valOne = ''
  let valTwo = ''
  let valTarg = ''

  for (let i = 0; i < firstWord.length; i++) {
    valOne += alphabet[firstWord[i]]
  }
  for (let j = 0; j < secondWord.length; j++) {
    valTwo += alphabet[secondWord[j]]
  }
  for (let k = 0; k < targetWord.length; k++) {
    valTarg += alphabet[targetWord[k]]
  }

  debugger;

  if (Number(valOne) + Number(valTwo) === Number(valTarg)) {
    return true
  }
  return false
};

module.exports = isSumEqual