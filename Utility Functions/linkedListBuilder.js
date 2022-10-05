const ListNode = require('./ListNode')

function linkedListBuilder(arr) {
  if (!arr || arr.length <= 0) return null
  let root = new ListNode(arr[0])
  let temp = root
  if (arr.length === 1) return root

  for (let i = 1; i < arr.length; i++) {
    temp.next = new ListNode(arr[i])
    temp = temp.next
  }

  return root
}

module.exports = linkedListBuilder