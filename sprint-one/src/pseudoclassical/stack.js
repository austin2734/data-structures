var Stack = function() {
  this.top = 0;
  this.storage = {};
};


Stack.prototype.push = function(value) {
  this.storage[this.top] = value;
  this.top++;
};

Stack.prototype.pop = function() {
  this.top--;
  var stored = this.storage[this.top];
  return stored;
};

Stack.prototype.size = function () {
  if (this.top < 0) {
    return 0;
  }
  return this.top;
};


