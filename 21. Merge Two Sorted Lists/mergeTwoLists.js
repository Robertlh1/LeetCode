/*
Note: Runtime is highly variable between submissions and I don't have a premium subscription,
  which places me in a lower tier.
Runtime: 85 ms, faster than 78.91% of JavaScript online submissions for Merge Two Sorted Lists.
Memory Usage: 44.6 MB, less than 17.24% of JavaScript online submissions for Merge Two Sorted Lists.

You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.
*/

/*
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

var mergeTwoLists = function(list1, list2) {
  if (list1 === null && list2 === null) {
      return null
  } else if (list1 === null) {
      return list2
  } else if (list2 === null) {
      return list1
  }

  let head

  if (list1.val > list2.val) {
      head = new ListNode(list2.val)
      list2 = list2.next
  } else {
      head = new ListNode(list1.val)
      list1 = list1.next
  }

  let prev = head

  while (list1 !== null && list2 !== null) {
      if (list1.val > list2.val) {
          prev.next = list2
          list2 = list2.next
      } else {
          prev.next = list1
          list1 = list1.next
      }
      prev = prev.next
  }

  while (list1 !== null) {
      prev.next = list1
      list1 = list1.next
      prev = prev.next
  }

  while (list2 !== null) {
      prev.next = list2
      list2 = list2.next
      prev = prev.next
  }

  return head
};

module.export = mergeTwoLists