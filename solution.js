const { nums, words } = require("./data/data.js");

// Create a Node class with properties
class Node {
  constructor(data, next = null){
    this.data = data
    this.next = next
  }
}

// Create a linked list with properties
class LinkedList {
  constructor(head = null){
    this.head = head 
    // this.size = this.size()
  }
  // insert
  insert(data){
    let newNode = new Node(data)

    if(!this.head) this.head = newNode
    else {
      let current = this.head
      while(current.next){
        // up until .next = null (the last (tail) node)
        current = current.next
      }
      current.next = newNode
    }
  }
  // size
  size(){
    let current = this.head
    let count = 0
    while(current) {
      count++
      current = current.next
    }
    return count
  }
  // delete by key/ at index
  delete(index){
    let current = this.head
    let count = 0
    /* 
      store previous and current.next nodes (prev = 1, curr.next =3)
      when index = count (prev.next = curr.next, 1.next = 3)
      */
    let prevNode = null
    // first index
    if(index === 0) this.head = null
    else {
      while(count < index){
        // up until index
        prevNode = current
        current = current.next
        count++
      }
      prevNode.next = current.next
    }
  }
}
const node1 = new Node(1, new Node(2))
const linked1 = new LinkedList(node1)
console.log(linked1.size)

module.exports = {
  Node,
  LinkedList,
};


/* 
  insert
size
delete by key
getFirst element
getLast element
search an element by key and return data
getKth retrieve kth element
getKthToLast retrieve kth from last element
isEmpty check if list is empty
clear the linked list
toArrayconvert data from linked list to an array
containsDuplicates check for duplicates - return true if contains duplicates, false if not
*/
