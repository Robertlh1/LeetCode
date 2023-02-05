/*
Note: Runtime is highly variable between submissions and I don't have a premium subscription,
  which places me in a lower tier.
Runtime: 58 ms, faster than 87.58% of JavaScript online submissions for Defanging an IP Address.
Memory Usage: 42 MB, less than 39.25% of JavaScript online submissions for Defanging an IP Address.

Given a valid (IPv4) IP address, return a defanged version of that IP address.

A defanged IP address replaces every period "." with "[.]".
*/

var defangIPaddr = function(address) {
  let result = ''
  for (let i = 0; i < address.length; i++) {
      if (address[i] !== '.') result += address[i]
      else {
          result += '[.]'
      }
  }
  return result
};

module.exports = defangIPaddr