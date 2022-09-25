/*
Note: Runtime is highly variable between submissions and I don't have a premium subscription,
  which places me in a lower tier.
Runtime: 125 ms, faster than 87.95% of JavaScript online submissions for Design Circular Queue.
Memory Usage: 49.2 MB, less than 88.46% of JavaScript online submissions for Design Circular Queue.
*/

 /*
 * @param {number} k
 */
 var MyCircularQueue = function(k) {
  this.size = 0
  this.limit = k
  this.queue = {}
  this.tail = 0
  this.head = 1
};

/**
* @param {number} value
* @return {boolean}
*/
MyCircularQueue.prototype.enQueue = function(value) {
  if (!this.isFull()) {
      this.tail ++
      this.size ++
      if (this.tail > this.limit) {
          this.tail = 1
      }
      this.queue[this.tail] = value
      return true
  }
  return false
};

/**
* @return {boolean}
*/
MyCircularQueue.prototype.deQueue = function() {
  if (!this.isEmpty()) {
      delete this.queue[this.head]
      this.head++
      if (this.head > this.limit) {
          this.head = 1
      }
      this.size--
      return true
  }
  return false
};

/**
* @return {number}
*/
MyCircularQueue.prototype.Front = function() {
  if (this.isEmpty()) {
      return -1
  }
  return this.queue[this.head]
};

/**
* @return {number}
*/
MyCircularQueue.prototype.Rear = function() {
  if (this.isEmpty()) {
      return -1
  }
  return this.queue[this.tail]
};

/**
* @return {boolean}
*/
MyCircularQueue.prototype.isEmpty = function() {
  if (this.size > 0) {
      return false
  } else {
      return true
  }
};

/**
* @return {boolean}
*/
MyCircularQueue.prototype.isFull = function() {
  if (this.size >= this.limit) {
      return true
  }
  return false
};