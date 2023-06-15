const maxLevelSum = require('./maxLevelSum')
const nodeBuilder = require('../Utility Functions/nodeBuilder')

describe("Testing maxLevelSum", () => {
  test("maxLevelSum() should return 2 for an input of [1,7,0,7,-8,null,null]", () => {
    let root = nodeBuilder([1,7,0,7,-8,null,null])
    expect(maxLevelSum(root)).toEqual(2);
  })
  test("maxLevelSum() should return 2 for an input of [989,null,10250,98693,-89388,null,null,null,-32127]", () => {
    let root = nodeBuilder([989,null,10250,98693,-89388,null,null,null,-32127])
    expect(maxLevelSum(root)).toEqual(2);
  })
  test("maxLevelSum() should return 3 for an input of [-100,-200,-300,-20,-5,-10,null]", () => {
    let root = nodeBuilder([-100,-200,-300,-20,-5,-10,null])
    expect(maxLevelSum(root)).toEqual(3);
  })
  test("maxLevelSum() should return 1 for an input of [1,1,0,7,-8,-7,9]", () => {
    let root = nodeBuilder([1,1,0,7,-8,-7,9])
    expect(maxLevelSum(root)).toEqual(1);
  })
  test("maxLevelSum() should return 3 for an input of [39608,null,-34332,84856,62101,98129,null,null,-26118,null,57785,-75141,null,null,-63491,-63367]", () => {
    let root = nodeBuilder([39608,null,-34332,84856,62101,98129,null,null,-26118,null,57785,-75141,null,null,-63491,-63367])
    expect(maxLevelSum(root)).toEqual(3);
  })
})