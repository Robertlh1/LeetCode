/*
Note: Runtime is highly variable between submissions and I don't have a premium subscription,
  which places me in a lower tier.

For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9.
X can be placed before L (50) and C (100) to make 40 and 90.
C can be placed before D (500) and M (1000) to make 400 and 900.
Given an integer, convert it to a roman numeral.
*/

/*
I solved this prompt in two different ways, the first is a more compact solution using arrays of roman and arabic numerals,
while I feel the main benefit of the second method is that its clean and extremely easy to read, even for a laymen.

Runtime: 119 ms, faster than 97.75% of JavaScript online submissions for Integer to Roman.
Memory Usage: 46.6 MB, less than 94.35% of JavaScript online submissions for Integer to Roman.
*/
var intToRoman = function(num) {
  let arabic = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
  let roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
  let result = ''

  for (let i = 0; i < arabic.length; i++) {
    while (num >= arabic[i]) {
      result += roman[i]
      num -= arabic[i]
    }
  }

  return result
}

/*
Runtime: 177 ms, faster than 79.21% of JavaScript online submissions for Integer to Roman.
Memory Usage: 46.7 MB, less than 92.33% of JavaScript online submissions for Integer to Roman.
var intToRoman = function(num) {
  let result = ''

  while (num >= 1000) result += 'M', num -= 1000
  if (num >= 900) result += 'CM', num -= 900
  while (num >= 500) result += 'D', num -= 500
  if (num >= 400) result += 'CD', num -= 400
  while (num >= 100) result += 'C', num -= 100
  if (num >= 90) result += 'XC', num -= 90
  while (num >= 50) result += 'L', num -= 50
  if (num >= 40) result += 'XL', num -= 40
  while (num >= 10) result += 'X', num -= 10
  if (num === 9) result += 'IX', num -= 9
  if (num >= 5) result += 'V', num -= 5
  if (num === 4) result += 'IV', num -= 4
  while (num < 4 && num > 0) result += 'I', num --

  return result
};
*/

module.exports = intToRoman