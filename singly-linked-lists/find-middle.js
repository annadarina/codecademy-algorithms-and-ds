const LinkedList = require('./LinkedList');

/**
 * Pointers at Different Speeds
 */
const findMiddle = (linkedList) => {
  let fastPointer = linkedList.head;
  let slowPointer = linkedList.head;

  while (fastPointer) {
    fastPointer = fastPointer.getNextNode();

    if (fastPointer !== null) {
      fastPointer = fastPointer.getNextNode();
      slowPointer = slowPointer.getNextNode();
    }
  }

  return slowPointer;
};

// input
const testList = new LinkedList();
for (let i = 1; i <= 7; i++) {
  testList.addToTail(i);
}

testList.printList();
const output = findMiddle(testList);
console.log(output);
