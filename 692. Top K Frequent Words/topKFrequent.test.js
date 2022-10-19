const topKFrequent = require('./topKFrequent')

describe('Testing topKFrequent', () => {
  test('topKFrequent() should return ["i","love"] when the input is ["i","love","leetcode","i","love","coding"], 2', () => {
    expect(topKFrequent(["i","love","leetcode","i","love","coding"], 2)).toEqual(["i","love"]);
  })
  test('topKFrequent() should return ["the","is","sunny","day"] when the input is ["the","day","is","sunny","the","the","the","sunny","is","is"], 4', () => {
    expect(topKFrequent(["the","day","is","sunny","the","the","the","sunny","is","is"], 4)).toEqual(["the","is","sunny","day"]);
  })
  test('topKFrequent() should return ["i","love","coding"] when the input is ["i","love","leetcode","i","love","coding"], 3', () => {
    expect(topKFrequent(["i","love","leetcode","i","love","coding"], 3)).toEqual(["i","love","coding"]);
  })
})