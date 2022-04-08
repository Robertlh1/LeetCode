const addTwoNumbers = require('./AddTwoNumbers')

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

describe("Testing addTwoNumbers", () => {
  test("addTwoNumbers() should return [7, 0, 8] for the input [2,4,3], [5,6,4]", () => {
    let node1 = new ListNode(2, new ListNode(4, new ListNode(3)))
    let node2 = new ListNode(5, new ListNode(6, new ListNode(4)))
    let node3 = new ListNode(7, new ListNode(0, new ListNode(8)))
    expect(addTwoNumbers(node1, node2)).toEqual(node3);
  })
  test("addTwoNumbers() should return [0] for the input [0], [0]", () => {
    let node1 = new ListNode(0)
    let node2 = new ListNode(0)
    let node3 = new ListNode(0)
    expect(addTwoNumbers(node1, node2)).toEqual(node3);
  })
  test("addTwoNumbers() should return [8, 9, 9, 9, 0 ,0 ,0, 1] for the input [9,9,9,9,9,9,9], [9,9,9,9]", () => {
    let node1 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9)))))))
    let node2 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))))
    let node3 = new ListNode(8, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(1))))))))
    expect(addTwoNumbers(node1, node2)).toEqual(node3);
  })
});