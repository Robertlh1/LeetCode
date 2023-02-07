/*
Note: Runtime is highly variable between submissions and I don't have a premium subscription,
  which places me in a lower tier.
Runtime 363 ms Beats 31.46%
Memory 64.3 MB Beats 9.33%

You are visiting a farm that has a single row of fruit trees arranged from left to right. The trees are represented by an integer array fruits where fruits[i] is the type of fruit the ith tree produces.

You want to collect as much fruit as possible. However, the owner has some strict rules that you must follow:

You only have two baskets, and each basket can only hold a single type of fruit. There is no limit on the amount of fruit each basket can hold.
Starting from any tree of your choice, you must pick exactly one fruit from every tree (including the start tree) while moving to the right. The picked fruits must fit in one of your baskets.
Once you reach a tree with fruit that cannot fit in your baskets, you must stop.
Given the integer array fruits, return the maximum number of fruits you can pick.
*/

var totalFruit = function(fruits, i) {
  let picked = 0, basket = {}, types = 0, positions = []
  i = i || 0
  j = i

  for (j; j < fruits.length; j++) {
    if (!basket[fruits[j]]) {
      if (types === 2) break
      basket[fruits[j]] = true
      types ++
      positions.push(j)
    }
    picked ++
  }

  if (i < fruits.length && picked < fruits.length - positions[1]) {
    picked = Math.max(picked, totalFruit(fruits, positions[1]))
  }

  return picked
};

module.exports = totalFruit