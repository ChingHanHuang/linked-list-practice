import Node from "./node.js";

export default class LinkedList {
  constructor() {
    this.listHead = null;
  }

  append(value) {
    const node = new Node(value);
    if (this.listHead === null) {
      this.listHead = node;
      return;
    }

    let temp = this.listHead;
    while (temp !== null && temp.nextNode !== null) {
      temp = temp.nextNode;
    }
    temp.nextNode = node;
  }

  prepend(value) {
    const node = new Node(value);
    if (this.listHead === null) {
      this.listHead = node;
      return;
    }

    node.nextNode = this.listHead;
    this.listHead = node;
  }

  size() {
    let size = 0;
    let temp = this.listHead;
    while (temp !== null) {
      size++;
      temp = temp.nextNode;
    }
    return size;
  }

  head() {
    return this.listHead;
  }

  tail() {
    let temp = this.listHead;
    while (temp != null && temp.nextNode != null) {
      temp = temp.nextNode;
    }
    return temp;
  }

  at(index) {
    let temp = this.listHead;
    for (let i = 0; i < index; i++) {
      temp = temp.nextNode;
      if (!temp) return "There is no item for this index";
    }
    return temp;
  }

  pop() {
    if (this.listHead == null) return "There is no item could be popped";

    let temp = this.listHead;
    let pre = this.listHead;
    while (temp && temp.nextNode) {
      pre = temp;
      temp = temp.nextNode;
    }
    pre.nextNode = null;
    return temp;
  }

  contains(value) {
    let temp = this.listHead;
    while (temp !== null) {
      if (temp.value === value) return true;
      temp = temp.nextNode;
    }
    return false;
  }

  find(value) {
    let temp = this.listHead;
    let idx = 0;
    while (temp != null) {
      if (temp.value === value) return idx;
      temp = temp.nextNode;
      idx++;
    }
    return null;
  }

  toString() {
    let stringList = "";
    let temp = this.listHead;
    while (temp != null) {
      stringList += `${temp.value} -> `;
      temp = temp.nextNode;
    }
    return (stringList += "null");
  }

  insertAt(value, index) {
    if (this.listHead === null) {
      this.append(value);
    } else {
      let node = new Node(value);
      let temp = this.listHead;
      let pre = null;
      for (let i = 0; i < index; i++) {
        if (temp == null) {
          pre.nextNode = node;
          return;
        }
        pre = temp;
        temp = temp.nextNode;
      }
      if (pre == null) {
        node.nextNode = this.listHead;
        this.listHead = node;
      } else {
        node.nextNode = temp;
        pre.nextNode = node;
      }
    }
  }

  removeAt(index) {
    if (this.listHead == null) return "There is no item could be removed";

    let temp = this.listHead;
    let pre = null;
    for (let i = 0; i < index; i++) {
      if (temp == null) return "There is no item could be removed";

      pre = temp;
      temp = temp.nextNode;
    }
    pre.nextNode = temp.nextNode;
  }
}

LinkedList.fromValues = function (...values) {
  let ll = new LinkedList();
  for (let val of values) ll.append(val);
  return ll;
};
