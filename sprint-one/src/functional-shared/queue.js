var Queue = function() {

  var instance = {
    front: 0,
    back: 0,
    storage: {}
  };
  Object.assign(instance, queueMethods);
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
  size: function() {
    if (this.back - this.front < 0) {
      return 0;
    }
    return (this.back - this.front);
  }

};


