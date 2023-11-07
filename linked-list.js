/**
 * Implementation of a linked list factory function
 * Note that this is for pure learning purposes
 * This can be easily replaced by arrays */

function Node(value = null, nextNode = null) {
  return { value, nextNode };
}
function LinkedList(...values) {
  let headNode = null;
  let tailNode = null;
  let numberOfNodes = 0;
  values.forEach((value) => append(value));
  function append(value) {
    if (!headNode) {
      headNode = Node(value);
      tailNode = headNode;
      numberOfNodes++;
      return;
    }
    let newNode = Node(value);
    tailNode.nextNode = newNode;
    tailNode = newNode;
    numberOfNodes++;
  }
  function prepend(value) {
    let newNode = Node(value, headNode);
    headNode = newNode;
    numberOfNodes++;
  }
  function head() {
    return headNode;
  }
  function tail() {
    return tailNode;
  }
  function size() {
    return numberOfNodes;
  }
  function at(index) {
    /* indexes start at 1 */
    if (index <= 0 || index > numberOfNodes) return null;
    let currentNode = headNode,
      nodeIndex;
    for (nodeIndex = 1; nodeIndex <= index - 1; nodeIndex++)
      currentNode = currentNode.nextNode;
    return currentNode;
  }
  function pop() {
    let secondToLastNode = at(numberOfNodes - 1);
    secondToLastNode.nextNode = null;
    tailNode = secondToLastNode;
    numberOfNodes--;
  }
  function contains(value) {
    let currentNode = headNode;
    while (currentNode) {
      if (currentNode.value === value) return true;
      currentNode = currentNode.nextNode;
    }
    return false;
  }
  function find(value) {
    let currentNode = headNode,
      nodeIndex = 1;
    while (currentNode) {
      if (currentNode.value === value) return nodeIndex;
      currentNode = currentNode.nextNode;
      nodeIndex++;
    }
    return null;
  }
  function toString() {
    let string = "",
      currentNode = headNode;
    while (currentNode) {
      string += `( ${currentNode.value} ) -> `;
      currentNode = currentNode.nextNode;
    }
    string += "null";
    return string;
  }
  function insertAt(value, index) {
    if (index <= 0) return;
    if (index > numberOfNodes) {
      append(value);
      return;
    }
    if (index === 1) {
      prepend(value);
      return;
    }
    if (index === numberOfNodes + 1) {
      append(value);
      return;
    }
    const newNode = Node(value),
      nodeAtBeforeIndex = at(index - 1);
    newNode.nextNode = nodeAtBeforeIndex.nextNode;
    nodeAtBeforeIndex.nextNode = newNode;
    numberOfNodes++;
  }
  function removeAt(index) {
    const nodeAtBeforeIndex = at(index - 1);
    nodeAtBeforeIndex.nextNode = nodeAtBeforeIndex.nextNode.nextNode;
    numberOfNodes--;
    if (index === numberOfNodes) tailNode = nodeAtBeforeIndex;
  }
  return {
    append,
    prepend,
    size,
    head,
    tail,
    at,
    pop,
    contains,
    find,
    toString,
    insertAt,
    removeAt,
  };
}

const linkedList = LinkedList(11, 12, "maybe 13", 14);

linkedList.append("new tail?");
linkedList.prepend(true);
console.log(linkedList.toString()); // ( true ) -> ( 11 ) -> ( 12 ) -> ( maybe 13 ) -> ( 14 ) -> ( new tail? ) -> null
linkedList.pop();
console.log(linkedList.toString()); // ( true ) -> ( 11 ) -> ( 12 ) -> ( maybe 13 ) -> ( 14 ) -> null

console.log(linkedList.head().value); // true
console.log(linkedList.tail().value); // 14
console.log(linkedList.size()); // 5
console.log(linkedList.at(4).value); // maybe 13
console.log(linkedList.contains(true)); // true
console.log(linkedList.contains(false)); // false
console.log(linkedList.find(12)); // 3
console.log(linkedList.find(15)); // null

linkedList.insertAt(20, 3);
console.log(linkedList.at(3).value); // 20
linkedList.removeAt(4);
console.log(linkedList.toString()); // ( true ) -> ( 11 ) -> ( 20 ) -> ( maybe 13 ) -> ( 14 ) -> null
