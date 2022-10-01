/*
Note: Runtime is highly variable between submissions and I don't have a premium subscription,
  which places me in a lower tier.
Runtime: 93 ms, faster than 61.94% of JavaScript online submissions for Remove Nth Node From End of List.
Memory Usage: 43.3 MB, less than 33.97% of JavaScript online submissions for Remove Nth Node From End of List.

Given the head of a linked list, remove the nth node from the end of the list and return its head.
*/

var removeNthFromEnd = function(head, n) {
  let temp = []

  if (head === null || head.next === null) {
    return null
  }

  while (head) {
    temp.push(head)
    head = head.next
  }

  let target = temp.length - n - 1

  if (temp[target] === undefined) {
    return temp[1] || null
  }

  temp[target].next = temp[target].next.next
  return temp[0]
};

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

let node = new ListNode(1, new ListNode(2))
console.log(removeNthFromEnd(node, 1))

module.exports = removeNthFromEnd