class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.front = 0;
    this.back = 0;
    this.storage = {};
  }

  enqueue(value) {
    this.storage[this.back] = value;
    this.back++;
  }

  dequeue() {
    var stored = this.storage[this.front];
    delete this.storage[this.front];
    this.front++;
    return stored;
  }
  size() {
    var currentSize = this.back - this.front;
    if (currentSize < 0) {
      return 0;
    }
    return currentSize;
  }



}
