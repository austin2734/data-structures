var Stack = function() {
  var instance = Object.create(stackMethods);
  instance.top = 0;
  instance.storage = {};
  return instance;
};

var stackMethods = {
  push: function(value) {
    this.storage[this.top] = value;
    this.top++;
  },
  pop: function() {
    if (this.top > 0) {
      this.top--;
    }
    var stored = this.storage[this.top];
    delete this.storage[this.top];
    return stored;
  },
  size: function() {
    if (this.top < 0) {
      return 0;
    }
    return this.top;
  }
};


