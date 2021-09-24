var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var topOfStack = 0;
  // Implement the methods below
  someInstance.push = function(value) {
    storage[topOfStack] = value;
    topOfStack++;
  };

  someInstance.pop = function() {

    if (topOfStack > 0) {
      topOfStack--;
    }
    var stored = storage[topOfStack];
    delete storage[topOfStack];

    return stored;
  };

  someInstance.size = function() {
    return topOfStack;
  };

  return someInstance;
};
