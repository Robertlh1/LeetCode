/*
Note: Runtime is highly variable between submissions and I don't have a premium subscription,
  which places me in a lower tier.
Runtime 173 ms Beats 86.18%
Memory 75.4 MB Beats 55.76%

In a linked list of size n, where n is even, the ith node (0-indexed) of the linked list is known as the twin of the (n-1-i)th node, if 0 <= i <= (n / 2) - 1.

For example, if n = 4, then node 0 is the twin of node 3, and node 1 is the twin of node 2. These are the only nodes with twins for n = 4.
The twin sum is defined as the sum of a node and its twin.

Given the head of a linked list with even length, return the maximum twin sum of the linked list.
*/

var pairSum = function(head) {
  let nodes = [], max = 0

  while (head !== null) {
    nodes.push(head.val)
    head = head.next
  }

  let n = nodes.length

  for (let i = 0; i < nodes.length; i++) {
    if (0 <= i && i <= (n / 2) - 1) {
      max = Math.max(max, nodes[i] + nodes[n - 1 - i])
    }
  }

  return max
};

module.exports = pairSum