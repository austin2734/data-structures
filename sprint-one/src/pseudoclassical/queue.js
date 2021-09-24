var Queue = function() {

  this.front = 0;
  this.back = 0;
  this.storage = {};

};

Queue.prototype.enqueue = function(value) {
  this.storage[this.back] = value;
  this.back++;
};
Queue.prototype.dequeue = function() {
  var stored = this.storage[this.front];
  delete this.storage[this.front];
  this.front++;
  return stored;
};
Queue.prototype.size = function() {
  var currentSize = this.back - this.front;
  if (currentSize < 0) {
    return 0;
  }
  return currentSize;
};



