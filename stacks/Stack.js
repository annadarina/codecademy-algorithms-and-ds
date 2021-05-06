const LinkedList = require('../singly-linked-lists/LinkedList');

class Stack {
  constructor(maxSize = Infinity) {
    this.stack = new LinkedList();
    this.size = 0;
    this.maxSize = maxSize;
  }

  hasRoom() {
    return this.size < this.maxSize;
  }

  isEmpty() {
    return this.size === 0;
  }

  push(value) {
    if (this.hasRoom()) {
      this.stack.addToHead(value);
      this.size++;
    } else {
      throw(Error('Stack is full'));
    }
  }

  pop() {
    if (!this.isEmpty()) {
      const value = this.stack.removeHead();
      this.size--;
      return value;
    } else {
      console.log('Stack is empty.');
    }
  }

  peek() {
    if (!this.isEmpty()) {
      return this.stack.head.data;
    }

    return null;
  }

}

module.exports = Stack;
