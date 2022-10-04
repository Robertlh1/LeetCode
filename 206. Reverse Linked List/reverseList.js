/*
Note: Runtime is highly variable between submissions and I don't have a premium subscription,
  which places me in a lower tier.
Runtime: 61 ms, faster than 98.44% of JavaScript online submissions for Reverse Linked List.
Memory Usage: 44.1 MB, less than 71.54% of JavaScript online submissions for Reverse Linked List.

Given the head of a singly linked list, reverse the list, and return the reversed list.
*/

const ListNode = require('../Utility Functions/ListNode')

var reverseList = function(head) {
  if (head === null || head.next === null) {
      return head
  }

  let rev = new ListNode()
  let temp = []
  let cur = rev

  while (head !== null) {
      temp.push(head.val)
      head = head.next
  }

  for (let i = temp.length - 1; i >= 0; i--) {
      cur.val = temp[i]
      if (i !== 0) {
          cur.next = new ListNode()
          cur = cur.next
      }
  }

  return rev
};

module.exports = reverseList