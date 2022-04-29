// Runtime: 80 ms, faster than 55.77% of JavaScript online submissions for Alphabet Board Path.
// Memory Usage: 42.2 MB, less than 75.00% of JavaScript online submissions for Alphabet Board Path.

var alphabetBoardPath = function(target) {
  let positions = {
    a: '00', b: '01', c: '02', d: '03', e: '04',
    f: '10', g: '11', h: '12', i: '13', j: '14',
    k: '20', l: '21', m: '22', n: '23', o: '24',
    p: '30', q: '31', r: '32', s: '33', t: '34',
    u: '40', v: '41', w: '42', x: '43', y: '44',
    z: '50'
  }
  let board = [
    "abcde",
    "fghij",
    "klmno",
    "pqrst",
    "uvwxy",
    "z"
  ]

  let result = ''
  let cursor = [0, 0]

  while (target.length > 0) {
    if (target[0] === board[cursor[0]][cursor[1]]) {
      debugger;
      target = target.slice(1)
      result += '!'
    } else {
      let targetIndex = positions[target[0]]
      if (targetIndex[0] > cursor[0]) {
        for (var j = cursor[0]; j < targetIndex[0]; j++) {
          if (board[j + 1][cursor[1]] !== undefined) {
            result += 'D'
          } else {
            break;
          }
        }
        cursor[0] = j
      }
      if (targetIndex[0] < cursor[0]) {
        for (var k = cursor[0]; k > targetIndex[0]; k--) {
          result += 'U'
        }
        cursor[0] = k
      }
      if (targetIndex[1] > cursor[1]) {
        for (var l = cursor[1]; l < targetIndex[1]; l++) {
          result += 'R'
        }
        cursor[1] = l
      }
      if (targetIndex[1] < cursor[1]) {
        for (var m = cursor[1]; m > targetIndex[1]; m--) {
          result += 'L'
        }
        cursor[1] = m
      }
    }
  }

  return result
};

module.exports = alphabetBoardPath