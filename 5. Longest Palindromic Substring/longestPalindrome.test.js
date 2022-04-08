const longestPalindrome = require('./longestPalindrome')

describe("Testing findMedianSortedArrays", () => {
  test("longestPalindrome() should return either 'bab' or 'aba' for an input of 'babad", () => {
    expect(String(longestPalindrome('babad'))).toMatch(/^bab|aba$/)
    // expect(longestPalindrome('babad')).toContain('bab');
  })
  test("longestPalindrome() should return 'bb' for an input of 'cbbd'", () => {
    expect(longestPalindrome('cbbd')).toBe('bb');
  })
  test("longestPalindrome() should return 'dabad' for an input of 'dabad'", () => {
    expect(longestPalindrome('dabad')).toBe('dabad');
  })
  test("longestPalindrome() should return 'gykrkyg' for an input of this really long string", () => {
    expect(longestPalindrome("zudfweormatjycujjirzjpyrmaxurectxrtqedmmgergwdvjmjtstdhcihacqnothgttgqfywcpgnuvwglvfiuxteopoyizgehkwuvvkqxbnufkcbodlhdmbqyghkojrgokpwdhtdrwmvdegwycecrgjvuexlguayzcammupgeskrvpthrmwqaqsdcgycdupykppiyhwzwcplivjnnvwhqkkxildtyjltklcokcrgqnnwzzeuqioyahqpuskkpbxhvzvqyhlegmoviogzwuiqahiouhnecjwysmtarjjdjqdrkljawzasriouuiqkcwwqsxifbndjmyprdozhwaoibpqrthpcjphgsfbeqrqqoqiqqdicvybzxhklehzzapbvcyleljawowluqgxxwlrymzojshlwkmzwpixgfjljkmwdtjeabgyrpbqyyykmoaqdambpkyyvukalbrzoyoufjqeftniddsfqnilxlplselqatdgjziphvrbokofvuerpsvqmzakbyzxtxvyanvjpfyvyiivqusfrsufjanmfibgrkwtiuoykiavpbqeyfsuteuxxjiyxvlvgmehycdvxdorpepmsinvmyzeqeiikajopqedyopirmhymozernxzaueljjrhcsofwyddkpnvcvzixdjknikyhzmstvbducjcoyoeoaqruuewclzqqqxzpgykrkygxnmlsrjudoaejxkipkgmcoqtxhelvsizgdwdyjwuumazxfstoaxeqqxoqezakdqjwpkrbldpcbbxexquqrznavcrprnydufsidakvrpuzgfisdxreldbqfizngtrilnbqboxwmwienlkmmiuifrvytukcqcpeqdwwucymgvyrektsnfijdcdoawbcwkkjkqwzffnuqituihjaklvthulmcjrhqcyzvekzqlxgddjoir")).toBe('gykrkyg');
  })
})