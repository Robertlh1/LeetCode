const average = require('./average')

describe('Testing average', () => {
  test('average() should return 2500.00000 when the input is [4000,3000,1000,2000]', () => {
    expect(average([4000,3000,1000,2000])).toEqual(2500.00000);
  })
  test('average() should return 2000.00000 when the input is [1000,2000,3000]', () => {
    expect(average([1000,2000,3000])).toEqual(2000.00000);
  })
  test('average() should return 41700.00000 when the input is [25000,48000,57000,86000,33000,10000,42000,3000,54000,29000,79000,40000]', () => {
    expect(average([25000,48000,57000,86000,33000,10000,42000,3000,54000,29000,79000,40000])).toEqual(41700.00000);
  })
})