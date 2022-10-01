const removeNthFromEnd = require('./removeNthFromEnd')

describe("Testing removeNthFromEnd", () => {
  function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }

  test("removeNthFromEnd() should return [1,2,3,5] for an input of [1,2,3,4,5], 2", () => {
    let node = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))))
    let testNode = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(5))))
    expect(removeNthFromEnd(node, 2)).toStrictEqual(testNode);
  })
  test("removeNthFromEnd() should return null for an input of [1], 1", () => {
    let node = new ListNode(1)
    expect(removeNthFromEnd(node, 1)).toBe(null);
  })
  test("removeNthFromEnd() should return [1] for an input of [1,2], 1", () => {
    let node = new ListNode(1, new ListNode(2))
    let testNode = new ListNode(1)
    expect(removeNthFromEnd(node, 1)).toStrictEqual(testNode);
  })
  test("removeNthFromEnd() should return [2] for an input of [1,2], 2", () => {
    let node = new ListNode(1, new ListNode(2))
    let testNode = new ListNode(2)
    expect(removeNthFromEnd(node, 2)).toStrictEqual(testNode);
  })
})