const findDuplicate = require('./findDuplicate')

describe("Testing findDuplicate", () => {
  test("findDuplicate() should return nothing", () => {
    expect(findDuplicate(["root/a 1.txt(abcd) 2.txt(efsfgh)","root/c 3.txt(abdfcd)","root/c/d 4.txt(efggdfh)"])).toBe([[]]);
  })
})