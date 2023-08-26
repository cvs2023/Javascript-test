/* 
class Animal{
    constructor( a , b ){
        this.a = a;
        this.b = b;
    }
    eat(){
        console.log("hi lets eat")
    }
    sleep(){
        console.log("hi i am sleeping")
    }
}
const cat = new Animal('Whiskers', 5);

console.log( cat );

console.log(cat.a);  // Output: Whiskers
console.log(cat.b);   // Output: 5
cat.eat();              // Output: Whiskers is eating.
cat.sleep();            // Output: Whiskers is sleeping.


 */

// Linkedlist in js

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      // If the list is empty, set the new node as both the head and tail
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Otherwise, append the new node after the current tail
      this.tail.next = newNode;
      this.tail = newNode; //move tail
    }
  }
  preAppend(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }
  print(ll) {
    var temp = this.head;

    while (temp != null) {
      console.log(temp.value);
      temp = temp.next;
    }
  }
  printInArrayForm(ll) {
    const values = [];
    var temp = this.head;

    while (temp) {
      values.push(temp.value);
      temp = temp.next;
    }

    console.log(values);
    console.log(values.join("->"));
  }

  // Method to delete a node
  deleteNode(value) {
    if (!this.head) {
      // If the list is empty
      return;
    }

    if (this.head.value === value) {
      // If the node to be deleted is the head node
      this.head = this.head.next;
      return;
    }

    let currentNode = this.head;
    let prevNode = null;

    while (currentNode && currentNode.value !== value) {
      prevNode = currentNode;
      currentNode = currentNode.next;
    }

    if (!currentNode) {
      // If the node was not found in the list
      return;
    }

    prevNode.next = currentNode.next;
  }
}

const ll = new LinkedList();
ll.append(5);
ll.preAppend(2);
ll.print(ll);
ll.printInArrayForm(ll);
