const LinkedList = require('./LinkedList');

/**
 * Time complexity: O(n)
 * Space complexity: O(1)
 */
const nthLastNode = ( linkedList, n) => {
  let current = null;
  let tailPointer = linkedList.head;
  let count = 0;

  while (tailPointer) {
    tailPointer = tailPointer.next;
    if (count >= n) {
      if (!current) {
        current = linkedList.head;
      }

      current = current.next;
    }
    count++
  }

  return current;
};

// input
const testList = new LinkedList();
for (let i = 1; i <= 50; i++) {
  testList.addToHead(i);
}

testList.printList();
console.log(nthLastNode(testList, 4));
