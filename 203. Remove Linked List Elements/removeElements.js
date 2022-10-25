/*
Note: Runtime is highly variable between submissions and I don't have a premium subscription,
  which places me in a lower tier.
Runtime: 72 ms, faster than 99.25% of JavaScript online submissions for Remove Linked List Elements.
Memory Usage: 45.2 MB, less than 99.52% of JavaScript online submissions for Remove Linked List Elements.

Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.
*/

var removeElements = function(head, val) {
  if (!head) return null

  while (head && head.val === val) {
    head = head.next ?? null
  }

  let temp = head

  while (temp && temp.next) {
    if (temp.next.val === val) temp.next = temp.next.next
    else temp = temp.next
  }

  return head
};

module.exports = removeElements