var Queue = function() {
  var instance = Object.create(queueMethods);
  instance.front = 0;
  instance.back = 0;
  instance.storage = {};
  return instance;
};

var queueMethods = {
  enqueue: function (value) {
    this.storage[this.back] = value;
    this.back++;
  },
  dequeue: function () {
    var stored = this.storage[this.front];
    delete this.storage[this.front];
    this.front++;
    return stored;
  },
  size: function () {
    var currentSize = this.back - this.front;
    if (currentSize < 0) {
      return 0;
    }
    return currentSize;
  }
};


