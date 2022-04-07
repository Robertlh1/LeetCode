function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

var addTwoNumbers = function(l1, l2) {
  let pairTotal = 0;
  let currentNode = new ListNode()
  let result = currentNode

  // While either linked list still has more values
  while (l1 !== null || l2 !== null) {
    // Add the current value from L1 to the pair total
    if (l1 !== null) {
      pairTotal += l1.val
      l1 = l1.next
    }

    // Add the current value from L2 to the pair total
    if (l2 !== null) {
      pairTotal += l2.val
      l2 = l2.next
    }

    currentNode.next = new ListNode(pairTotal % 10)
    currentNode = currentNode.next

    // Reset the total to either 1 or 0 depending on if its a 2 or 1 digit number
    if (pairTotal > 9) {
      pairTotal = 1
      // If the very last node results in a 2 digit number, add an extra node at the end of the return list
      if (l1 === null && l2 === null) {
        currentNode.next = new ListNode(pairTotal)
      }
    } else {
      pairTotal = 0
    }
  }
  // Return new the linked list
  return result.next
}

module.exports = addTwoNumbers