/*
Note: Runtime is highly variable between submissions and I don't have a premium subscription,
  which places me in a lower tier.
Runtime: 79 ms, faster than 93.34% of JavaScript online submissions for Linked List Cycle.
Memory Usage: 44.6 MB, less than 88.31% of JavaScript online submissions for Linked List Cycle.

Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.
*/


var hasCycle = function(head) {
  if (!head) return false
  if (head.next === head) return true
  let fast = head.next, slow = head, depth = 0

  while (fast) {
    if (fast === slow) return true
    fast = fast.next
    depth ++
    if (depth % 3 === 0) slow = slow.next
  }

  return false
};

module.exports = hasCycle