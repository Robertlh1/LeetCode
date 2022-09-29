/*
Note: Runtime is highly variable between submissions and I don't have a premium subscription,
  which places me in a lower tier.
Runtime: 59 ms, faster than 96.43% of JavaScript online submissions for Middle of the Linked List.
Memory Usage: 41.8 MB, less than 73.05% of JavaScript online submissions for Middle of the Linked List.

Given the head of a singly linked list, return the middle node of the linked list.

If there are two middle nodes, return the second middle node.
*/

var middleNode = function(head) {
  let nodes = []
  while (head !== null) {
      nodes.push(head)
      head = head.next
  }
  return nodes[Math.floor(nodes.length / 2)]
};