const LinkedList = require('./LinkedList.js');

/**
 * Time complexity: O(n)
 * Space complexity: O(1)
 */
function swapNodes(list, data1, data2) {
  console.log(`Swapping ${data1} and ${data2}:`);

  if (data1 === data2) {
    console.log('Elements are the same, no swap to be made');
    return;
  }

  let node1 = list.head;
  let node2 = list.head;

  let node1Prev = null;
  let node2Prev = null;

  // 1. Finding the matching and preciding nodes
  while (node1 !== null) {
    if (node1.data === data1) {
      break;
    }

    node1Prev = node1;
    node1 = node1.getNextNode();
  }

  while (node2 !== null) {
    if (node2.data === data2) {
      break;
    }

    node2Prev = node2;
    node2 = node2.getNextNode();
  }

  if (node1 === null || node2 === null) {
    console.log('Swap not possible - one or more elements are not in the list');
    return;
  }

  // 2. Updating the preceding nodes' pointers
  if (node1Prev === null) {
    list.head = node2;
  } else {
    node1Prev.setNextNode(node2);
  }

  if (node2Prev === null) {
    list.head = node1;
  } else {
    node2Prev.setNextNode(node1);
  }

  // 3. Updating the nodes' next pointers
  let temp = node1.getNextNode();
  node1.setNextNode(node2.getNextNode());
  node2.setNextNode(temp);
}

// input
const testList = new LinkedList();
for (let i = 0; i <= 10; i++) {
  testList.addToTail(i);
}

testList.printList();
swapNodes(testList, 2, 5);
testList.printList();
