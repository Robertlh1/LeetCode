/*
Note: Runtime is highly variable between submissions and I don't have a premium subscription,
  which places me in a lower tier.
Runtime: 136 ms, faster than 26.84% of JavaScript online submissions for Linked List Cycle II.
Memory Usage: 44.8 MB, less than 72.08% of JavaScript online submissions for Linked List Cycle II.

Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return null.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to (0-indexed). It is -1 if there is no cycle. Note that pos is not passed as a parameter.

Do not modify the linked list.
*/

var detectCycle = function(head) {
  let cycle = null
  let nodes = []

  while (head !== null && cycle === null) {
      nodes.push(head)
      if (nodes.includes(head.next)) {
          cycle = head.next
      }
      head = head.next
  }

  return cycle
};