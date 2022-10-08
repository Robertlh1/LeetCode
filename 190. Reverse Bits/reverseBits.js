/*
Note: Runtime is highly variable between submissions and I don't have a premium subscription,
  which places me in a lower tier.
Runtime: 101 ms, faster than 64.07% of JavaScript online submissions for Reverse Bits.
Memory Usage: 44.4 MB, less than 29.07% of JavaScript online submissions for Reverse Bits.

Reverse bits of a given 32 bits unsigned integer.

Note:

Note that in some languages, such as Java, there is no unsigned integer type. In this case, both input and output will be given as a signed integer type. They should not affect your implementation, as the integer's internal binary representation is the same, whether it is signed or unsigned.
In Java, the compiler represents the signed integers using 2's complement notation. Therefore, in Example 2 above, the input represents the signed integer -3 and the output represents the signed integer -1073741825.
*/

var reverseBits = function(n) {
  return parseInt(n.toString(2).padStart(32, 0).split('').reverse().join(''), 2)
};

module.exports = reverseBits