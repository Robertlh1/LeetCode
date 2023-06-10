/*
Note: Runtime is highly variable between submissions and I don't have a premium subscription,
  which places me in a lower tier.
Runtime 54 ms Beats 79.14%
Memory 41.9 MB Beats 54.88%

Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.

toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".
*/

var expectCustom = function(val) {
  toBe = function(otherVal) {
    if (val !== otherVal) throw new Error('Not Equal')
    return true
  }
  notToBe = function(otherVal) {
    if (val === otherVal) throw new Error('Equal')
    return true
  }

  return {
    toBe, notToBe
  }
};

module.exports = expectCustom