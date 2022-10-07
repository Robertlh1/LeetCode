/*
Note: Runtime is highly variable between submissions and I don't have a premium subscription,
  which places me in a lower tier.
Runtime: 94 ms, faster than 68.17% of JavaScript online submissions for Number of 1 Bits.
Memory Usage: 42.8 MB, less than 35.14% of JavaScript online submissions for Number of 1 Bits.

Write a function that takes an unsigned integer and returns the number of '1' bits it has (also known as the Hamming weight).

Note:

Note that in some languages, such as Java, there is no unsigned integer type. In this case, the input will be given as a signed integer type. It should not affect your implementation, as the integer's internal binary representation is the same, whether it is signed or unsigned.
In Java, the compiler represents the signed integers using 2's complement notation. Therefore, in Example 3, the input represents the signed integer. -3.
*/

var hammingWeight = function(n) {
  let result = 0
  let str = n.toString(2).split('')
  for (let i = 0; i < str.length; i++) {
      if (str[i] == 1) result ++
  }
  return result
};

module.exports = hammingWeight