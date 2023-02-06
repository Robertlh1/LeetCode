const subdomainVisits = require('./subdomainVisits')

describe('Testing subdomainVisits', () => {

  test('subdomainVisits() should return ["9001 leetcode.com","9001 discuss.leetcode.com","9001 com"] when the input is ["9001 discuss.leetcode.com"]', () => {
    let expected = ["9001 leetcode.com","9001 discuss.leetcode.com","9001 com"]
    expect(subdomainVisits(["9001 discuss.leetcode.com"])).toEqual(expect.arrayContaining(expected));
  })

  test('subdomainVisits() should return ["901 mail.com","50 yahoo.com","900 google.mail.com","5 wiki.org","5 org","1 intel.mail.com","951 com"] when the input is ["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"]', () => {
    let expected = ["901 mail.com","50 yahoo.com","900 google.mail.com","5 wiki.org","5 org","1 intel.mail.com","951 com"]
    expect(subdomainVisits(["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"])).toEqual(expect.arrayContaining(expected));
  })
})