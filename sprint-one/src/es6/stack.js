class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.top = 0;
    this.storage = {};
  }

  push(value) {
    this.storage[this.top] = value;
    this.top++;
  }
  pop(value) {
    this.top--;
    var stored = this.storage[this.top];
    delete this.storage[this.top];
    return stored;
  }
  size() {
    if (this.top < 0) {
      return 0;
    }
    return this.top;
  }
}