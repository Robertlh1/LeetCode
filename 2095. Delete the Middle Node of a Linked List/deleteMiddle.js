/*
Note: Runtime is highly variable between submissions and I don't have a premium subscription,
  which places me in a lower tier.

You are given the head of a linked list. Delete the middle node, and return the head of the modified linked list.

The middle node of a linked list of size n is the ⌊n / 2⌋th node from the start using 0-based indexing, where ⌊x⌋ denotes the largest integer less than or equal to x.

For n = 1, 2, 3, 4, and 5, the middle nodes are 0, 1, 1, 2, and 2, respectively.
*/

/*
Second solution is much faster and uses fast and slow pointers which I've seen before in other linked list prompts

Runtime: 818 ms, faster than 88.94% of JavaScript online submissions for Delete the Middle Node of a Linked List.
Memory Usage: 84.8 MB, less than 94.07% of JavaScript online submissions for Delete the Middle Node of a Linked List.
*/

var deleteMiddle = function(head) {
  // If there is only one node in the list, return nothing
  if (!head.next) return null
  // The slow pointer, tortoise, will start at head while the fast pointer hare starts two nodes down
  let tortoise = head, hare = head.next.next
  // If hare or its next position are null, this will be skipped and we will return
  while (hare && hare.next) {
    // Otherwise, increment tortoise by one node and hare by two nodes
    tortoise = tortoise.next
    hare = hare.next.next
  }
  // Since hare is going twice as fast as tortoise, he ran right past the middle while the tortoise is reaching it
  // As a result, the tortoise wins the race and all we have to do is skip the next node and return
  tortoise.next = tortoise.next.next
  return head
}
/*
First solution stores each node in an array, then finds the middle via nodes.length / 2
Unfortunately, while functional, this was quite slow and memory intensive compared to other solutions

Runtime: 1285 ms, faster than 35.41% of JavaScript online submissions for Delete the Middle Node of a Linked List.
Memory Usage: 149 MB, less than 5.13% of JavaScript online submissions for Delete the Middle Node of a Linked List.

var deleteMiddle = function(head) {
  let nodes = [], node = head
  if (head.next === null) return null
  if (head.next.next === null) {
      head.next = null
      return head
  }

  while (node) {
      nodes.push(node)
      node = node.next
  }

  let mid = Math.floor(nodes.length / 2)
  nodes[mid - 1].next = nodes[mid + 1]
  return head
};
*/

module.exports = deleteMiddle