//Implementing a singly linked list with JavaScript

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head
        this.length = 1
    }

    append(value) {
        let newNode = new Node(value)
        this.tail.next = newNode
        this.tail = newNode
        this.length++
        return this
    }

    prepend(value) {
        let newNode = new Node(value)
        newNode.next = this.head
        this.head = newNode
        this.length++
        return this
    }

    printList() {
        let array = [];
        let currentNode = this.head
        for (let i = 0; i < this.length; i++) {
            if(currentNode) {
                array.push(currentNode.value)
                currentNode = currentNode.next
            }
        }
        return array
    }

    traverseToIndex(index) {
        let counter = 0
        let currentNode = this.head
        for (let i = 0; i < this.length; i++) {
            if (counter !== index) {
                currentNode = currentNode.next
                counter++
            }
            return currentNode
        }
    }

    insert(index, value) {
        if (index >= this.length) {
            return this.append(value)
        }

        let newNode = new Node(value)
        let preNode = this.traverseToIndex(index - 1)
        let holdingPointer = preNode.next
        preNode.next = newNode
        newNode.next = holdingPointer
        this.length++
        return this
    }

    remove(index) {
        let preNode = this.traverseToIndex(index - 1)
        let removedNode = preNode.next
        preNode.next = removedNode.next
        this.length--
        return this
    }
}

let myLinkedList = new LinkedList(10)
console.log(myLinkedList.append(5))
console.log(myLinkedList.append(16))
console.log(myLinkedList.prepend(1))
console.log(myLinkedList.insert(2, 99))
console.log(myLinkedList.printList())
console.log(myLinkedList.insert(20, 88))
console.log(myLinkedList.printList())
console.log(myLinkedList.remove(2))
console.log(myLinkedList.printList())