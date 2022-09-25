const MyCircularQueue = require('./MyCircularQueue');

describe("Testing MyCircularQueue with a size of 3 values", () => {
  var testQueue = new MyCircularQueue(3)

  test("myCircularQueue() should return true for enQueueing the first value", () => {
    expect(testQueue.enQueue(1)).toBe(true);
  })
  test("myCircularQueue() should return true for enQueueing the second value", () => {
    expect(testQueue.enQueue(2)).toBe(true);
  })
  test("myCircularQueue() should return true for enQueueing the third value", () => {
    expect(testQueue.enQueue(3)).toBe(true);
  })
  test("myCircularQueue() should return false for attempting to enQueue a fourth value", () => {
    expect(testQueue.enQueue(4)).toBe(false);
  })
  test("myCircularQueue() should return the last value enQueued, which is 3", () => {
    expect(testQueue.Rear()).toBe(3)
  })
  test("myCircularQueue() should return true for isFull", () => {
    expect(testQueue.isFull()).toBe(true)
  })
  test("myCircularQueue() should return true when deQueueing a value", () => {
    expect(testQueue.deQueue()).toBe(true)
  })
  test("myCircularQueue() should return true for enQueueing a new third value", () => {
    expect(testQueue.enQueue(4)).toBe(true)
  })
  test("myCircularQueue() should return the last value enQueued, which is now 4", () => {
    expect(testQueue.Rear()).toBe(4)
  })
})