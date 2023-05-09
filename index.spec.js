import { describe } from "yargs";
import LinkedList from "./linkedList";

test("#append, It adds a new node containing value to the end of the list", () => {
  const list = new LinkedList();
  list.append(5);
  list.append(7);

  expect(list.listHead.value).toBe(5);
  expect(list.listHead.nextNode.value).toBe(7);
});

test("#prepend, It adds a new node containing value to the start of the list", () => {
  const ll = new LinkedList();
  ll.prepend(32);
  ll.prepend(7);
  ll.prepend(5);

  expect(ll.listHead.value).toBe(5);
});

test("#size, Returns the total number of nodes in the list", () => {
  const ll = LinkedList.fromValues(5, 7, 32);
  expect(ll.size()).toBe(3);
});

test("#head, Returns the first node of the list", () => {
  const ll = LinkedList.fromValues(5, 7, 32);
  expect(ll.head().value).toBe(5);
});

test("#tail, Returns the last node of the list", () => {
  const ll = LinkedList.fromValues(5, 7, 32);
  expect(ll.tail().value).toBe(32);
});

test("#at, Returns the node at the given index", () => {
  const ll = LinkedList.fromValues(5, 7, 32, 55);
  expect(ll.at(2).value).toBe(32);
  expect(ll.at(7)).toBe("There is no item for this index");
});

test("#pop, Removes the last element from the list", () => {
  const ll1 = LinkedList.fromValues();
  expect(ll1.pop()).toBe("There is no item could be popped");

  const ll2 = LinkedList.fromValues(5, 7, 32, 55);
  expect(ll2.tail().value).toBe(55);
  expect(ll2.size()).toBe(4);
  expect(ll2.pop().value).toBe(55);
  expect(ll2.tail().value).toBe(32);
  expect(ll2.size()).toBe(3);
});

test("#contains, Returns true if the passed in value is in the list and otherwise returns false", () => {
  const ll = LinkedList.fromValues(5, 7, 32, 55);
  expect(ll.contains(7)).toBe(true);
  expect(ll.contains(8)).toBe(false);
});

test("#find, Returns the index of the node containing value, or null if not found", () => {
  const ll = LinkedList.fromValues(5, 7, 32, 55);
  expect(ll.find(7)).toBe(1);
  expect(ll.find(1)).toBe(null);
});

test("#toString, Represents linkedlist objects as strings", () => {
  const ll = LinkedList.fromValues(5, 7, 32, 55);
  expect(ll.toString()).toBe("5 -> 7 -> 32 -> 55 -> null");
});

test("#insertAt, Inserts a new node with the provided value at the given index", () => {
  const ll = LinkedList.fromValues(5, 7, 32, 55);
  ll.insertAt(999, 2);
  expect(ll.toString()).toBe("5 -> 7 -> 999 -> 32 -> 55 -> null");
  ll.insertAt(333, 0);
  expect(ll.toString()).toBe("333 -> 5 -> 7 -> 999 -> 32 -> 55 -> null");
  ll.insertAt(11, 10);
  expect(ll.toString()).toBe("333 -> 5 -> 7 -> 999 -> 32 -> 55 -> 11 -> null");
});

test("#removeAt, Removes the node at the given index", () => {
  const ll = LinkedList.fromValues(5, 7, 32, 55);
  ll.removeAt(2);
  expect(ll.toString()).toBe("5 -> 7 -> 55 -> null");
});
