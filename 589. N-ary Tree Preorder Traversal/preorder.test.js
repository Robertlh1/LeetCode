const preorder = require('./preorder')

describe("Testing preorder", () => {
  function Node(val, children) {
    this.val = val;
    this.children = children;
  };

  test("preorder() should return [1,3,5,6,2,4] for an input of [1,null,3,2,4,null,5,6]", () => {
    let leaf2 = new Node(6)
    let leaf1 = new Node(5)
    let branch1 = new Node(3, [leaf1, leaf2])
    let branch2 = new Node(2)
    let branch3 = new Node(4)
    let node = new Node(1, [branch1, branch2, branch3])
    expect(preorder(node)).toStrictEqual([1,3,5,6,2,4]);
  })
  test("preorder() should return [1,2,3,6,7,11,14,4,8,12,5,9,13,10] for an input of [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]", () => {
    let branch1 = new Node(2)
    let leaf1 = new Node(6)
    let leaf4 = new Node(14)
    let leaf3 = new Node(11, [leaf4])
    let leaf2 = new Node(7, [leaf3])
    let branch2 = new Node(3, [leaf1, leaf2])
    let leaf6 = new Node(12)
    let leaf5 = new Node(8, [leaf6])
    let branch3 = new Node(4, [leaf5])
    let leaf8 = new Node(13)
    let leaf7 = new Node(9, [leaf8])
    let leaf9 = new Node(10)
    let branch4 = new Node(5, [leaf7, leaf9])
    let node = new Node(1, [branch1, branch2, branch3, branch4])
    expect(preorder(node)).toStrictEqual([1,2,3,6,7,11,14,4,8,12,5,9,13,10]);
  })
})