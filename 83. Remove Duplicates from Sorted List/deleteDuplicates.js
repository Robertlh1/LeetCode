/*
Note: Runtime is highly variable between submissions and I don't have a premium subscription,
  which places me in a lower tier.
Runtime: 68 ms, faster than 98.35% of JavaScript online submissions for Remove Duplicates from Sorted List.
Memory Usage: 44.1 MB, less than 75.67% of JavaScript online submissions for Remove Duplicates from Sorted List.

Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.
*/

var deleteDuplicates = function(head) {
  let temp = head

  debugger
  while (temp && temp.next) {
    if (temp.val === temp.next.val) temp.next = temp.next.next
    else temp = temp.next
  }

  return head
};

module.exports = deleteDuplicates