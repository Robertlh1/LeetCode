/*
Note: Runtime is highly variable between submissions and I don't have a premium subscription,
  which places me in a lower tier.
Runtime: 449 ms, faster than 92.88% of JavaScript online submissions for Time Based Key-Value Store.
Memory Usage: 87.5 MB, less than 87.45% of JavaScript online submissions for Time Based Key-Value Store.

Design a time-based key-value data structure that can store multiple values for the same key at different time stamps and retrieve the key's value at a certain timestamp.

Implement the TimeMap class:

TimeMap() Initializes the object of the data structure.
void set(String key, String value, int timestamp) Stores the key key with the value value at the given time timestamp.
String get(String key, int timestamp) Returns a value such that set was called previously, with timestamp_prev <= timestamp. If there are multiple such values, it returns the value associated with the largest timestamp_prev. If there are no values, it returns "".
*/

var TimeMap = function() {
  this.map = []
};

/*
* @param {string} key
* @param {string} value
* @param {number} timestamp
* @return {void}
*/
TimeMap.prototype.set = function(key, value, timestamp) {
  if (!this.map[timestamp]) {
    this.map[timestamp] = [key, value]
  }
  return null
};

/*
* @param {string} key
* @param {number} timestamp
* @return {string}
*/

TimeMap.prototype.get = function(key, timestamp) {
  if (this.map[timestamp]) {
    if (this.map[timestamp][0] === key) {
      return this.map[timestamp][1]
    }
  }
  for (let i = timestamp - 1; i >= 0; i--) {
    if (this.map[i]) {
      if (this.map[i][0] === key) {
        return this.map[i][1]
      }
    }
  }
  return ""
};

/**
* Your TimeMap object will be instantiated and called as such:
* var obj = new TimeMap()
* obj.set(key,value,timestamp)
* var param_2 = obj.get(key,timestamp)
*/

module.exports = TimeMap