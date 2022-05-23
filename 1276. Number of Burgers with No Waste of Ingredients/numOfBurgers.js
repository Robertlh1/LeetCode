// Runtime: 176 ms, faster than 21.43% of JavaScript online submissions for Number of Burgers with No Waste of Ingredients.
// Memory Usage: 43.5 MB, less than 100.00% of JavaScript online submissions for Number of Burgers with No Waste of Ingredients.

var numOfBurgers = function(tomatoSlices, cheeseSlices) {
  console.log(15 % 5)
  let burgers = []
  burgers[0] = (tomatoSlices - cheeseSlices * 2) / 2;
  burgers[1] = cheeseSlices - burgers[0]
  if (burgers[0] >= 0 && burgers[0] <= cheeseSlices && burgers[0] % 1 === 0) {
    return burgers
  } else {
    return []
  }
}
// Initial solution
// Runtime: 5203 ms, faster than 7.14% of JavaScript online submissions for Number of Burgers with No Waste of Ingredients.
// Memory Usage: 44.8 MB, less than 10.71% of JavaScript online submissions for Number of Burgers with No Waste of Ingredients.

// var numOfBurgers = function(tomatoSlices, cheeseSlices) {
//   let burgers = [0, 0]
//   if (tomatoSlices % 2 !== 0) {
//     return []
//   }

//   while (tomatoSlices > 0 && cheeseSlices > 0) {
//     if (tomatoSlices / 2 > cheeseSlices) {
//       burgers[0] ++
//       cheeseSlices --
//       tomatoSlices -= 4
//     } else {
//       burgers[1] ++
//       cheeseSlices --
//       tomatoSlices -= 2
//     }
//   }

//   if (tomatoSlices === 0 && cheeseSlices === 0) {
//     return burgers
//   } else {
//     return []
//   }
// };

module.exports = numOfBurgers