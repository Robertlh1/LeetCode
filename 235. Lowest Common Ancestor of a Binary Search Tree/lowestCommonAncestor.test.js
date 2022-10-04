const lowestCommonAncestor = require('./lowestCommonAncestor')
const nodeBuilder = require('../Utility Functions/nodeBuilder')

describe("Testing lowestCommonAncestor", () => {
  test("lowestCommonAncestor() should return the value 6 node for an input of [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8", () => {
    let node = nodeBuilder([6,2,8,0,4,7,9,null,null,3,5])
    let p = node.left
    let q = node.right
    expect(lowestCommonAncestor(node,p,q)).toEqual(node);
  })
  test("lowestCommonAncestor() should return the value 2 node for an input of [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4", () => {
    let node = nodeBuilder([6,2,8,0,4,7,9,null,null,3,5])
    let p = node.left
    let q = node.left.right
    expect(lowestCommonAncestor(node, p, q)).toEqual(p);
  })
  test("lowestCommonAncestor() should return the value 2 node for an input of [2,1], p = 2, q = 1", () => {
    let node = nodeBuilder([2,1])
    let p = node
    let q = node.left
    expect(lowestCommonAncestor(node, p, q)).toEqual(node);
  })
})