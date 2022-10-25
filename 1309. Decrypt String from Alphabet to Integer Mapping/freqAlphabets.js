/*
Note: Runtime is highly variable between submissions and I don't have a premium subscription,
  which places me in a lower tier.

You are given a string s formed by digits and '#'. We want to map s to English lowercase characters as follows:

Characters ('a' to 'i') are represented by ('1' to '9') respectively.
Characters ('j' to 'z') are represented by ('10#' to '26#') respectively.
Return the string formed after mapping.

The test cases are generated so that a unique mapping will always exist.
*/

/*
My second attempt runs significantly faster by using an object as a prebuilt index of letters
  and simply references it for each addition
Runtime: 58 ms, faster than 97.51% of JavaScript online submissions for Decrypt String from Alphabet to Integer Mapping.
Memory Usage: 41.9 MB, less than 88.79% of JavaScript online submissions for Decrypt String from Alphabet to Integer Mapping.
*/

var freqAlphabets = function(s) {
  let result = '', rosettaStone = {
    1:'a', 2:'b', 3:'c', 4:'d', 5:'e', 6:'f', 7:'g', 8:'h', 9:'i',10:'j',
   11:'k',12:'l',13:'m',14:'n',15:'o',16:'p',17:'q',18:'r',19:'s',20:'t',
   21:'u',22:'v',23:'w',24:'x',25:'y',26:'z'
  }

  for (let i = 0; i < s.length; i++) {
    if (s[i + 2] === '#') {result += rosettaStone[s.slice(i, i + 2)]; i += 2}
    else result += rosettaStone[s[i]]
  }

  return result
};

/*
First attempt utilizes the char codes built into javascript, however this requires slicing
  a string, converting it to a number, then adding that plus 96 to get our char code and
  then using that code to generate a letter. Still in the top 89% but quite a few steps.

Runtime: 67 ms, faster than 89.72% of JavaScript online submissions for Decrypt String from Alphabet to Integer Mapping.
Memory Usage: 41.1 MB, less than 99.69% of JavaScript online submissions for Decrypt String from Alphabet to Integer Mapping.
*/

// var freqAlphabets = function(s) {
//   let result = ''

//   for (let i = 0; i < s.length; i++) {
//     if (s[i + 2] === '#') {result += String.fromCharCode(Number(s.slice(i, i + 2)) + 96); i += 2}
//     else result += String.fromCharCode(Number(s[i]) + 96)
//   }

//   return result
// };

module.exports = freqAlphabets