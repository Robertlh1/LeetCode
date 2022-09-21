/*
Runtime: 195 ms, faster than 58.55% of JavaScript online submissions for Find Duplicate File in System.
Memory Usage: 58 MB, less than 78.29% of JavaScript online submissions for Find Duplicate File in System.
*/
var findDuplicate = function(paths) {
  let dir = {}
  for (let i = 0; i < paths.length; i++) {
      let current = paths[i].split(' ')
      let path = current[0]
      for (let j = 1; j < current.length; j++) {
          let begin = current[j].indexOf('(')
          let end = current[j].indexOf(')')
          let content = current[j].substring(begin + 1, end)
          if (dir[content] === undefined) {
              dir[content] = []
          }
          dir[content].push(path + '/' + current[j].substring(0, begin))
      }
  }
  for (key in dir) {
    if (dir[key].length <= 1) {
      delete dir[key]
    }
  }
  return Object.values(dir)
};

findDuplicate(["root/a 1.txt(abcd) 2.txt(efsfgh)","root/c 3.txt(abdfcd)","root/c/d 4.txt(efggdfh)"])
// module.exports = findDuplicate