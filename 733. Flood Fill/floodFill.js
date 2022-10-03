/*
Note: Runtime is highly variable between submissions and I don't have a premium subscription,
  which places me in a lower tier.
Runtime: 109 ms, faster than 61.88% of JavaScript online submissions for Flood Fill.
Memory Usage: 43.8 MB, less than 93.28% of JavaScript online submissions for Flood Fill.

An image is represented by an m x n integer grid image where image[i][j] represents the pixel value of the image.

You are also given three integers sr, sc, and color. You should perform a flood fill on the image starting from the pixel image[sr][sc].

To perform a flood fill, consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color), and so on. Replace the color of all of the aforementioned pixels with color.

Return the modified image after performing the flood fill.
*/

var floodFill = function(image, sr, sc, color) {
  let init = image[sr][sc]
  let up = sr - 1
  let down = sr + 1
  let left = sc - 1
  let right = sc + 1


  if (image[sr][sc] === color) {
      return image
  } else {
      image[sr][sc] = color
  }

  if (image[up] && image[up][sc] === init) {
      image = floodFill(image, up, sc, color)
  }
  if (image[down] && image[down][sc] === init) {
      image = floodFill(image, down, sc, color)
  }
  if (image[sr][left] !== undefined && image[sr][left] === init) {
      image = floodFill(image, sr, left, color)
  }
  if (image[sr][right] !== undefined && image[sr][right] === init) {
      image = floodFill(image, sr, right, color)
  }

  return image
};

module.exports = floodFill