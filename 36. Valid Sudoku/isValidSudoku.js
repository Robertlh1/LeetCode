/*
Note: Runtime is highly variable between submissions and I don't have a premium subscription,
  which places me in a lower tier.
Runtime: 109 ms, faster than 76.82% of JavaScript online submissions for Valid Sudoku.
Memory Usage: 45.8 MB, less than 45.05% of JavaScript online submissions for Valid Sudoku.

Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.
*/

var isValidSudoku = function(board) {
  for (let i = 0; i < board.length; i++) {
    if (!checkRows(board, i)) return false
    if (!checkCols(board, i)) return false
    if (i % 3 === 0) if (!checkGrid(board, i)) return false
  }

  return true
};

var checkCols = function(board, row) {
  let curr = {}
  for (let i = 0; i < board.length; i++) {
    if (board[i][row] === '.') continue
    if (curr[board[i][row]]) return false
    curr[board[i][row]] = board[i][row]
  }
  return true
}

var checkRows = function(board, col) {
  let curr = {}
  for (let i = 0; i < board[col].length; i++) {
    if (board[col][i] === '.') continue
    if (curr[board[col][i]]) return false
    curr[board[col][i]] = board[col][i]
  }
  return true
}

var checkGrid = function(board, col) {
  for (let row = 0; row < board[0].length; row += 3) {
    let curr = {}
    for (let i = row; i < row + 3; i++) {
      for (let j = col; j < col + 3; j++) {
        if (board[i][j] === '.') continue
        if (curr[board[i][j]]) return false
        curr[board[i][j]] = board[i][j]
      }
    }
  }
  return true
}

module.exports = isValidSudoku