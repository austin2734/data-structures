var Stack = function() {
  var instance = {
    top: 0,
    storage: {}
  };

  Object.assign(instance, stackMethods);
  return instance;
};


var stackMethods = {
  push: function (value) {
    this.storage[this.top] = value;
    this.top++;
  },
  pop: function () {
    if (this.top > 0) {
      this.top--;
    }
    var stored = this.storage[this.top];
    delete this.storage[this.top];
    return stored;
  },
  size: function () {
    return this.top;
  }
};


