/*
Note: Runtime is highly variable between submissions and I don't have a premium subscription,
  which places me in a lower tier.
Runtime 60 ms Beats 89.29%
Memory 41.5 MB Beats 96.43%

You are given an array of distinct integers arr and an array of integer arrays pieces, where the integers in pieces are distinct. Your goal is to form arr by concatenating the arrays in pieces in any order. However, you are not allowed to reorder the integers in each array pieces[i].

Return true if it is possible to form the array arr from pieces. Otherwise, return false.
*/

var canFormArray = function(arr, pieces) {
  let i = 0

  while (pieces.length > 0) {
    let orig = pieces.length
    for (let j = 0; j < pieces.length; j++) {
      if (pieces[j][0] === arr[i]) {
        i++
        for (let k = 1; k < pieces[j].length; k++) {
          if (pieces[j][k] !== arr[i]) return false
          i++
        }
        pieces.splice(j, 1)
      }
    }
    if (pieces.length === orig) return false
  }

  return true
};

module.exports = canFormArray