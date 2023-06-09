/*
Note: Runtime is highly variable between submissions and I don't have a premium subscription,
  which places me in a lower tier.
Runtime 44 ms Beats 100%
Memory 42.2 MB Beats 62.16%

You are given an integer num. You can swap two digits at most once to get the maximum valued number.

Return the maximum valued number you can get.
*/

var maximumSwap = function(num) {
  let orig = JSON.stringify(num).split('')
  let highest = num

  for (let i = 0; i < orig.length; i++) {
    for (let j = i + 1; j < orig.length; j++) {
      copy = JSON.stringify(num).split('')
      copy[i] = copy[j], copy[j] = orig[i]
      let joined = copy.join('')
      if (joined > highest) highest = joined
    }
  }
  return Number(highest)
};

module.exports = maximumSwap